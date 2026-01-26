import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import { products } from "@/data/products";

export async function GET() {
  const doc = new PDFDocument({ margin: 40 });
  const chunks: Buffer[] = [];

  doc.on("data", (chunk: any) => chunks.push(chunk));
  doc.on("end", () => {});

  doc.fontSize(22).text("Siddhi Vinayak Exim", { align: "center" });
  doc.moveDown();

  products.forEach((p) => {
    doc.fontSize(16).text(p.name);
    doc.fontSize(12).text(p.tagline);
    doc.moveDown(0.5);

    p.specifications.forEach((spec) => {
      doc.text(`${spec.label}: ${spec.value}`);
    });

    doc.moveDown();
    doc.text("————————————");
    doc.moveDown();
  });

  doc.end();

  await new Promise((resolve) => doc.on("end", resolve));

  return new NextResponse(Buffer.concat(chunks), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=Siddhi_Vinayak_Exim_Catalog.pdf",
    },
  });
}
