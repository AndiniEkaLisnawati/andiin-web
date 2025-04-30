import nodemailer from 'nodemailer';

// Untuk implementasi SMTP sebenarnya, konfigurasi harus menggunakan
// kredensial dari penyedia email yang valid
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASSWORD || '',
  },
});

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  try {
    const mailOptions = {
      from: `"Portfolio Contact" <${data.email}>`,
      to: 'andiniekalisnawatilili2@gmail.com',
      subject: `Portfolio Contact: ${data.subject}`,
      html: `
        <h2>New Contact Message from Portfolio</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Message from Portfolio\n
        Name: ${data.name}\n
        Email: ${data.email}\n
        Subject: ${data.subject}\n
        Message:\n${data.message}
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}