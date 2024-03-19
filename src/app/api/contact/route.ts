import { saveMessage } from "@/controllers/message.Controller";
import connect from "@/db/config";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    await connect();

    // Parse request body
    const reqBody = await request.json();
    const { name, email, message } = reqBody;

    const savedMessage = await saveMessage(name, email, message);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL,
      to: process.env.MAIL,
      subject: `${name} from portfolio`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    const response = NextResponse.json(
      {
        success: true,
        savedMessage: savedMessage,
        message: "Message sent successfully",
      },
      { status: 200 },
    );

    // console.log(response);

    return response;
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Fail to sent Message",
      },
      { status: 500 },
    );
  }
}
