# Open Weather ⚡ App

OpenWeatherMap APIを使用した天気予報アプリケーションです。

https://open-weather-app-eight.vercel.app/

## 機能

- `東京`、`兵庫`、`大分`、`北海道`の天気予報を表示
  - 5日間の3時間ごとの天気予報を確認可能
- レスポンシブ表示対応

## 技術スタック

- React
- TypeScript
- Vite
- React Router v7
- SWR
- CSS Modules
- Vitest
- React Testing Library

## 開発環境のセットアップ


***※Node.js 20以上のバージョンが必要です***


1.envファイルの作成、編集

```bash
cp .env.example .env
```

```bash
VITE_API_KEY=your_api_key
VITE_BASE_API_URL=https://api.openweathermap.org/data/2.5
```

2.プロジェクトのclone

```bash
git clone https://github.com/your-repo/weather-forecast-app.git
```

3.依存パッケージのインストール

```bash
npm install
```

3.開発サーバーの起動

```bash
npm run dev
```

4.ビルド

```bash
npm run build
```

## テストの実行

```bash
npm run test
```
