import * as chokidar from "chokidar";

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

  private runCommands(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        // TypeScript スクリプトの実行
        execPromise("npx ts-node generate_markdown.ts");
        console.log("Markdown generated successfully!");

        execPromise("npx ts-node generate_pdf.ts");
        console.log("PDF generated successfully!");

        execPromise("open RESUME.pdf");
        resolve();
      }
    })
  };
}
