"use client";
import { Github, Linkedin } from "lucide-react";
import { Toggle } from "./ui/toggle";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
  e.preventDefault();
  const el = document.querySelector(target);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function HeroSection() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "Awesome",
    },
    {
      text: "Website",
    },
    {
      text: "with",
    },
    {
      text: "ME",
      className: "text-white bg-black dark:text-black dark:bg-white",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[35rem] sm:h-[51.2rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        {`"Welcome to showcase, where innovation meets creativity."`}
      </p>
      <span className="sm:pb-10 pb-0">
        <TypewriterEffectSmooth words={words} />
      </span>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 my-4">
        <a href={"/opuPal.pdf"} target="_blank" rel="noopener noreferrer">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Resume
          </button>
        </a>
        <a href="#contact" onClick={(e) => handleScroll(e, "#contact")}>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Contact
          </button>
        </a>
      </div>
      <div className="flex gap-6 py-2">
        <a
          href={"https://github.com/opurbo007"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Toggle className="border border-black dark:border-white rounded-full bg-white text-black hover:bg-black hover:text-white ">
            <Github />
          </Toggle>
        </a>
        <a
          href={"https://www.linkedin.com/in/opu-pal/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Toggle className="border border-black dark:border-white rounded-full bg-black text-white hover:bg-white hover:text-black ">
            <Linkedin />
          </Toggle>
        </a>
      </div>
    </div>
  );
}
