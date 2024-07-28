import * as chokidar from "chokidar";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

// 監視するファイルのパス
const filesToWatch = [
  "ai_tasks.txt",
  "music_tasks.txt",
  "wedding_tasks.txt",
  "template.md",
];

// コマンドを実行する関数
async function runCommands() {
  try {
    // TypeScript スクリプトの実行
    await execPromise("npx ts-node generate_markdown.ts");
    console.log("Markdown generated successfully!");

    // Markdown を PDF に変換
    await execPromise("md-to-pdf RESUME.md");
    console.log("PDF generated successfully!");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

// ファイル変更を監視
const watcher = chokidar.watch(filesToWatch, {
  persistent: true,
  ignoreInitial: true,
});

watcher.on("change", (path) => {
  console.log(`${path} has been changed. Running tasks...`);
  runCommands();
});

console.log("Watching for file changes...");
