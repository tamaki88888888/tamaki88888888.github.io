import { MarkdownGenerator } from "./MarkdownGenerator";
import { MarkdownToPdfConverter } from "./MarkdownToPdfConverter";

/**
 * Markdown ファイルと PDF ファイルを処理するクラス
 */
export class DocumentProcessor {
  private markdownGenerator: MarkdownGenerator;
  private pdfConverter: MarkdownToPdfConverter;

  constructor(
    markdownGenerator: MarkdownGenerator,
    pdfConverter: MarkdownToPdfConverter
  ) {
    this.markdownGenerator = markdownGenerator;
    this.pdfConverter = pdfConverter;
  }

  public async processDocuments(): Promise<void> {
    try {
      await this.markdownGenerator.generateMarkdown();
      await this.pdfConverter.convertMarkdownToPdf();
    } catch (error) {
      console.error("Failed to process documents:", error);
    }
  }
}
