"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

const card = [
  {
    name: "portfolio",
    image: "/temp/project1.png",
    description: "NEXT.js MongDB Shadcn UI Acerternity UI",
    git: "https://github.com/opurbo007/portfolio",
    live: "https://portfolio-theta-hazel-45.vercel.app/",
  },
  {
    name: "portfolio",
    image: "/temp/project2.png",
    description: "NEXT.js MongDB Shadcn UI Acerternity UI",
    git: "https://github.com/opurbo007/portfolio",
    live: "https://portfolio-theta-hazel-45.vercel.app/",
  },
  {
    name: "portfolio",
    image: "/temp/project3.png",
    description: "NEXT.js MongDB Shadcn UI Acerternity UI",
    git: "https://github.com/opurbo007/portfolio",
    live: "https://portfolio-theta-hazel-45.vercel.app/",
  },
  {
    name: "portfolio",
    image: "/temp/project1.png",
    description: "NEXT.js MongDB Shadcn UI Acerternity UI",
    git: "https://github.com/opurbo007/portfolio",
    live: "https://portfolio-theta-hazel-45.vercel.app/",
  },
  {
    name: "portfolio",
    image: "/temp/project2.png",
    description: "NEXT.js MongDB Shadcn UI Acerternity UI",
    git: "https://github.com/opurbo007/portfolio",
    live: "https://portfolio-theta-hazel-45.vercel.app/",
  },
  {
    name: "portfolio",
    image: "/temp/project1.png",
    description: "NEXT.js MongDB Shadcn UI Acerternity UI",
    git: "https://github.com/opurbo007/portfolio",
    live: "https://portfolio-theta-hazel-45.vercel.app/",
  },
  {
    name: "portfolio",
    image: "/temp/project1.png",
    description: "NEXT.js MongDB Shadcn UI Acerternity UI",
    git: "https://github.com/opurbo007/portfolio",
    live: "https://portfolio-theta-hazel-45.vercel.app/",
  },
];

export function ProjectPage() {
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {card.map((item, idx) => (
          <CardContainer key={idx} className="w-full sm:px-0 px-3">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {item.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {item.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={item.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-black"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <Link
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border"
                  >
                    Try now →
                  </CardItem>
                </Link>
                <Link href={item.git} target="_blank" rel="noopener noreferrer">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    GitHub
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}
