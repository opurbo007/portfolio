import About from "@/components/About";
import Contact from "@/components/Contact";
import { HeroSection } from "@/components/HeroSection";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <HeroSection />

        <About />
        <Skill />
        <Project />
        <Contact />
      </div>
    </>
  );
}
