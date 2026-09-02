"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface ProjectType {
  _id: number;
  name: string;
  git: string;
  live?: string;
  imagePath: string;
  description?: string;
  isPrivate?: boolean;
}

const allProjects: ProjectType[] = [
  {
    _id: 1,
    name: "Techys Retail & IT",
    description: "Next.js Tailwind TypeScript",
    git: "",
    live: "https://www.mytechys.co.uk/retail",
    imagePath: "/temp/project25.png",
    isPrivate: true,
  },
  {
    _id: 2,
    name: "Wheelline",
    description: "Next.js Tailwind TypeScript",
    git: "",
    live: "https://www.wheelline.co.uk/",
    imagePath: "/temp/project24.png",
    isPrivate: true,
  },
  {
    _id: 3,
    name: "Okra Derby",
    description: "Next.js Tailwind TypeScript",
    git: "",
    live: "https://okracfw.mytechys.co.uk/",
    imagePath: "/temp/project23.png",
    isPrivate: true,
  },
  {
    _id: 4,
    name: "Bond Wallet",
    description: "Next.js Tailwind Shadcn/UI MongoDB",
    git: "https://github.com/opurbo007/prize-bond-checker",
    live: "https://bondwallet.vercel.app",
    imagePath: "/temp/project17.png",
  },
  {
    _id: 5,
    name: "Remote Office Manager",
    description: "Next.js PostgreSQL Tailwind React-icons",
    git: "https://github.com/opurbo007/remote-office-manager",
    imagePath: "/temp/project16.png",
  },
  {
    _id: 6,
    name: "Daily Task",
    description: "Next.js PostgreSQL Tailwind Prisma ORM",
    git: "https://github.com/opurbo007/daily-task",
    live: "https://justdoeverything.vercel.app/",
    imagePath: "/temp/project15.png",
  },
  {
    _id: 7,
    name: "Finance Tracker",
    description: "Next.js MongoDB Tailwind PWA",
    git: "https://github.com/opurbo007/finance-tracker",
    live: "https://trackerfi.vercel.app/",
    imagePath: "/temp/project20.png",
  },
  {
    _id: 8,
    name: "Website Speed Tester",
    description: "React Tailwind Electron",
    git: "https://github.com/opurbo007/security-scanner",
    imagePath: "/temp/project21.png",
  },
  {
    _id: 9,
    name: "me&u (Cook together)",
    description: "React TypeScript Tailwind",
    git: "https://github.com/opurbo007/recipe_video",
    live: "https://me-and-u.vercel.app/",
    imagePath: "/temp/project22.png",
  },
  {
    _id: 10,
    name: "Drive Academy",
    description: "Next.js Tailwind MongoDB PWA",
    git: "https://github.com/opurbo007/drive-academy",
    live: "https://ttc19.vercel.app/",
    imagePath: "/temp/project18.png",
  },
  {
    _id: 11,
    name: "Portfolio",
    description: "Next.js MongoDB Shadcn UI Aceternity UI",
    git: "https://github.com/opurbo007/portfolio",
    live: "https://portfolio-theta-hazel-45.vercel.app/",
    imagePath: "/temp/project1.png",
  },
  {
    _id: 12,
    name: "ShowBox",
    description: "React Redux-toolkit TMDB API SCSS",
    git: "https://github.com/opurbo007/showbox",
    live: "https://showbox-two.vercel.app/",
    imagePath: "/temp/project13.png",
  },
  {
    _id: 13,
    name: "Qoo-Media",
    description: "React RapidApi Material UI",
    git: "https://github.com/opurbo007/Qoo-media/",
    live: "https://qoo-media.vercel.app/",
    imagePath: "/temp/project2.png",
  },
  {
    _id: 14,
    name: "Weather App",
    description: "Vue.js OpenWeather API HTML CSS",
    git: "https://github.com/opurbo007/Weather-With-VUE-JS",
    live: "https://weather000.netlify.app/",
    imagePath: "/temp/project3.png",
  },
  {
    _id: 15,
    name: "Routine Management",
    description: "HTML Tailwind PHP MySQL JS PHPMailer domPdf",
    git: "https://github.com/opurbo007/Routine",
    imagePath: "/temp/project5.png",
  },
  {
    _id: 16,
    name: "Haven Store",
    description: "Next.js TypeScript Sanity Stripe Shadcn UI Tailwind",
    git: "https://github.com/opurbo007/havenstore",
    imagePath: "/temp/project6.png",
  },
  {
    _id: 17,
    name: "EventX",
    description: "React.js Tailwind",
    git: "https://github.com/opurbo007/eventx",
    live: "https://eventx-zeta.vercel.app/",
    imagePath: "/temp/project14.png",
  },
  {
    _id: 18,
    name: "Leisure Life",
    description: "HTML Tailwind PHP MySQL",
    git: "https://github.com/opurbo007/tour_website",
    imagePath: "/temp/project4.png",
  },
  {
    _id: 19,
    name: "Amar Fosol",
    description: "HTML CSS JS PHP MySQL",
    git: "https://github.com/opurbo007/farmar",
    imagePath: "/temp/project8.png",
  },
  {
    _id: 20,
    name: "Pure Fashion",
    description: "HTML CSS JS PHP MySQL",
    git: "https://github.com/opurbo007/pure_fashion-an-e-commerce-website-",
    imagePath: "/temp/project9.png",
  },
  {
    _id: 21,
    name: "Student Portal",
    description: "HTML CSS JS PHP MySQL",
    git: "https://github.com/opurbo007/student_panal",
    imagePath: "/temp/project10.png",
  },
  {
    _id: 22,
    name: "Be Green",
    description: "HTML CSS JS PHP MySQL",
    git: "https://github.com/opurbo007/Nursary-Management",
    imagePath: "/temp/project11.png",
  },
  {
    _id: 23,
    name: "Tea Station",
    description: "HTML CSS JS",
    git: "https://github.com/opurbo007/Project-I-Tea-Station-",
    imagePath: "/temp/project7.png",
  },
  {
    _id: 24,
    name: "Tom & Jerry Game",
    description: "HTML CSS JS",
    git: "https://github.com/opurbo007/Tom-Jerry-Game",
    imagePath: "/temp/project12.png",
  },
];

const INITIAL_COUNT = 3;

const Project: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = showAll ? allProjects : allProjects.slice(0, INITIAL_COUNT);

  return (
    <section className="h-full py-12">
      <div>
        <h2 className="flex items-center justify-center font-semibold text-4xl pb-12 tracking-[0.7rem]">
          PROJECTS
        </h2>
      </div>
      <div className="flex items-center justify-center px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
          {projects.map((item) => {
            const tags = item.description?.split(" ") ?? [];
            return (
              <Card
                key={item._id}
                className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative w-full aspect-video bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src={item.imagePath}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <CardHeader className="space-y-3 p-5 flex-1">
                  <CardTitle className="text-lg font-semibold leading-tight">
                    {item.name}
                  </CardTitle>
                  <CardDescription>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardDescription>
                </CardHeader>
                <div className="flex items-center justify-between gap-2 px-5 pb-5 pt-2 mt-auto">
                  {item.git && !item.isPrivate ? (
                    <Link
                      href={item.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2 text-xs font-medium rounded-md bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Code
                    </Link>
                  ) : (
                    <span className="inline-flex items-center justify-center flex-1 px-3 py-2 text-xs font-medium rounded-md border border-dashed border-neutral-400 dark:border-neutral-600 text-neutral-500 dark:text-neutral-400 cursor-not-allowed">
                      Private
                    </span>
                  )}
                  {item.live ? (
                    <Link
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 flex-1 px-3 py-2 text-xs font-medium rounded-md border border-black dark:border-white bg-white text-black dark:bg-black dark:text-white hover:opacity-80 transition"
                    >
                      Live
                    </Link>
                  ) : (
                    <span className="inline-flex items-center justify-center flex-1 px-3 py-2 text-xs font-medium rounded-md border border-dashed border-neutral-400 text-neutral-400">
                      No Demo
                    </span>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center pt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="inline-flex items-center px-6 py-2.5 text-sm font-medium rounded-full border border-black dark:border-white bg-transparent text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Project;