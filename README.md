# Markdown to Resume PDF Automation

## Overview

職務経歴を記載したマークダウンを pdf 化するために書いたコードです。<br>
指定した Markdown テンプレートと業務タスクファイルの変更を監視し、自動的に Markdown ファイル (`RESUME.md`) を生成、その後 PDF に変換しています。<br>

## Requirement

- Node.js
- md-to-pdf
- TypeScript
- ts-node
- chokidar (ファイル監視用)

## Usage

1. **依存関係のインストール**

   ```bash
   npm install chokidar md-to-pdf ts-node
   npm install --save-dev @types/node
   ```

2. **スクリプトの実行**

   ファイルの変更を監視し、自動で処理を実行するためには、以下のコマンドを使用します。

   ```bash
   npm run start
   ```

   タスクファイルやテンプレートファイルの変更を監視し変更の都度下記が自動的に実行されます。

   - RESUME.md の更新
   - RESUME.md を PDF に変換

   **推奨**

   [PDF Viewer](https://marketplace.visualstudio.com/items?itemName=AdamRaichu.pdf-viewer)

## Features

- Table 内に何十行も記述すると読みにくいワンラインになってしまうので、業務項目のテキストファイルだけ別ファイルに切り出し watch しています。

## Author

[twitter](https://x.com/AwamoriKou)

## Licence

[MIT](https://github.com/tamaki88888888.github.io/LICENSE)
