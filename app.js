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
  { id: 100, text: "小さくても、最近ちゃんとできたと思うことは？", category: "ちょっとだけ深い話", depth: "普通" },
  { id: 101, text: "朝起きて最初にすることで、なぜか欠かせないものは？", category: "どうでもいい話", depth: "軽い" },
  { id: 102, text: "一度だけ言ってみたい、ちょっと大げさなセリフは？", category: "どうでもいい話", depth: "普通" },
  { id: 103, text: "自分の中でだけ縁起がいいと思っている行動は？", category: "どうでもいい話", depth: "普通" },
  { id: 104, text: "昔からなぜか覚えているCMやテレビの場面は？", category: "懐かしい話", depth: "軽い" },
  { id: 105, text: "子どもの頃は大人っぽいと思っていたけど、今見ると普通なことは？", category: "懐かしい話", depth: "普通" },
  { id: 106, text: "自分だけが妙に盛り上がれる昔の流行は？", category: "懐かしい話", depth: "軽い" },
  { id: 107, text: "家や学校の近くで、なぜか特別に感じていた場所は？", category: "懐かしい話", depth: "少し深い" },
  { id: 108, text: "大人になってからおいしさに気づいた食べ物は？", category: "食べ物", depth: "普通" },
  { id: 109, text: "思い出補正込みで一番おいしいと思っている味は？", category: "食べ物", depth: "少し深い" },
  { id: 110, text: "人には説明しづらい、自分だけのベストな食べ方は？", category: "食べ物", depth: "普通" },
  { id: 111, text: "つい頼んでしまうけど、毎回少しだけ後悔するメニューは？", category: "食べ物", depth: "軽い" },
  { id: 112, text: "仕事や学校でつい出てしまう職業病っぽいクセは？", category: "仕事・学校", depth: "普通" },
  { id: 113, text: "自分だけが気にしている作業の終わらせ方は？", category: "仕事・学校", depth: "普通" },
  { id: 114, text: "地味だけど褒められるとうれしい能力は？", category: "仕事・学校", depth: "少し深い" },
  { id: 115, text: "やる気がない日に、最低限これだけはやることは？", category: "仕事・学校", depth: "普通" },
  { id: 116, text: "人から言われて、意外とずっと覚えている一言は？", category: "人間関係", depth: "少し深い" },
  { id: 117, text: "自分の取り扱い説明書に書かれそうな注意点は？", category: "人間関係", depth: "普通" },
  { id: 118, text: "この人とは仲良くなれそうだと思う小さなサインは？", category: "人間関係", depth: "普通" },
  { id: 119, text: "連絡の返し方で、自分なりに気をつけていることは？", category: "人間関係", depth: "普通" },
  { id: 120, text: "ちょっとした買い物で、昔より迷わなくなったものは？", category: "お金", depth: "軽い" },
  { id: 121, text: "高い安いより、自分にとって満足度が大事なものは？", category: "お金", depth: "普通" },
  { id: 122, text: "昔の自分よりお金をかけるようになったものは？", category: "お金", depth: "少し深い" },
  { id: 123, text: "逆に、昔よりお金をかけなくなったものは？", category: "お金", depth: "普通" },
  { id: 124, text: "もし自分のテーマ曲を一曲だけ選ぶなら？", category: "もしも話", depth: "軽い" },
  { id: 125, text: "自分の人生を一日だけ番組にするなら、どの日を選びますか？", category: "もしも話", depth: "少し深い" },
  { id: 126, text: "一つだけ“自分専用の称号”をもらえるなら何がいいですか？", category: "もしも話", depth: "普通" },
  { id: 127, text: "誰かに一日だけ密着されるなら、見せたい時間帯は？", category: "もしも話", depth: "普通" },
  { id: 128, text: "旅行先でなぜか必ず確認してしまうことは？", category: "謎のこだわり", depth: "軽い" },
  { id: 129, text: "自分の中で“これは裏切らない”と思っているものは？", category: "謎のこだわり", depth: "普通" },
  { id: 130, text: "何度も説明しているけど、あまり伝わらないこだわりは？", category: "謎のこだわり", depth: "少し深い" },
  { id: 131, text: "人から見るとどうでもいいけど、譲れない順番は？", category: "謎のこだわり", depth: "軽い" },
  { id: 132, text: "子どもの頃、勝手にライバル視していたものは？", category: "子どもの頃", depth: "軽い" },
  { id: 133, text: "昔の自分が本気で信じていた小さな勘違いは？", category: "子どもの頃", depth: "軽い" },
  { id: 134, text: "子どもの頃の自分に今の生活を見せたら、何に驚きそうですか？", category: "子どもの頃", depth: "少し深い" },
  { id: 135, text: "小さい頃に“自分だけの才能”だと思っていたことは？", category: "子どもの頃", depth: "普通" },
  { id: 136, text: "大人になってから、少しだけ優しくなれたことは？", category: "ちょっとだけ深い話", depth: "少し深い" },
  { id: 137, text: "自分の機嫌を直すために、最近効くと分かったことは？", category: "ちょっとだけ深い話", depth: "普通" },
  { id: 138, text: "人には大げさに言わないけど、少し誇りに思っていることは？", category: "ちょっとだけ深い話", depth: "少し深い" },
  { id: 139, text: "昔より気にしなくなって楽になったことは？", category: "ちょっとだけ深い話", depth: "少し深い" },
  { id: 140, text: "なんとなく人に見られたくない検索履歴のジャンルは？", category: "どうでもいい話", depth: "普通" },
  { id: 141, text: "街で見かけると、つい勝手に心配してしまうものは？", category: "どうでもいい話", depth: "軽い" },
  { id: 142, text: "自分だけのパワースポットっぽい場所はありますか？", category: "ちょっとだけ深い話", depth: "普通" },
  { id: 143, text: "人前でちょっと恥ずかしかったけど、今は笑える話は？", category: "人間関係", depth: "普通" },
  { id: 144, text: "初対面では隠しているけど、仲良くなると出る自分の面は？", category: "人間関係", depth: "少し深い" },
  { id: 145, text: "自分の中で“これは大人になったな”と思う瞬間は？", category: "懐かしい話", depth: "少し深い" },
  { id: 146, text: "誰かの前では言いにくいけど、本当は好きなものは？", category: "どうでもいい話", depth: "普通" },
  { id: 147, text: "人にすすめたいほどではないけど、ずっと好きな店や場所は？", category: "食べ物", depth: "普通" },
  { id: 148, text: "一日だけ“絶対に怒られない日”なら何をしてみたいですか？", category: "もしも話", depth: "軽い" },
  { id: 149, text: "自分の生活に一つだけ効果音が付くなら、どの場面に付けたいですか？", category: "もしも話", depth: "軽い" },
  { id: 150, text: "最近、昔の自分に少し感謝したことは？", category: "ちょっとだけ深い話", depth: "少し深い" }
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
  fillSelect(elements.categorySelect, CATEGORIES);
  fillSelect(elements.depthSelect, DEPTHS);
  renderCategoryChecks();
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
  elements.categorySelect.addEventListener("change", refreshCandidatePreview);
  elements.depthSelect.addEventListener("change", refreshCandidatePreview);
  elements.toggleCategoriesButton.addEventListener("click", toggleCategoryChecks);
  elements.resetMutedButton.addEventListener("click", resetMutedTopics);
  elements.clearHistoryButton.addEventListener("click", clearHistory);
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

function renderCategoryChecks() {
  CATEGORIES.filter((category) => category !== "すべて").forEach((category) => {
    const label = document.createElement("label");
    label.className = "category-check";

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = category;
    input.checked = true;
    input.addEventListener("change", () => {
      updateCategoryToggleButton();
      refreshCandidatePreview();
    });

    const text = document.createElement("span");
    text.textContent = category;

    label.append(input, text);
    elements.categoryChecks.append(label);
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
  const depth = elements.depthSelect.value;
  const category = elements.categorySelect.value;
  const selectedCategories = getSelectedCategories();
  const mutedIds = new Set(storage.mutedTopics.ids);
  const recentIds = new Set(storage.history.slice(0, RECENT_EXCLUDE_LIMIT).map((item) => item.id));
  const mode = options.ignoreCategory
    ? "カテゴリ無視"
    : category === "すべて"
      ? `横断 ${selectedCategories.length}カテゴリ`
      : category;

  const baseCandidates = TOPICS.filter((topic) => {
    const matchesCategory = options.ignoreCategory
      || (category === "すべて"
        ? selectedCategories.includes(topic.category)
        : topic.category === category);
    const matchesDepth = depth === "すべて" || topic.depth === depth;
    return matchesCategory && matchesDepth && !mutedIds.has(topic.id);
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

function toggleCategoryChecks() {
  if (isDrawing) return;

  const inputs = [...elements.categoryChecks.querySelectorAll("input")];
  const shouldCheck = !inputs.every((input) => input.checked);
  inputs.forEach((input) => {
    input.checked = shouldCheck;
  });
  updateCategoryToggleButton();
  refreshCandidatePreview();
}

function updateCategoryToggleButton() {
  const inputs = [...elements.categoryChecks.querySelectorAll("input")];
  elements.toggleCategoriesButton.textContent = inputs.every((input) => input.checked)
    ? "すべて外す"
    : "すべて選ぶ";
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
  elements.categorySelect.disabled = disabled;
  elements.depthSelect.disabled = disabled;
  elements.toggleCategoriesButton.disabled = disabled;
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
