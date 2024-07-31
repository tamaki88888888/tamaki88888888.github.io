// ファイルウォッチャーをインポート
import { DocumentProcessor } from "./converters/DocumentProcessor";
import { FileWatcher } from "./converters/FileWatcher";
import { MarkdownGenerator } from "./converters/MarkdownGenerator";
import { MarkdownToPdfConverter } from "./converters/MarkdownToPdfConverter";

// PDFへのコンバーターをインポート

const filesToWatch = [
  "tasks/ai_tasks.txt",
  "tasks/music_tasks.txt",
  "tasks/wedding_tasks.txt",
  "templates/template.md",
];

const markdownToPdfConverter = new MarkdownToPdfConverter(
  "output/resume.md",
  "output/resume.pdf"
);
const markdownGenerator = new MarkdownGenerator(
  "tasks",
  "templates/template.md",
  "output/resume.md",
  filesToWatch
);

const documentProcessor = new DocumentProcessor(
  markdownGenerator,
  markdownToPdfConverter
);

const fileWatcher = new FileWatcher(filesToWatch, documentProcessor);
fileWatcher.startWatching();
