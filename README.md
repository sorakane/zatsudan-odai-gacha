# 雑談お題ガチャ

スマホのブラウザで使える、ローカル完結のPWAです。飲み会、友人との雑談、オンライン通話などで、重すぎず話が広がるお題をランダム表示します。

## 機能

- ランダムに雑談のお題を表示
- カテゴリ選択
- 深さ選択
- お気に入り保存
- 最近出たお題の履歴表示
- 直近20件は再表示されにくい抽選
- 「今日は出さない」で当日中だけ非表示
- `localStorage` に `favorites`、`history`、`mutedTopics` を保存
- `manifest.json` と `service-worker.js` によるPWA対応

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

ブラウザで次を開きます。

```text
http://localhost:8080/
```

スマホで試す場合は、PCとスマホを同じWi-Fiに接続し、PCのローカルIPアドレスを使ってアクセスします。

```text
http://<PCのローカルIP>:8080/
```

## ホーム画面に追加する方法

### iPhone / Safari

1. SafariでアプリURLを開く
2. 共有ボタンを押す
3. 「ホーム画面に追加」を選ぶ

### Android / Chrome

1. ChromeでアプリURLを開く
2. メニューを開く
3. 「ホーム画面に追加」または「アプリをインストール」を選ぶ

## GitHub Pagesに置く方法

1. GitHubで新しいリポジトリを作る
2. このフォルダのファイルをリポジトリに追加してpushする
3. GitHubのリポジトリ画面で `Settings` を開く
4. `Pages` を開く
5. `Build and deployment` の `Source` を `Deploy from a branch` にする
6. `Branch` を `main`、フォルダを `/root` にして保存する

公開URLは次のような形式になります。

```text
https://<GitHubユーザー名>.github.io/<リポジトリ名>/
```

## Vercelに置く方法

1. Vercelにログインする
2. `Add New...` から `Project` を選ぶ
3. GitHubリポジトリをインポートする
4. Framework Presetは `Other` のままでよい
5. Build Commandは空、Output Directoryも空のままデプロイする

静的ファイルだけなので、ビルド設定は不要です。

## 注意

- 外部API、ログイン、サーバー、データベースは使っていません。
- お題データは `app.js` 内の `TOPICS` 配列に入っています。
- PWAとしてのキャッシュ更新が反映されにくい時は、ブラウザのサイトデータを削除するか、`service-worker.js` の `CACHE_NAME` を変更してください。
