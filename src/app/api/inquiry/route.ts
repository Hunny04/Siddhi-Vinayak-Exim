import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.formData();

  const payload = Object.fromEntries(data.entries());

  const res = await fetch(process.env.GOOGLE_SHEET_WEBHOOK!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  console.log("Google Sheets response status:", res);

  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.EMAIL_USER,
  //     pass: process.env.EMAIL_PASS,
  //   },
  // });

  // const html = `
  //   <h2>New Inquiry - Siddhi Vinayak Exim</h2>
  //   <table border="1" cellpadding="8" cellspacing="0">
  //     <tr><td><b>Name</b></td><td>${payload.fullName}</td></tr>
  //     <tr><td><b>Email</b></td><td>${payload.email}</td></tr>
  //     <tr><td><b>Mobile</b></td><td>${payload.mobile}</td></tr>
  //     <tr><td><b>Country</b></td><td>${payload.country}</td></tr>
  //     <tr><td><b>Product</b></td><td>${payload.product || "N/A"}</td></tr>
  //     <tr><td><b>Quantity</b></td><td>${payload.quantity}</td></tr>
  //     <tr><td><b>Purpose</b></td><td>${payload.purpose}</td></tr>
  //     <tr><td><b>Message</b></td><td>${payload.message || "-"}</td></tr>
  //   </table>
  // `;

  // await transporter.sendMail({
  //   from: `"Website Inquiry" <${process.env.EMAIL_USER}>`,
  //   to: "siddhivinayakeximtbp55@gmail.com",
  //   subject: "New Website Inquiry",
  //   html,
  // });

  return Response.json({ success: true });
}
