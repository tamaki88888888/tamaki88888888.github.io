import * as fs from "fs";
import { mdToPdf } from "md-to-pdf";

/**
 * Markdown ファイルを PDF に変換する関数
 */

export class MarkdownToPdfConverter {
  private markdownPath: string;
  private pdfPath: string;

  constructor(markdownPath: string, pdfPath: string) {
    this.markdownPath = markdownPath;
    this.pdfPath = pdfPath;
  }

  public async convertMarkdownToPdf(): Promise<void> {
    try {
      const pdf = await mdToPdf({ path: this.markdownPath });

      if (!pdf.filename) {
        fs.writeFileSync(this.pdfPath, pdf.content);
        console.log(`PDF generated and saved as ${this.pdfPath}!`);
      } else {
        fs.writeFileSync(pdf.filename, pdf.content);
        console.log(
          `PDF generated successfully with filename: ${pdf.filename}`
        );
      }
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    }
  }
}
