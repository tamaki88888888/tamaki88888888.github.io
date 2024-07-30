import * as fs from "fs";
import { mdToPdf } from "md-to-pdf";

async function convertMarkdownToPdf() {
  try {
    // Markdown ファイルの変換
    const pdf = await mdToPdf({ path: "RESUME.md" });

    if (!pdf.filename) return console.log("filename is empty!");

    // PDF をファイルとして保存
    if (pdf) {
      fs.writeFileSync(pdf.filename, pdf.content);
      console.log("PDF generated successfully!");
    }
  } catch (error) {
    console.error("Failed to generate PDF:", error);
  }
}

// 関数を実行
convertMarkdownToPdf();
