import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(request: Request) {
  const { senderEmail, name, content } = (await request.json()) as {
    senderEmail: string;
    name: string;
    content: string;
  };
  const transporter = createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  // send mail with defined transport object
  try {
    const info = await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: process.env.NODEMAILER_EMAIL,
      subject: `New email from ${name} <${senderEmail}>`,
      text: content,
    });
    return NextResponse.json(
      { message: `Message sent: ${info.messageId}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: JSON.stringify(error) }, { status: 404 });
  }
}
