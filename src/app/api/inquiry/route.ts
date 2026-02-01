import nodemailer from "nodemailer";
import { products } from "@/data/products";

export async function POST(req: Request) {
  const formData = await req.formData();
  const payload = Object.fromEntries(formData.entries());

  // Convert product slug → product name
  const productName = products.find((p) => p.slug === payload.product)?.name || payload.product || "N/A";

  /* ================================
     1️⃣ SAVE TO GOOGLE SHEET (SAFE)
  ================================= */
  let sheetStatus = "success";

  try {
    await fetch(process.env.GOOGLE_SHEET_WEBHOOK!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: payload.fullName,
        email: payload.email,
        mobile: payload.mobile,
        country: payload.country,
        product: productName,
        quantity: payload.quantity,
        purpose: payload.purpose,
        message: payload.message,
      }),
    });
  } catch (error) {
    console.error("Google Sheet Error:", error);
    sheetStatus = "failed";
  }

  /* ================================
     2️⃣ SEND EMAIL (SAFE)
  ================================= */
  let mailStatus = "success";

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const html = `
      <h2>New Website Inquiry</h2>
      <table border="1" cellpadding="8" cellspacing="0">
        <tr><td><b>Name</b></td><td>${payload.fullName}</td></tr>
        <tr><td><b>Email</b></td><td>${payload.email}</td></tr>
        <tr><td><b>Mobile</b></td><td>${payload.mobile}</td></tr>
        <tr><td><b>Country</b></td><td>${payload.country}</td></tr>
        <tr><td><b>Product</b></td><td>${productName}</td></tr>
        <tr><td><b>Quantity</b></td><td>${payload.quantity}</td></tr>
        <tr><td><b>Purpose</b></td><td>${payload.purpose}</td></tr>
        <tr><td><b>Message</b></td><td>${payload.message || "-"}</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: `"Website Inquiry"`,
      to: "siddhivinayakeximtbp55@gmail.com",
      subject: "New Inquiry - Siddhi Vinayak Exim",
      html,
    });
  } catch (error) {
    console.error("Mail Error:", error);
    mailStatus = "failed";
  }

  /* ================================
     FINAL RESPONSE (DO NOT FAIL)
  ================================= */
  return Response.json({
    success: true,
    sheet: sheetStatus,
    mail: mailStatus,
  });
}
