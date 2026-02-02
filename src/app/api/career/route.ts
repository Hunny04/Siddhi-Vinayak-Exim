import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();

  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const mobile = formData.get("mobile");
  const jobTitle = formData.get("jobTitle");
  const experience = formData.get("experience");
  const location = formData.get("location");
  const message = formData.get("message");
  const resume = formData.get("resume") as File;

  /* ================= EMAIL SETUP ================= */
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const attachments = resume
      ? [
          {
            filename: resume.name,
            content: Buffer.from(await resume.arrayBuffer()),
          },
        ]
      : [];

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>New Career Application</title>
</head>

<body style="margin:0; padding:0; background-color:#f4f6f8; font-family:Arial, sans-serif;">
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
              <p style="color:#d6efe5; margin:6px 0 0; font-size:14px;">
                New Career Application
              </p>
            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="padding:24px;">
              <p style="font-size:14px; color:#333333; margin-bottom:16px;">
                A new candidate has applied for a position. Please find the details below:
              </p>

              <!-- DETAILS TABLE -->
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
                <tr style="background:#f9f9f9;">
                  <td style="border:1px solid #ddd;"><strong>Full Name</strong></td>
                  <td style="border:1px solid #ddd;">${fullName}</td>
                </tr>
                <tr>
                  <td style="border:1px solid #ddd;"><strong>Email</strong></td>
                  <td style="border:1px solid #ddd;">${email}</td>
                </tr>
                <tr style="background:#f9f9f9;">
                  <td style="border:1px solid #ddd;"><strong>Mobile</strong></td>
                  <td style="border:1px solid #ddd;">${mobile}</td>
                </tr>
                <tr>
                  <td style="border:1px solid #ddd;"><strong>Applied For</strong></td>
                  <td style="border:1px solid #ddd;">${jobTitle}</td>
                </tr>
                <tr style="background:#f9f9f9;">
                  <td style="border:1px solid #ddd;"><strong>Total Experience</strong></td>
                  <td style="border:1px solid #ddd;">${experience}</td>
                </tr>
                <tr>
                  <td style="border:1px solid #ddd;"><strong>Current Location</strong></td>
                  <td style="border:1px solid #ddd;">${location}</td>
                </tr>
                <tr style="background:#f9f9f9;">
                  <td style="border:1px solid #ddd;"><strong>Message</strong></td>
                  <td style="border:1px solid #ddd;">
                    ${message || "-"}
                  </td>
                </tr>
              </table>

              <!-- RESUME NOTE -->
              <p style="font-size:13px; color:#555555; margin-top:16px;">
                📎 <strong>Resume attached</strong> with this email.
              </p>

              <!-- CTA -->
              <div style="margin-top:24px; text-align:center;">
                <a
                  href="mailto:${email}"
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
                  Reply to Candidate
                </a>
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#f1f1f1; padding:16px; text-align:center;">
              <p style="font-size:12px; color:#666666; margin:0;">
                © ${new Date().getFullYear()} Siddhi Vinayak Exim<br/>
                This application was submitted via the Careers page.
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
      from: `"Career Application"`,
      to: "siddhivinayakeximtbp55@gmail.com",
      subject: `New Career Application - ${jobTitle}`,
      html,
      attachments,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Career mail error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
