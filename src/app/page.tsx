import About from "@/components/About";
import Contact from "@/components/Contact";
import { HeroSection } from "@/components/HeroSection";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

interface Project {
  _id: number;
  name: string;
  git: string;
  live?: string;
  imagePath: string;
}
const projectData: Project[] = [
  {
    _id: 1,
    name: "ShowBox",
    git: "https://github.com/opurbo007/showbox",
    imagePath: "/temp/project13.png",
    live: "https://showbox-two.vercel.app/",
  },
  {
    _id: 2,
    name: "Portfolio",
    git: "https://github.com/opurbo007/portfolio",
    live: "https://portfolio-theta-hazel-45.vercel.app/",
    imagePath: "/temp/project1.png",
  },
  {
    _id: 3,
    name: "Qoo-Media",
    git: "https://github.com/opurbo007/Qoo-media",
    live: "https://qoo-media.vercel.app/",
    imagePath: "/temp/project2.png",
  },
];

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <HeroSection />
        <About />
        <Skill />
        <Project projectData={projectData} />
        <Contact />
      </div>
    </>
  );
}
