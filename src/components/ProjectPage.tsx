"use client";

import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const project = [
  {
    _id: "1",

    name: "Tom & Jerry Game",
    description: "HTML CSS JS",
    git: "https://github.com/opurbo007/Tom-Jerry-Game",
    live: "https://opurbo007.github.io/Tom-Jerry-Game/",
    imagePath: "/temp/project12.png",
  },
  {
    _id: "2",
    name: "Tea Station",
    description: "Html CSS JS",
    git: "https://github.com/opurbo007/Project-I-Tea-Station-",
    imagePath: "/temp/project7.png",
  },
  {
    _id: "3",
    name: "Be Green",
    description: "HTML CSS JS PHP MySQL",
    git: "https://github.com/opurbo007/Nursary-Management",
    imagePath: "/temp/project11.png",
  },
  {
    _id: "4",
    name: "Student Portal",
    description: "HTML CSS JS PHP MySQL",
    git: "https://github.com/opurbo007/student_panal",
    imagePath: "/temp/project10.png",
  },
  {
    _id: "5",
    name: "Pure Fashion",
    description: "HTML CSS JS PHP MySQL",
    git: "https://github.com/opurbo007/pure_fashion-an-e-commerce-website-",
    imagePath: "/temp/project9.png",
  },
  {
    _id: "6",
    name: "Amar Fosol",
    description: "HTML CSS JS PHP MySQL",
    git: "https://github.com/opurbo007/farmar",
    imagePath: "/temp/project8.png",
  },
  {
    _id: "7",

    name: "Leisure Life",
    description: "HTML Tailwind PHP MySQL",
    git: "https://github.com/opurbo007/tour_website",
    imagePath: "/temp/project4.png",
  },
  {
    _id: "8",
    name: "Haven Store",
    description: "Next.js TypeScript Sanity Stripe Shandcn UI Tailwind",
    git: "https://github.com/opurbo007/havenstore",
    imagePath: "/temp/project6.png",
  },
  {
    _id: "9",
    name: "Routine Managment System",
    description: "HTML Tailwind PHP MySQL JS PHPMailer domPdf",
    git: "https://github.com/opurbo007/Routine",
    imagePath: "/temp/project5.png",
  },
  {
    _id: "10",
    name: "Weather App",
    description: "Vue.js Open-Weather-Api Html CSS",
    git: "https://github.com/opurbo007/Weather-With-VUE-JS",
    live: "https://weather000.netlify.app/",
    imagePath: "/temp/project3.png",
  },
  {
    _id: "11",
    name: "Qoo-Media",
    description: "React.js RapidApi Material UI",
    git: "https://github.com/opurbo007/Qoo-media/",
    live: "https://qoo-media.vercel.app/",
    imagePath: "/temp/project2.png",
  },
  {
    _id: "12",
    name: "portfolio",
    description: "NEXT.js MongoDB Shadcn UI Acerternity UI",
    git: "https://github.com/opurbo007/portfolio",
    live: "https://portfolio-theta-hazel-45.vercel.app/",
    imagePath: "/temp/project1.png",
  },
  {
    _id: "13",
    name: "ShowBox",
    description: "React.js Redux-toolkit TMBDApi SCSS",
    git: "https://github.com/opurbo007/showbox",
    live: "https://showbox-two.vercel.app/",
    imagePath: "/temp/project13.png",
  },
];

//showing as decending order
const projectData = project.sort((a, b) => parseInt(b._id) - parseInt(a._id));

export function ProjectPage() {
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {projectData.map((project: any) => (
          <CardContainer key={project._id} className="w-full sm:px-0 px-3">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {project.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={project.imagePath}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-black"
                  alt={project.name}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                {project.live ? (
                  <Link
                    href={project.live}
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
                ) : (
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white border"
                  >
                    Live Not Available
                  </CardItem>
                )}
                <Link
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
