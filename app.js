const CATEGORIES = ["すべて", ...new Set(TOPICS.map((topic) => topic.category))];
const PRESETS = [
  {
    id: "all",
    label: "全部",
    categories: CATEGORIES.filter((category) => category !== "すべて")
  },
  {
    id: "party",
    label: "飲み会",
    categories: ["どうでもいい話", "懐かしい話", "食べ物", "もしも話", "謎のこだわり"]
  },
  {
    id: "friends",
    label: "友達",
    categories: ["どうでもいい話", "懐かしい話", "食べ物", "人間関係", "子どもの頃"]
  },
  {
    id: "first",
    label: "初対面",
    categories: ["どうでもいい話", "食べ物", "もしも話", "謎のこだわり"]
  },
  {
    id: "online",
    label: "オンライン",
    categories: ["どうでもいい話", "仕事・学校", "人間関係", "もしも話", "ちょっとだけ深い話"]
  },
  {
    id: "generation",
    label: "世代差",
    categories: ["ジェネレーションギャップ", "懐かしい話", "子どもの頃"]
  },
  {
    id: "soft-deep",
    label: "ゆる深め",
    categories: ["懐かしい話", "人間関係", "謎のこだわり", "子どもの頃", "ちょっとだけ深い話"]
  }
];
const HISTORY_LIMIT = 60;
const RECENT_EXCLUDE_LIMIT = 20;

const storage = {
  favorites: readJson("favorites", []),
  history: readJson("history", []),
  mutedTopics: normalizeMutedTopics()
};

let currentTopic = null;
let deferredInstallPrompt = null;
let isDrawing = false;
let activePresetId = "all";

const elements = {
  topicPanel: document.querySelector(".topic-panel"),
  topicCategory: document.querySelector("#topicCategory"),
  topicDepth: document.querySelector("#topicDepth"),
  topicText: document.querySelector("#topicText"),
  presetOptions: document.querySelector("#presetOptions"),
  categoryPanelButton: document.querySelector("#categoryPanelButton"),
  categoryPickerBody: document.querySelector("#categoryPickerBody"),
  categorySummary: document.querySelector("#categorySummary"),
  categoryChecks: document.querySelector("#categoryChecks"),
  toggleCategoriesButton: document.querySelector("#toggleCategoriesButton"),
  drawButton: document.querySelector("#drawButton"),
  anyCategoryButton: document.querySelector("#anyCategoryButton"),
  favoriteButton: document.querySelector("#favoriteButton"),
  muteButton: document.querySelector("#muteButton"),
  resetMutedButton: document.querySelector("#resetMutedButton"),
  clearHistoryButton: document.querySelector("#clearHistoryButton"),
  poolText: document.querySelector("#poolText"),
  statusText: document.querySelector("#statusText"),
  favoritesList: document.querySelector("#favoritesList"),
  favoritesCount: document.querySelector("#favoritesCount"),
  historyList: document.querySelector("#historyList"),
  historyCount: document.querySelector("#historyCount"),
  installButton: document.querySelector("#installButton"),
  navButtons: document.querySelectorAll(".nav-button"),
  views: document.querySelectorAll(".view")
};

init();

function init() {
  renderCategoryChecks();
  renderPresetOptions();
  updateCategoryUi();
  bindEvents();
  drawTopic();
  renderAllLists();
  registerServiceWorker();
}

function bindEvents() {
  elements.drawButton.addEventListener("click", () => drawTopic("", { animate: true }));
  elements.anyCategoryButton.addEventListener("click", () => {
    drawTopic("カテゴリを気にせず引きました。", { animate: true, ignoreCategory: true });
  });
  elements.favoriteButton.addEventListener("click", toggleFavorite);
  elements.muteButton.addEventListener("click", muteCurrentTopic);
  elements.categoryPanelButton.addEventListener("click", toggleCategoryPanel);
  elements.toggleCategoriesButton.addEventListener("click", toggleCategoryChecks);
  elements.resetMutedButton.addEventListener("click", resetMutedTopics);
  elements.clearHistoryButton.addEventListener("click", clearHistory);
  elements.installButton.addEventListener("click", promptInstall);

  elements.navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      showView(button.dataset.view);
    });
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    elements.installButton.hidden = false;
  });
}

function renderCategoryChecks() {
  CATEGORIES.filter((category) => category !== "すべて").forEach((category) => {
    const label = document.createElement("label");
    label.className = "category-check";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = category;
    input.checked = true;
    input.addEventListener("change", () => {
      activePresetId = "custom";
      updateCategoryUi();
      refreshCandidatePreview();
    });

    const text = document.createElement("span");
    text.textContent = category;

    label.append(input, text);
    elements.categoryChecks.append(label);
  });
}

function renderPresetOptions() {
  PRESETS.forEach((preset) => {
    const button = document.createElement("button");
    button.className = "preset-button";
    button.type = "button";
    button.dataset.preset = preset.id;
    button.textContent = preset.label;
    button.addEventListener("click", () => applyPreset(preset.id));
    elements.presetOptions.append(button);
  });
}

function drawTopic(statusMessage = "", options = {}) {
  if (isDrawing) return;

  const pool = getCandidatePool({ ignoreCategory: Boolean(options.ignoreCategory) });
  let candidates = pool.freshCandidates;
  let usedRecentFallback = false;

  updatePoolText(pool.totalCount, pool.freshCount, pool.mode);

  if (candidates.length === 0) {
    candidates = pool.baseCandidates;
    usedRecentFallback = true;
  }

  if (candidates.length === 0) {
    currentTopic = null;
    elements.topicCategory.textContent = "候補なし";
    elements.topicDepth.textContent = "条件を変更";
    elements.topicText.textContent = "この条件で出せるお題がありません。カテゴリや深さを変えてみてください。";
    elements.favoriteButton.disabled = true;
    elements.muteButton.disabled = true;
    elements.statusText.textContent = "今日は出さないにしたお題が多い場合も、候補が少なくなります。";
    return;
  }

  if (options.animate) {
    animateTopicSelection(candidates, statusMessage, usedRecentFallback);
    return;
  }

  commitTopic(pickRandom(candidates), statusMessage, usedRecentFallback);
}

function refreshCandidatePreview() {
  if (isDrawing) return;

  const pool = getCandidatePool();
  updatePoolText(pool.totalCount, pool.freshCount, pool.mode);
  elements.statusText.textContent = "条件を変更しました。ガチャを引くと反映されます。";
}

function getCandidatePool(options = {}) {
  const selectedCategories = getSelectedCategories();
  const mutedIds = new Set(storage.mutedTopics.ids);
  const recentIds = new Set(storage.history.slice(0, RECENT_EXCLUDE_LIMIT).map((item) => item.id));
  const mode = options.ignoreCategory
    ? "カテゴリ無視"
    : `選択 ${selectedCategories.length}カテゴリ`;

  const baseCandidates = TOPICS.filter((topic) => {
    const matchesCategory = options.ignoreCategory
      || selectedCategories.includes(topic.category);
    return matchesCategory && !mutedIds.has(topic.id);
  });

  const freshCandidates = baseCandidates.filter((topic) => !recentIds.has(topic.id));

  return {
    baseCandidates,
    freshCandidates,
    totalCount: baseCandidates.length,
    freshCount: freshCandidates.length,
    mode
  };
}

function getSelectedCategories() {
  const selected = [...elements.categoryChecks.querySelectorAll("input:checked")]
    .map((input) => input.value);
  return selected.length > 0 ? selected : CATEGORIES.filter((category) => category !== "すべて");
}

function applyPreset(presetId) {
  if (isDrawing) return;

  const preset = PRESETS.find((item) => item.id === presetId);
  if (!preset) return;

  const presetCategories = new Set(preset.categories);
  elements.categoryChecks.querySelectorAll("input").forEach((input) => {
    input.checked = presetCategories.has(input.value);
  });
  activePresetId = presetId;
  updateCategoryUi();
  refreshCandidatePreview();
  elements.statusText.textContent = `${preset.label}向けにカテゴリを切り替えました。`;
}

function toggleCategoryPanel() {
  if (isDrawing) return;

  const shouldOpen = elements.categoryPickerBody.hidden;
  elements.categoryPickerBody.hidden = !shouldOpen;
  elements.categoryPanelButton.setAttribute("aria-expanded", String(shouldOpen));
  elements.categoryPanelButton.textContent = shouldOpen ? "閉じる" : "カテゴリを選ぶ";
}

function toggleCategoryChecks() {
  if (isDrawing) return;

  const inputs = [...elements.categoryChecks.querySelectorAll("input")];
  const shouldCheck = !inputs.every((input) => input.checked);
  inputs.forEach((input) => {
    input.checked = shouldCheck;
  });
  activePresetId = "custom";
  updateCategoryUi();
  refreshCandidatePreview();
}

function updateCategoryUi() {
  const inputs = [...elements.categoryChecks.querySelectorAll("input")];
  const selectedCount = inputs.filter((input) => input.checked).length;
  const currentPreset = PRESETS.find((preset) => preset.id === activePresetId);
  const prefix = currentPreset ? currentPreset.label : "カスタム";

  elements.categorySummary.textContent = `${prefix} / ${selectedCount}カテゴリ選択中`;
  elements.toggleCategoriesButton.textContent = inputs.every((input) => input.checked)
    ? "すべて外す"
    : "すべて選ぶ";
  elements.presetOptions.querySelectorAll(".preset-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.preset === activePresetId);
  });
}

function animateTopicSelection(candidates, statusMessage, usedRecentFallback) {
  isDrawing = true;
  setDrawingControls(true);
  elements.topicPanel.classList.add("is-drawing");
  elements.statusText.textContent = "抽選中...";

  const steps = 11;
  let step = 0;

  const tick = () => {
    const previewTopic = pickRandom(candidates);
    showTopicPreview(previewTopic);
    step += 1;

    if (step < steps) {
      const delay = 48 + step * 18;
      window.setTimeout(tick, delay);
      return;
    }

    window.setTimeout(() => {
      elements.topicPanel.classList.remove("is-drawing");
      commitTopic(pickRandom(candidates), statusMessage, usedRecentFallback);
      setDrawingControls(false);
      isDrawing = false;
    }, 180);
  };

  tick();
}

function showTopicPreview(topic) {
  elements.topicCategory.textContent = topic.category;
  elements.topicDepth.textContent = topic.depth;
  elements.topicText.textContent = topic.text;
}

function commitTopic(topic, statusMessage = "", usedRecentFallback = false) {
  currentTopic = topic;
  addHistory(currentTopic.id);
  renderCurrentTopic();
  renderAllLists();

  elements.statusText.textContent = statusMessage || (usedRecentFallback
    ? "候補が少ないため、直近20件からも再抽選しました。"
    : "");
}

function setDrawingControls(disabled) {
  elements.drawButton.disabled = disabled;
  elements.anyCategoryButton.disabled = disabled;
  elements.favoriteButton.disabled = disabled;
  elements.muteButton.disabled = disabled;
  elements.resetMutedButton.disabled = disabled || storage.mutedTopics.ids.length === 0;
  elements.categoryPanelButton.disabled = disabled;
  elements.toggleCategoriesButton.disabled = disabled;
  elements.presetOptions.querySelectorAll("button").forEach((button) => {
    button.disabled = disabled;
  });
  elements.categoryChecks.querySelectorAll("input").forEach((input) => {
    input.disabled = disabled;
  });
}

function updatePoolText(totalCandidates, freshCandidates, mode = "") {
  const mutedCount = storage.mutedTopics.ids.length;
  const prefix = mode ? `${mode} / ` : "";
  const suffix = mutedCount > 0 ? ` / 今日の非表示 ${mutedCount}件` : "";
  elements.poolText.textContent = `${prefix}候補 ${totalCandidates}件（直近20件を除くと ${freshCandidates}件）${suffix}`;
  elements.resetMutedButton.disabled = mutedCount === 0 || isDrawing;
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function renderCurrentTopic() {
  if (!currentTopic) return;

  elements.topicCategory.textContent = currentTopic.category;
  elements.topicDepth.textContent = currentTopic.depth;
  elements.topicText.textContent = currentTopic.text;
  elements.favoriteButton.disabled = false;
  elements.muteButton.disabled = false;
  updateFavoriteButton();
}

function toggleFavorite() {
  if (!currentTopic || isDrawing) return;

  if (storage.favorites.includes(currentTopic.id)) {
    storage.favorites = storage.favorites.filter((id) => id !== currentTopic.id);
    elements.statusText.textContent = "お気に入りから外しました。";
  } else {
    storage.favorites = [currentTopic.id, ...storage.favorites];
    elements.statusText.textContent = "お気に入りに追加しました。";
  }

  saveJson("favorites", storage.favorites);
  updateFavoriteButton();
  renderFavorites();
}

function muteCurrentTopic() {
  if (!currentTopic || isDrawing) return;

  if (!storage.mutedTopics.ids.includes(currentTopic.id)) {
    storage.mutedTopics.ids.push(currentTopic.id);
    saveJson("mutedTopics", storage.mutedTopics);
  }

  drawTopic("今日はこのお題を出さないようにしました。", { animate: true });
}

function resetMutedTopics() {
  if (isDrawing || storage.mutedTopics.ids.length === 0) return;

  storage.mutedTopics = { date: todayKey(), ids: [] };
  saveJson("mutedTopics", storage.mutedTopics);
  drawTopic("今日の非表示をリセットしました。", { animate: true });
}

function addHistory(id) {
  storage.history = [
    { id, shownAt: new Date().toISOString() },
    ...storage.history.filter((item) => item.id !== id)
  ].slice(0, HISTORY_LIMIT);

  saveJson("history", storage.history);
}

function renderAllLists() {
  renderFavorites();
  renderHistory();
}

function renderFavorites() {
  const favoriteTopics = storage.favorites
    .map((id) => TOPICS.find((topic) => topic.id === id))
    .filter(Boolean);

  elements.favoritesCount.textContent = `${favoriteTopics.length}件`;
  elements.favoritesList.replaceChildren();

  if (favoriteTopics.length === 0) {
    elements.favoritesList.append(emptyState("気に入ったお題を保存すると、ここに表示されます。"));
    return;
  }

  favoriteTopics.forEach((topic) => {
    const item = createTopicListItem(topic);
    const removeButton = document.createElement("button");
    removeButton.className = "small-button";
    removeButton.type = "button";
    removeButton.textContent = "お気に入り解除";
    removeButton.addEventListener("click", () => {
      storage.favorites = storage.favorites.filter((id) => id !== topic.id);
      saveJson("favorites", storage.favorites);
      updateFavoriteButton();
      renderFavorites();
    });
    item.append(removeButton);
    elements.favoritesList.append(item);
  });
}

function renderHistory() {
  const historyTopics = storage.history
    .map((entry) => {
      const topic = TOPICS.find((item) => item.id === entry.id);
      return topic ? { ...topic, shownAt: entry.shownAt } : null;
    })
    .filter(Boolean);

  elements.historyCount.textContent = `${historyTopics.length}件`;
  elements.clearHistoryButton.disabled = historyTopics.length === 0;
  elements.historyList.replaceChildren();

  if (historyTopics.length === 0) {
    elements.historyList.append(emptyState("表示したお題がここに残ります。"));
    return;
  }

  historyTopics.forEach((topic) => {
    elements.historyList.append(createTopicListItem(topic, formatTime(topic.shownAt)));
  });
}

function clearHistory() {
  storage.history = [];
  saveJson("history", storage.history);
  renderHistory();
  elements.statusText.textContent = "履歴をクリアしました。";
}

function createTopicListItem(topic, extraMeta = "") {
  const item = document.createElement("article");
  item.className = "list-item";

  const text = document.createElement("p");
  text.textContent = topic.text;

  const meta = document.createElement("div");
  meta.className = "list-item-meta";
  meta.textContent = [topic.category, topic.depth, extraMeta].filter(Boolean).join(" / ");

  item.append(text, meta);
  return item;
}

function emptyState(message) {
  const state = document.createElement("p");
  state.className = "empty-state";
  state.textContent = message;
  return state;
}

function updateFavoriteButton() {
  const isFavorite = currentTopic && storage.favorites.includes(currentTopic.id);
  elements.favoriteButton.classList.toggle("active", Boolean(isFavorite));
  elements.favoriteButton.textContent = isFavorite ? "お気に入り済み" : "お気に入り";
}

function showView(viewId) {
  elements.views.forEach((view) => {
    view.classList.toggle("active", view.id === viewId);
  });

  elements.navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewId);
  });
}

function formatTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("ja-JP", {
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

function todayKey() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function normalizeMutedTopics() {
  const stored = readJson("mutedTopics", { date: todayKey(), ids: [] });
  const today = todayKey();

  if (!stored || stored.date !== today || !Array.isArray(stored.ids)) {
    const fresh = { date: today, ids: [] };
    saveJson("mutedTopics", fresh);
    return fresh;
  }

  return stored;
}

function readJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

async function promptInstall() {
  if (!deferredInstallPrompt) return;

  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  elements.installButton.hidden = true;
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js").catch(() => {
      elements.statusText.textContent = "オフライン対応の登録に失敗しました。通常利用はできます。";
    });
  }
}
