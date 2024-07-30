// npm install @types/node して fs の方定義をすること。
import * as chokidar from "chokidar";
import * as fs from "fs";
import * as path from "path";

// ファイルを読み込んで改行を <br> に変換する関数
function readAndConvert(filename: string): string {
  const filePath = path.join(__dirname, filename);
  const content = fs.readFileSync(filePath, "utf-8");
  return content.replace(/\n/g, "<br>");
}

// 各タスクファイルを読み込み、改行を <br> に変換
const aiTasks = readAndConvert("ai_tasks.txt");
const musicTasks = readAndConvert("music_tasks.txt");
const weddingTasks = readAndConvert("wedding_tasks.txt");

// テンプレートの読み込み
const templatePath = path.join(__dirname, "template.md");
let templateContent = fs.readFileSync(templatePath, "utf-8");

// プレースホルダーを手動で置換
templateContent = templateContent.replace("{{ ai_tasks }}", aiTasks);
templateContent = templateContent.replace("{{ music_tasks }}", musicTasks);
templateContent = templateContent.replace("{{ wedding_tasks }}", weddingTasks);

// 結果の出力
const outputPath = path.join(__dirname, "RESUME.md");
fs.writeFileSync(outputPath, templateContent, "utf-8");

console.log("Resume updated successfully!");

class FileWatcher {
  private filesToWatch: string[];

  constructor(filesToWatch: string[]) {
    this.filesToWatch = filesToWatch;
  }

  public startWatching() {
    const watcher = chokidar.watch(this.filesToWatch, {
      persistent: true,
      ignoreInitial: true,
    });

    watcher.on("change", async (path) => {
      console.log(`${path} has been changed. Running tasks...`);
      await this.runCommands();
    });

    console.log("Watching for file changes...");
  }

  private runCommands(): Promise<void> {}

  // startWatching() {
  //   console.log("Watching for file changes...");

  //   const watcher = chokidar.watch(this.filesToWatch, {
  //     persistent: true,
  //     ignoreInitial: true,
  //   });

  //   watcher.on("change", (path) => {
  //     console.log(`${path} has been changed. Running tasks...`);
  //     runCommands();
  //   });
  // }
}
