"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (data.name.trim().length > 50) {
    errors.name = "Name must be under 50 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  } else if (data.message.trim().length > 1000) {
    errors.message = "Message must be under 1000 characters";
  }

  return errors;
};

const Contact = () => {
  const [userMessage, setUserMessage] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<keyof FormData, boolean>>({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState(false);

  const formErrors = validate(userMessage);
  const isValid = Object.keys(formErrors).length === 0;

  const handleChange = (field: keyof FormData, value: string) => {
    setUserMessage((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setErrors(validate({ ...userMessage, [field]: value }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(userMessage));
  };

  const msgSend = async () => {
    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate(userMessage);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    try {
      setLoading(true);
      await axios.post("/api/contact", {
        name: userMessage.name.trim(),
        email: userMessage.email.trim(),
        message: userMessage.message.trim(),
      });

      toast.success("Successfully sent");
      setUserMessage({ name: "", email: "", message: "" });
      setErrors({});
      setTouched({ name: false, email: false, message: false });
    } catch (error) {
      toast.error("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      msgSend();
    }
  };

  const fieldError = (field: keyof FormData) =>
    touched[field] ? errors[field] : undefined;

  return (
    <div className="h-full sm:h-[40rem] py-8">
      <div>
        <h2 className="flex items-center justify-center font-semibold text-4xl pb-16 tracking-[0.5rem] text-center">
          CONTACT ME
        </h2>
      </div>

      <form
        onKeyDown={handleKeyDown}
        onSubmit={(e) => {
          e.preventDefault();
          msgSend();
        }}
        className="flex items-center flex-col gap-6"
        noValidate
      >
        <div className="w-3/4 sm:w-1/2 space-y-1.5">
          <Input
            type="text"
            placeholder="Enter your Name"
            className={`dark:bg-slate-50 ${
              fieldError("name")
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }`}
            value={userMessage.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={() => handleBlur("name")}
            maxLength={50}
            aria-invalid={!!fieldError("name")}
          />
          {fieldError("name") && (
            <p className="text-xs text-red-500 px-1">{fieldError("name")}</p>
          )}
        </div>

        <div className="w-3/4 sm:w-1/2 space-y-1.5">
          <Input
            type="email"
            placeholder="Enter your Email Address"
            className={`dark:bg-slate-50 ${
              fieldError("email")
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }`}
            value={userMessage.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            aria-invalid={!!fieldError("email")}
          />
          {fieldError("email") && (
            <p className="text-xs text-red-500 px-1">{fieldError("email")}</p>
          )}
        </div>

        <div className="w-3/4 sm:w-1/2 space-y-1.5">
          <Textarea
            className={`h-32 dark:bg-slate-50 text-wrap ${
              fieldError("message")
                ? "border-red-500 focus-visible:ring-red-500"
                : ""
            }`}
            placeholder="I'd love to hear from you! Share your thoughts here..."
            value={userMessage.message}
            onChange={(e) => handleChange("message", e.target.value)}
            onBlur={() => handleBlur("message")}
            maxLength={1000}
            aria-invalid={!!fieldError("message")}
          />
          <div className="flex justify-between items-center px-1">
            {fieldError("message") ? (
              <p className="text-xs text-red-500">{fieldError("message")}</p>
            ) : (
              <span />
            )}
            <p className="text-xs text-neutral-500">
              {userMessage.message.length}/1000
            </p>
          </div>
        </div>

        <Button type="submit" disabled={!isValid || loading}>
          {loading ? "Sending..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default Contact;