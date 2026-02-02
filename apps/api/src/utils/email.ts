import { createTransport } from "nodemailer";


const createTransporter = () => {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  return createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: Number(process.env.SMTP_PORT),
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
    tls: {
      minVersion: "TLSv1.2",
      rejectUnauthorized: false,
    }
  });
};

export const sendEmail = async (to: string, subject: string, html: string) => {
  const mailOptions = {
    from: "admin.benedictdev@gmail.com",
    to,
    subject,
    html,
  };

  const transporter = createTransporter();
  await transporter.sendMail(mailOptions);
};

export const sendOtpEmail = async (email: string, otp: number | string) => {
  const otpHtml = `
        <h2>Password Reset OTP</h2>
        <p>Your OTP is: <strong>${otp}</strong></p>
        <p>This OTP will expire in 5 minutes.</p>
    `;

  const verificationHtml = `
        <h2>Account Verification</h2>
        <p>Click the link below to verify your account:</p>
        <p><a href="${otp}">Verify Account</a></p>
        <p>This link will expire in 5 minutes.</p>
    `;

  await sendEmail(
    email,
    "Password Reset OTP",
    typeof otp === "string" ? verificationHtml : otpHtml,
  );
};
