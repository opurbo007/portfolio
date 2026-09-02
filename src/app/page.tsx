import { HeroSection } from "@/components/HeroSection";
import About from "@/components/About";
import Skill from "@/components/Skill";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skill />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}