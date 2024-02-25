import { saveMessage } from "@/controllers/message.Controller";
import connect from "@/db/config";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const reqBody = await request.json();

    const { email, message } = reqBody;
    console.log(reqBody);

    const savedMessage = await saveMessage(email, message);

    const response = NextResponse.json(
      {
        success: true,

        savedMessage: savedMessage,
        message: "Message sent successfully",
      },
      { status: 200 },
    );
    console.log(response);
    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
connect();
