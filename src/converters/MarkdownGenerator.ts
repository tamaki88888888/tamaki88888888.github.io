// npm install @types/node して fs の方定義をすること。
import * as fs from "fs";
import * as path from "path";

export class MarkdownGenerator {
  private templatePath: string;
  private outputPath: string;
  private taskFiles: string[];

  constructor(templatePath: string, outputPath: string, taskFiles: string[]) {
    this.templatePath = templatePath;
    this.outputPath = outputPath;
    this.taskFiles = taskFiles;
  }

  public async generateMarkdown(): Promise<void> {
    try {
      // ファイルを読み込んで改行を <br> に変換する関数
      function readAndConvert(filename: string): string {
        const filePath = path.resolve(filename);
        const content = fs.readFileSync(filePath, "utf-8");
        return content.replace(/\n/g, "<br>");
      }

      // 各タスクファイルを読み込み、改行を <br> に変換
      const taskContents = this.taskFiles.map((filename) =>
        readAndConvert(filename)
      );

      // テンプレートの読み込み
      let templateContent = fs.readFileSync(this.templatePath, "utf-8");

      // プレースホルダーを置換
      let updatedContent = templateContent;
      taskContents.forEach((content, index) => {
        updatedContent = templateContent.replace(
          `{{ task_${index} }}`,
          content
        );
      });

      // 結果の出力
      fs.writeFileSync(this.outputPath, updatedContent, "utf-8");

      console.log("Resume updated successfully!");
    } catch (error) {
      console.error("Failed to generate Markdown:", error);
    }
  }
}
