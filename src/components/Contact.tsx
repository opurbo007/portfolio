"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
const Contact = () => {
  const [userMessage, setUserMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (userMessage.email.length > 0 && userMessage.message.length > 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [userMessage]);

  const msgSend = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/contact", {
        name: userMessage.name,
        email: userMessage.email,
        message: userMessage.message,
      });

      toast.success("Successfully sent");
      setUserMessage({
        name: "",
        email: "",
        message: "",
      });
    } catch (error: any) {
      toast.error("Error sending message");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-full sm:h-[40rem] py-8 ">
      <div>
        <h2 className="flex items-center justify-center font-semibold text-4xl pb-16 tracking-[0.5rem] text-center">
          CONTACT ME
        </h2>
      </div>

      <div>
        <div className="flex items-center flex-col gap-6 dark:text-slate-950">
          <Input
            type="text"
            placeholder="Enter your Name"
            className="w-3/4 sm:w-1/2 dark:bg-slate-50"
            value={userMessage.name}
            onChange={(e) =>
              setUserMessage({ ...userMessage, name: e.target.value })
            }
          />
          <Input
            type="email"
            placeholder="Enter your Email Address"
            className="w-3/4 sm:w-1/2 dark:bg-slate-50"
            value={userMessage.email}
            onChange={(e) =>
              setUserMessage({ ...userMessage, email: e.target.value })
            }
          />
          <Textarea
            className="w-3/4 sm:w-1/2 h-32 dark:bg-slate-50 text-wrap"
            placeholder={
              "I'd love to hear from you! Share your thoughts here..."
            }
            value={userMessage.message}
            onChange={(e) =>
              setUserMessage({ ...userMessage, message: e.target.value })
            }
          />
          <Button onClick={msgSend} disabled={disable || loading}>
            {loading ? "Sending" : disable ? "Write Message" : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
