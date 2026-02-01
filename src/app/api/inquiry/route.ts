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
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <title>New Inquiry</title>
        </head>

        <body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; overflow:hidden;">

                  <!-- HEADER -->
                  <tr>
                    <td style="background:#214d3b; padding:20px; text-align:center;">
                      <h1 style="color:#ffffff; margin:0; font-size:22px;">
                        Siddhi Vinayak Exim
                      </h1>
                      <p style="color:#d9efe7; margin:6px 0 0; font-size:14px;">
                        New Website Inquiry
                      </p>
                    </td>
                  </tr>

                  <!-- CONTENT -->
                  <tr>
                    <td style="padding:24px;">
                      <p style="font-size:14px; color:#333333; margin-bottom:16px;">
                        You have received a new inquiry from your website. Details are below:
                      </p>

                      <!-- DETAILS TABLE -->
                      <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
                        <tr style="background:#f9f9f9;">
                          <td style="border:1px solid #ddd;"><strong>Name</strong></td>
                          <td style="border:1px solid #ddd;">${payload.fullName}</td>
                        </tr>
                        <tr>
                          <td style="border:1px solid #ddd;"><strong>Email</strong></td>
                          <td style="border:1px solid #ddd;">${payload.email}</td>
                        </tr>
                        <tr style="background:#f9f9f9;">
                          <td style="border:1px solid #ddd;"><strong>Mobile / WhatsApp</strong></td>
                          <td style="border:1px solid #ddd;">${payload.mobile}</td>
                        </tr>
                        <tr>
                          <td style="border:1px solid #ddd;"><strong>Country</strong></td>
                          <td style="border:1px solid #ddd;">${payload.country}</td>
                        </tr>
                        <tr style="background:#f9f9f9;">
                          <td style="border:1px solid #ddd;"><strong>Product</strong></td>
                          <td style="border:1px solid #ddd;">${productName}</td>
                        </tr>
                        <tr>
                          <td style="border:1px solid #ddd;"><strong>Quantity Required</strong></td>
                          <td style="border:1px solid #ddd;">${payload.quantity}</td>
                        </tr>
                        <tr style="background:#f9f9f9;">
                          <td style="border:1px solid #ddd;"><strong>Purpose</strong></td>
                          <td style="border:1px solid #ddd;">${payload.purpose}</td>
                        </tr>
                        <tr>
                          <td style="border:1px solid #ddd;"><strong>Message</strong></td>
                          <td style="border:1px solid #ddd;">
                            ${payload.message || "-"}
                          </td>
                        </tr>
                      </table>

                      <!-- CTA -->
                      <div style="margin-top:24px; text-align:center;">
                        <a
                          href="mailto:${payload.email}"
                          style="
                            background:#214d3b;
                            color:#ffffff;
                            padding:10px 20px;
                            text-decoration:none;
                            border-radius:4px;
                            font-size:14px;
                            display:inline-block;
                          "
                        >
                          Reply to Customer
                        </a>
                      </div>
                    </td>
                  </tr>

                  <!-- FOOTER -->
                  <tr>
                    <td style="background:#f1f1f1; padding:16px; text-align:center;">
                      <p style="font-size:12px; color:#666666; margin:0;">
                        © ${new Date().getFullYear()} Siddhi Vinayak Exim<br/>
                        This inquiry was generated from your website.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
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
