// ファイルウォッチャーをインポート
import { FileWatcher } from "./converters/FileWatcher";

// PDFへのコンバーターをインポート

const filesToWatch = [
  "tasks/ai_tasks.txt",
  "tasks/music_tasks.txt",
  "tasks/wedding_tasks.txt",
  "templates/template.md",
];

// FileWatcher インスタンスを作成
const fileWatcher = new FileWatcher(filesToWatch);
fileWatcher.startWatching();
