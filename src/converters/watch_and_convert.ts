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

/**
 *
 */
async function runCommands() {
  try {
    // TypeScript スクリプトの実行
    await execPromise("npx ts-node generate_markdown.ts");
    console.log("Markdown generated successfully!");

    await execPromise("npx ts-node generate_pdf.ts");
    console.log("PDF generated successfully!");

    await execPromise("open RESUME.pdf");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

/**
 * テキストパスを監視して、変更があったらコマンドを実行
 * @deprecated
 */
const watcher = chokidar.watch(filesToWatch, {
  persistent: true,
  ignoreInitial: true,
});

/**
 * ファイルが変更されたときの処理
 */
watcher.on("change", (path) => {
  console.log(`${path} has been changed. Running tasks...`);
  runCommands();
});

console.log("Watching for file changes...");
