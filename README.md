# 雑談お題ガチャ

飲み会、友人との雑談、オンライン通話などで使える、雑談のお題ガチャPWAです。
正解のない軽めの話題をランダムに表示し、会話の入口を作ることを目的にしています。

公開URL:

```text
https://sorakane.github.io/zatsudan-odai-gacha/
```

## 現在の機能

- 雑談のお題をランダム表示
- ガチャ演出つきの抽選
- 場面プリセット
  - 全部
  - 飲み会
  - 友達
  - 初対面
  - オンライン
  - 世代差
  - ゆる深め
- カテゴリの複数選択
- カテゴリ欄の開閉
- 全カテゴリから引くボタン
- お気に入り登録
- お気に入り一覧
- 最近出たお題の履歴
- 直近20件は再表示されにくい抽選
- 今日は出さない
- 今日の非表示リセット
- 履歴クリア
- 候補件数表示
- PWA対応
  - `manifest.json`
  - `service-worker.js`
  - ホーム画面追加
  - オフラインキャッシュ

## お題データ

お題は `app.js` の `TOPICS` 配列に入っています。

現在の件数:

```text
210件
```

カテゴリ:

- どうでもいい話
- 懐かしい話
- 食べ物
- 仕事・学校
- 人間関係
- お金
- もしも話
- 謎のこだわり
- 子どもの頃
- ちょっとだけ深い話
- ジェネレーションギャップ

各お題の形式:

```js
{
  id: 1,
  text: "なぜか捨てられない小物ってありますか？",
  category: "どうでもいい話",
  depth: "軽い"
}
```

`depth` はデータとして残していますが、現在の画面では深さ選択UIは使っていません。

## 保存データ

ブラウザの `localStorage` に保存します。
サーバー、外部API、ログイン、データベースは使っていません。

保存キー:

- `favorites`
- `history`
- `mutedTopics`

## ファイル構成

```text
.
├── index.html
├── style.css
├── app.js
├── manifest.json
├── service-worker.js
├── icon.svg
└── README.md
```

## ローカルで動かす方法

Service Workerは `file://` では動かないため、ローカルHTTPサーバーで開きます。

```bash
python3 -m http.server 8080
```

ブラウザで開きます。

```text
http://localhost:8080/
```

スマホで試す場合は、PCとスマホを同じWi-Fiに接続し、PCのローカルIPアドレスを使ってアクセスします。

```text
http://<PCのローカルIP>:8080/
```

## ホーム画面に追加する方法

### iPhone / Safari

1. Safariで公開URLを開く
2. 共有ボタンを押す
3. 「ホーム画面に追加」を選ぶ

### Android / Chrome

1. Chromeで公開URLを開く
2. メニューを開く
3. 「ホーム画面に追加」または「アプリをインストール」を選ぶ

## GitHub Pagesで公開する方法

このリポジトリはGitHub Pagesで公開できます。

設定:

```text
Settings > Pages
Source: Deploy from a branch
Branch: main
Folder: /root
```

公開URLの形式:

```text
https://<GitHubユーザー名>.github.io/<リポジトリ名>/
```

## 反映手順

変更後は通常のGit操作で反映します。

```bash
git status
git add index.html style.css app.js manifest.json service-worker.js README.md
git commit -m "Update app"
git push origin main
```

GitHub Pagesは反映まで数十秒かかることがあります。

## キャッシュ更新

PWAはService Workerでキャッシュします。
公開後に古い表示が残る場合は、次を更新します。

- `service-worker.js` の `CACHE_NAME`
- `index.html` の `style.css?v=...`
- `index.html` の `app.js?v=...`
- `service-worker.js` の `APP_SHELL` 内のCSS/JS参照

現在のキャッシュ:

```js
const CACHE_NAME = "zatsudan-odai-gacha-v15";
```

## 今後の保守メモ

- お題がさらに増える場合は、`TOPICS` を `topics.js` または `topics.json` に分離すると管理しやすいです。
- ジェネレーションギャップ系のお題は、年齢いじりにならないよう「何歳？」より「どの頃？」寄りの文面にすると安全です。
- 全カテゴリ抽選でカテゴリごとの件数差が気になる場合は、カテゴリ単位で均等抽選する実装に変更できます。
