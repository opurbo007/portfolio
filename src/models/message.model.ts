import mongoose from "mongoose";

interface Message {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

const userMessage = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    message: {
      type: String,
      required: [true, "Please write your message"],
    },
  },
  { timestamps: true },
);

export const Message =
  mongoose.models.Message || mongoose.model<Message>("Message", userMessage);
