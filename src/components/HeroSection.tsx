"use client";
import { Briefcase, Github, Linkedin } from "lucide-react";
import Image from "next/image";
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
      <div className="relative mb-6">
        <Image
          src={"/avatar.jpg"}
          alt="Opu Pal"
          width={140}
          height={140}
          className="rounded-full border-4 border-black dark:border-white object-cover h-32 w-32 sm:h-36 sm:w-36"
        />
        <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white dark:border-black" />
      </div>
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        {`"Welcome to showcase, where innovation meets creativity."`}
      </p>
      <span className="sm:pb-10 pb-0">
        <TypewriterEffectSmooth words={words} />
      </span>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-900 text-xs sm:text-sm my-3">
        <Briefcase className="h-3.5 w-3.5" />
        <span>Full-Stack Developer at <strong>Tachy's</strong> · May 2024 - Present</span>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 my-4">
        <a href={"/opu_pal_cv.pdf"} target="_blank" rel="noopener noreferrer">
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
