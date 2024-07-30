import * as fs from "fs";
import { mdToPdf } from "md-to-pdf";

async function convertMarkdownToPdf() {
  try {
    // Markdown ファイルの変換
    const pdf = await mdToPdf({ path: "RESUME.md" });

    if (!pdf.filename) {
      // ファイル名が設定されていない場合は自分で指定
      fs.writeFileSync("RESUME.pdf", pdf.content);
      console.log("PDF generated and saved as RESUME.pdf!");
    } else {
      // もし pdf.filename が設定されていたら、それを使う
      fs.writeFileSync(pdf.filename, pdf.content);
      console.log("PDF generated successfully with filename:", pdf.filename);
    }
  } catch (error) {
    console.error("Failed to generate PDF:", error);
  }
}

// 関数を実行
convertMarkdownToPdf();
