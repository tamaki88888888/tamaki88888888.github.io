// ファイルウォッチャーをインポート
import { DocumentProcessor } from "./converters/DocumentProcessor";
import { FileWatcher } from "./converters/FileWatcher";
import { MarkdownGenerator } from "./converters/MarkdownGenerator";
import { MarkdownToPdfConverter } from "./converters/MarkdownToPdfConverter";

// npm src/index.ts は ルートディレクトリから実行しているから、全てのパスはルートディレクトリからの相対パスで指定する

// PDFへのコンバーターをインポート
const filesToWatch = [
  "src/tasks/ai_tasks.txt",
  "src/tasks/music_tasks.txt",
  "src/tasks/wedding_tasks.txt",
  "src/templates/template.md",
];

const tasksFiles = [
  "src/tasks/ai_tasks.txt",
  "src/tasks/music_tasks.txt",
  "src/tasks/wedding_tasks.txt",
];

const markdownToPdfConverter = new MarkdownToPdfConverter(
  "output/RESUME.md",
  "output/RESUME.pdf"
);

const markdownGenerator = new MarkdownGenerator(
  "src/templates/template.md",
  "output/RESUME.md",
  tasksFiles
);

const documentProcessor = new DocumentProcessor(
  markdownGenerator,
  markdownToPdfConverter
);

const fileWatcher = new FileWatcher(filesToWatch, documentProcessor);
fileWatcher.startWatching();
