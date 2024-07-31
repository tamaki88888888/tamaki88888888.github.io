import * as chokidar from "chokidar";
import { DocumentProcessor } from "./DocumentProcessor";

export class FileWatcher {
  private filesToWatch: string[];
  private documentProcessor: DocumentProcessor;

  constructor(filesToWatch: string[], documentProcessor: DocumentProcessor) {
    this.filesToWatch = filesToWatch;
    this.documentProcessor = documentProcessor;
  }

  public startWatching() {
    const watcher = chokidar.watch(this.filesToWatch, {
      persistent: true,
      ignoreInitial: true,
    });

    watcher.on("change", async (path) => {
      console.log(`${path} has been changed. Running tasks...`);
      await this.documentProcessor.processDocuments();
    });
  }
}
