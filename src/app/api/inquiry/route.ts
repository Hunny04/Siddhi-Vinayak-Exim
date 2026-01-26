import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();

  const inquiry = {
    fullName: data.get("fullName"),
    companyName: data.get("companyName"),
    country: data.get("country"),
    products: data.getAll("products"),
    quantity: data.get("quantity"),
    port: data.get("port"),
    requirements: data.get("requirements"),
  };

  // 👉 You can:
  // 1. Send email (Nodemailer / Resend)
  // 2. Save to DB
  // 3. Push to CRM

  console.log("NEW INQUIRY:", inquiry);

  return NextResponse.json({ success: true });
}
