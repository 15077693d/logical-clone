import { IFormValues } from "@/app/interface";
import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(request: Request) {
  const { senderEmail, name, message } = (await request.json()) as IFormValues;
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
      text: message,
    });
    return NextResponse.json(
      { message: `Message sent: ${info.messageId}` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: JSON.stringify(error),
      },
      { status: 404 }
    );
  }
}
