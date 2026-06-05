const TOPICS = [
  { id: 1, text: "なぜか捨てられない小物ってありますか？", category: "どうでもいい話", depth: "軽い" },
  { id: 2, text: "コンビニでつい見てしまう棚はどこですか？", category: "どうでもいい話", depth: "軽い" },
  { id: 3, text: "誰にも伝わらないけど、自分だけ好きな音はありますか？", category: "どうでもいい話", depth: "普通" },
  { id: 4, text: "一日だけプロ級にうまくなれるなら、何を選びますか？", category: "どうでもいい話", depth: "普通" },
  { id: 5, text: "なんとなく得した気分になる瞬間はどんな時ですか？", category: "どうでもいい話", depth: "軽い" },
  { id: 6, text: "自分の中だけで決まっている、変な順番はありますか？", category: "どうでもいい話", depth: "普通" },
  { id: 7, text: "毎回ちょっと迷うけど結局同じものを選ぶことは？", category: "どうでもいい話", depth: "軽い" },
  { id: 8, text: "最近、どうでもいいのに妙に覚えている出来事は？", category: "どうでもいい話", depth: "少し深い" },
  { id: 9, text: "自分だけが気にしていそうな生活のルールは？", category: "どうでもいい話", depth: "普通" },
  { id: 10, text: "人から見たら普通でも、自分には少し特別な場所は？", category: "どうでもいい話", depth: "少し深い" },
  { id: 11, text: "昔よく見ていた番組で、今でも覚えている場面は？", category: "懐かしい話", depth: "軽い" },
  { id: 12, text: "子どもの頃の流行りで、今思うと不思議なものは？", category: "懐かしい話", depth: "軽い" },
  { id: 13, text: "昔は苦手だったのに、今は好きになったものは？", category: "懐かしい話", depth: "普通" },
  { id: 14, text: "久しぶりに聞くと一瞬で戻れる音楽はありますか？", category: "懐かしい話", depth: "普通" },
  { id: 15, text: "昔の自分に渡したら喜びそうな今のものは？", category: "懐かしい話", depth: "少し深い" },
  { id: 16, text: "学生時代の休み時間で、なぜか覚えている場面は？", category: "懐かしい話", depth: "普通" },
  { id: 17, text: "昔の写真を見て一番驚くポイントはどこですか？", category: "懐かしい話", depth: "軽い" },
  { id: 18, text: "あの頃の自分にしか分からなかった楽しみは？", category: "懐かしい話", depth: "少し深い" },
  { id: 19, text: "今でも急に食べたくなる懐かしいおやつは？", category: "懐かしい話", depth: "軽い" },
  { id: 20, text: "昔の自分が大人っぽいと思っていた行動は？", category: "懐かしい話", depth: "普通" },
  { id: 21, text: "最強だと思うごはんのおともは何ですか？", category: "食べ物", depth: "軽い" },
  { id: 22, text: "最後の晩餐ではなく、明日の昼に食べたいものは？", category: "食べ物", depth: "軽い" },
  { id: 23, text: "人にはあまり勧めないけど好きな食べ合わせは？", category: "食べ物", depth: "普通" },
  { id: 24, text: "お店でメニューを決める時の自分ルールは？", category: "食べ物", depth: "普通" },
  { id: 25, text: "なぜかテンションが上がる弁当のおかずは？", category: "食べ物", depth: "軽い" },
  { id: 26, text: "思い出とセットになっている食べ物はありますか？", category: "食べ物", depth: "少し深い" },
  { id: 27, text: "一生ひとつだけ無料になるなら、何の食べ物がいいですか？", category: "食べ物", depth: "普通" },
  { id: 28, text: "旅先で食べると妙においしいものは？", category: "食べ物", depth: "軽い" },
  { id: 29, text: "食べ方に小さなこだわりがあるものは？", category: "食べ物", depth: "普通" },
  { id: 30, text: "自分にとっての安心する味は何ですか？", category: "食べ物", depth: "少し深い" },
  { id: 31, text: "仕事や学校で、地味にうれしい瞬間は？", category: "仕事・学校", depth: "軽い" },
  { id: 32, text: "机やカバンに必ず置きたいものはありますか？", category: "仕事・学校", depth: "軽い" },
  { id: 33, text: "自分が少しだけ得意だと思う雑用は？", category: "仕事・学校", depth: "普通" },
  { id: 34, text: "集中できる時とできない時の違いは何ですか？", category: "仕事・学校", depth: "普通" },
  { id: 35, text: "昔の先生や先輩の言葉で、妙に残っているものは？", category: "仕事・学校", depth: "少し深い" },
  { id: 36, text: "休憩時間にあると助かるものは何ですか？", category: "仕事・学校", depth: "軽い" },
  { id: 37, text: "自分なりのやる気スイッチはありますか？", category: "仕事・学校", depth: "普通" },
  { id: 38, text: "思ったより自分に向いていた作業は？", category: "仕事・学校", depth: "少し深い" },
  { id: 39, text: "朝の準備で一番省略したくなる工程は？", category: "仕事・学校", depth: "軽い" },
  { id: 40, text: "ちょっとだけ誇れる段取りの工夫はありますか？", category: "仕事・学校", depth: "普通" },
  { id: 41, text: "友人の変な癖で、嫌いではないものは？", category: "人間関係", depth: "軽い" },
  { id: 42, text: "この人とは合うなと思う小さなポイントは？", category: "人間関係", depth: "普通" },
  { id: 43, text: "初対面でつい見てしまうところはどこですか？", category: "人間関係", depth: "軽い" },
  { id: 44, text: "人に言われて意外とうれしかった一言は？", category: "人間関係", depth: "少し深い" },
  { id: 45, text: "仲良くなると出てくる自分のクセは？", category: "人間関係", depth: "普通" },
  { id: 46, text: "自分と違うけど面白いと思う人の習慣は？", category: "人間関係", depth: "普通" },
  { id: 47, text: "気まずさを少し和らげる自分なりの方法は？", category: "人間関係", depth: "少し深い" },
  { id: 48, text: "返信の早さについて、自分の普通はどのくらいですか？", category: "人間関係", depth: "軽い" },
  { id: 49, text: "一緒にいると楽な人の特徴は？", category: "人間関係", depth: "少し深い" },
  { id: 50, text: "褒められると照れるけど実はうれしいことは？", category: "人間関係", depth: "普通" },
  { id: 51, text: "千円以内で一番満足度が高い使い道は？", category: "お金", depth: "軽い" },
  { id: 52, text: "なぜか安いと買ってしまうものはありますか？", category: "お金", depth: "軽い" },
  { id: 53, text: "値段以上に価値があったと思う買い物は？", category: "お金", depth: "普通" },
  { id: 54, text: "逆に、思ったより使わなかったものは？", category: "お金", depth: "普通" },
  { id: 55, text: "自分への小さなごほうびはいくらくらいからですか？", category: "お金", depth: "普通" },
  { id: 56, text: "無料だったら毎週やりたいことは？", category: "お金", depth: "軽い" },
  { id: 57, text: "少し高くても選びたいものは何ですか？", category: "お金", depth: "少し深い" },
  { id: 58, text: "ポイントカードやクーポン、どのくらい使いますか？", category: "お金", depth: "軽い" },
  { id: 59, text: "買うまで長く迷ったけど、買ってよかったものは？", category: "お金", depth: "少し深い" },
  { id: 60, text: "自分の中で節約してもいいもの、したくないものは？", category: "お金", depth: "少し深い" },
  { id: 61, text: "一週間だけ透明人間になったら、何を見に行きますか？", category: "もしも話", depth: "軽い" },
  { id: 62, text: "好きな店をひとつだけ24時間営業にできるなら？", category: "もしも話", depth: "軽い" },
  { id: 63, text: "一つだけ家事を永久に自動化できるなら何にしますか？", category: "もしも話", depth: "普通" },
  { id: 64, text: "明日だけ別の職業を体験できるなら何がいいですか？", category: "もしも話", depth: "普通" },
  { id: 65, text: "どこでも一瞬で行けるなら、まずどこへ行きますか？", category: "もしも話", depth: "軽い" },
  { id: 66, text: "一つだけ動物と会話できるなら、何を聞きますか？", category: "もしも話", depth: "普通" },
  { id: 67, text: "一日だけ昔の自分に戻れるなら、何をしますか？", category: "もしも話", depth: "少し深い" },
  { id: 68, text: "小さな店を開くなら、何屋さんにしますか？", category: "もしも話", depth: "普通" },
  { id: 69, text: "自分の人生に一つだけ効果音を足せるなら？", category: "もしも話", depth: "軽い" },
  { id: 70, text: "未来の自分から短いメモが届くなら、何が書いていてほしいですか？", category: "もしも話", depth: "少し深い" },
  { id: 71, text: "タオルや服をたたむ時の謎ルールはありますか？", category: "謎のこだわり", depth: "軽い" },
  { id: 72, text: "リモコンやスマホの置き場所にこだわりは？", category: "謎のこだわり", depth: "軽い" },
  { id: 73, text: "店で座る席を選ぶ時、何を優先しますか？", category: "謎のこだわり", depth: "普通" },
  { id: 74, text: "カレー、ラーメン、丼もの。混ぜる派ですか、分ける派ですか？", category: "謎のこだわり", depth: "軽い" },
  { id: 75, text: "自分だけのベストな移動中の過ごし方は？", category: "謎のこだわり", depth: "普通" },
  { id: 76, text: "買い物カゴに入れる順番を気にしますか？", category: "謎のこだわり", depth: "軽い" },
  { id: 77, text: "スマホのホーム画面で一番こだわっていることは？", category: "謎のこだわり", depth: "普通" },
  { id: 78, text: "人には理解されにくいけど、譲れない快適さは？", category: "謎のこだわり", depth: "少し深い" },
  { id: 79, text: "旅行の荷造りで最後まで迷うものは？", category: "謎のこだわり", depth: "普通" },
  { id: 80, text: "自分の中だけで美しいと思う配置はありますか？", category: "謎のこだわり", depth: "少し深い" },
  { id: 81, text: "子どもの頃、なぜか怖かったものは？", category: "子どもの頃", depth: "軽い" },
  { id: 82, text: "秘密基地っぽいと思っていた場所はありますか？", category: "子どもの頃", depth: "普通" },
  { id: 83, text: "小さい頃の自分が信じていた謎ルールは？", category: "子どもの頃", depth: "軽い" },
  { id: 84, text: "子どもの頃に集めていたものは何ですか？", category: "子どもの頃", depth: "軽い" },
  { id: 85, text: "初めて自分で選んだと思えるものは？", category: "子どもの頃", depth: "少し深い" },
  { id: 86, text: "昔の遊びで、今やっても楽しそうなものは？", category: "子どもの頃", depth: "普通" },
  { id: 87, text: "子どもの頃の自分に今の趣味を見せたら何と言いそうですか？", category: "子どもの頃", depth: "少し深い" },
  { id: 88, text: "給食やお弁当で楽しみにしていたものは？", category: "子どもの頃", depth: "軽い" },
  { id: 89, text: "昔の自分が得意だと思っていたことは？", category: "子どもの頃", depth: "普通" },
  { id: 90, text: "今も少しだけ残っている子どもの頃の癖は？", category: "子どもの頃", depth: "少し深い" },
  { id: 91, text: "自分が意外と大事にしている時間帯はいつですか？", category: "ちょっとだけ深い話", depth: "少し深い" },
  { id: 92, text: "最近、自分の中で少し変わったと思うことは？", category: "ちょっとだけ深い話", depth: "少し深い" },
  { id: 93, text: "いい一日だったと思う条件は何ですか？", category: "ちょっとだけ深い話", depth: "普通" },
  { id: 94, text: "昔より上手になった気分転換はありますか？", category: "ちょっとだけ深い話", depth: "少し深い" },
  { id: 95, text: "自分を機嫌よくする小さな方法は？", category: "ちょっとだけ深い話", depth: "普通" },
  { id: 96, text: "何度も見返したくなる景色や場面は？", category: "ちょっとだけ深い話", depth: "少し深い" },
  { id: 97, text: "今の自分にちょうどいい贅沢は何ですか？", category: "ちょっとだけ深い話", depth: "普通" },
  { id: 98, text: "人にすすめたいほどではないけど、自分を助けている習慣は？", category: "ちょっとだけ深い話", depth: "少し深い" },
  { id: 99, text: "これからも残っていてほしい自分の性格は？", category: "ちょっとだけ深い話", depth: "少し深い" },
  { id: 100, text: "小さくても、最近ちゃんとできたと思うことは？", category: "ちょっとだけ深い話", depth: "普通" }
];

const CATEGORIES = ["すべて", ...new Set(TOPICS.map((topic) => topic.category))];
const DEPTHS = ["すべて", "軽い", "普通", "少し深い"];
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

const elements = {
  topicPanel: document.querySelector(".topic-panel"),
  topicCategory: document.querySelector("#topicCategory"),
  topicDepth: document.querySelector("#topicDepth"),
  topicText: document.querySelector("#topicText"),
  categorySelect: document.querySelector("#categorySelect"),
  depthSelect: document.querySelector("#depthSelect"),
  drawButton: document.querySelector("#drawButton"),
  favoriteButton: document.querySelector("#favoriteButton"),
  muteButton: document.querySelector("#muteButton"),
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
  fillSelect(elements.categorySelect, CATEGORIES);
  fillSelect(elements.depthSelect, DEPTHS);
  bindEvents();
  drawTopic();
  renderAllLists();
  registerServiceWorker();
}

function bindEvents() {
  elements.drawButton.addEventListener("click", () => drawTopic("", { animate: true }));
  elements.favoriteButton.addEventListener("click", toggleFavorite);
  elements.muteButton.addEventListener("click", muteCurrentTopic);
  elements.categorySelect.addEventListener("change", drawTopic);
  elements.depthSelect.addEventListener("change", drawTopic);
  elements.installButton.addEventListener("click", promptInstall);

  elements.navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.view === "mainView") {
        showView("mainView");
        drawTopic("", { animate: true });
        return;
      }

      showView(button.dataset.view);
    });
  });

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    elements.installButton.hidden = false;
  });
}

function fillSelect(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function drawTopic(statusMessage = "", options = {}) {
  if (isDrawing) return;

  const category = elements.categorySelect.value;
  const depth = elements.depthSelect.value;
  const mutedIds = new Set(storage.mutedTopics.ids);
  const recentIds = new Set(storage.history.slice(0, RECENT_EXCLUDE_LIMIT).map((item) => item.id));

  const baseCandidates = TOPICS.filter((topic) => {
    const matchesCategory = category === "すべて" || topic.category === category;
    const matchesDepth = depth === "すべて" || topic.depth === depth;
    return matchesCategory && matchesDepth && !mutedIds.has(topic.id);
  });

  let candidates = baseCandidates.filter((topic) => !recentIds.has(topic.id));
  let usedRecentFallback = false;

  if (candidates.length === 0) {
    candidates = baseCandidates;
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
  elements.favoriteButton.disabled = disabled;
  elements.muteButton.disabled = disabled;
  elements.categorySelect.disabled = disabled;
  elements.depthSelect.disabled = disabled;
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
  elements.historyList.replaceChildren();

  if (historyTopics.length === 0) {
    elements.historyList.append(emptyState("表示したお題がここに残ります。"));
    return;
  }

  historyTopics.forEach((topic) => {
    elements.historyList.append(createTopicListItem(topic, formatTime(topic.shownAt)));
  });
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
