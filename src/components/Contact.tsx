"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const [userMessage, setUserMessage] = useState({
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
        email: userMessage.email,
        message: userMessage.message,
      });

      setUserMessage({
        email: "",
        message: "",
      });
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="h-full sm:h-[40rem] py-8 ">
      <div>
        <h2 className="flex items-center justify-center font-semibold text-4xl pb-16 tracking-[0.5rem]">
          CONTACT ME
        </h2>
      </div>

      <div>
        <div className="flex items-center flex-col gap-6">
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
          <Button onClick={msgSend} disabled={disable}>
            {disable ? "Write Message" : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
