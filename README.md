# Markdown to Resume PDF Automation

## Overview

このプロジェクトは私の職務経歴書をマークダウンで記述したものです。指定した Markdown テンプレートとタスクファイルの変更を監視し、自動的に Markdown ファイル (`RESUME.md`) を生成し、その後 PDF に変換するツールです。`generate_markdown.ts` と `watch_and_convert.ts` の 2 つのスクリプトを使用して、タスクの更新から PDF 生成までのプロセスを自動化します。

## Requirement

- Node.js
- md-to-pdf
- typescript
- ts-node

## Usage

1. **依存関係のインストール**

   ```bash
   npm install chokidar md-to-pdf ts-node
   npm install --save-dev @types/node
   ```

2. **スクリプトの実行**

   ファイルの変更を監視し、自動で処理を実行するためには、以下のコマンドを使用します。

   ```bash
   npx ts-node watch_and_convert.ts
   ```

   タスクファイルやテンプレートファイルの変更を監視し変更の都度下記が自動的に実行されます。

   - template.md の更新
   - RESUME.md を PDF に変換

## Features

- 職務経験を会社毎に Table で表示
- 長文を書く場合に br タグの入る文字列がワンラインで記述しないといけないので、txt を埋め込込み `generate_markdown.ts` で監視しています。

## Author

[twitter](https://x.com/AwamoriKou)

## Licence

[MIT](https://github.com/tamaki88888888.github.io/LICENSE)
