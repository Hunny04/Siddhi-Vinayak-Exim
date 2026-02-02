import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();

  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const mobile = formData.get("mobile");
  const message = formData.get("message");

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
<body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
    <tr>
      <td align="center">
        <table width="600" style="background:#ffffff; border-radius:8px; overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background:#214d3b; padding:20px; text-align:center;">
              <h1 style="color:#ffffff; margin:0;">Siddhi Vinayak Exim</h1>
              <p style="color:#d8efe6; margin:6px 0 0;">New Contact Inquiry</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:24px;">
              <p style="font-size:14px; color:#333;">
                You have received a new message from the Contact Us page.
              </p>

              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
                <tr>
                  <td style="border:1px solid #ddd;"><strong>Name</strong></td>
                  <td style="border:1px solid #ddd;">${fullName}</td>
                </tr>
                <tr style="background:#f9f9f9;">
                  <td style="border:1px solid #ddd;"><strong>Email</strong></td>
                  <td style="border:1px solid #ddd;">${email}</td>
                </tr>
                <tr>
                  <td style="border:1px solid #ddd;"><strong>Mobile</strong></td>
                  <td style="border:1px solid #ddd;">${mobile}</td>
                </tr>
                <tr style="background:#f9f9f9;">
                  <td style="border:1px solid #ddd;"><strong>Message</strong></td>
                  <td style="border:1px solid #ddd;">${message}</td>
                </tr>
              </table>

              <div style="margin-top:20px; text-align:center;">
                <a href="mailto:${email}"
                   style="background:#214d3b; color:#fff; padding:10px 20px;
                          text-decoration:none; border-radius:4px; font-size:14px;">
                  Reply to Sender
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f1f1f1; padding:14px; text-align:center;">
              <p style="font-size:12px; color:#666; margin:0;">
                © ${new Date().getFullYear()} Siddhi Vinayak Exim
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
      from: `"Website Contact"`,
      to: "siddhivinayakeximtbp55@gmail.com",
      subject: "New Contact Inquiry - Siddhi Vinayak Exim",
      html,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact mail error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
