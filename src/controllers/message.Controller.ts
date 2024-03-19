import connect from "@/db/config";
import { Message } from "@/models/message.model";

export async function saveMessage(
  name: string,
  email: string,
  message: string,
) {
  try {
    await connect();
    const newMessage = new Message({ name, email, message });
    const savedMessage = await newMessage.save();
    return savedMessage;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
