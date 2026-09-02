import { CheckCircle, Code2, DatabaseZap } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Skill = () => {
  const fontEnd = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Material UI",
    "Shadcn UI",
    "Tailwind CSS",
    "Bootstrap",
    "Aceternity UI",
    "Vue.js",
  ];
  const backEnd = [
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "Prisma ORM",
    "Sanity",
    "Stripe",
    "PHP",
    "Python",
    "Electron",
    "Git",
  ];
  return (
    <section className="h-full sm:h-[40rem] py-8">
      <div>
        <h2 className="flex items-center justify-center font-semibold text-4xl pb-16 tracking-[1rem]">
          SKILLS
        </h2>
      </div>
      <div className=" flex items-center justify-center sm:flex-row flex-col gap-4  ">
        <div>
          <Card className="w-[20rem] sm:w-[30rem]">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-4 ">
                <Code2 /> Front-End
              </CardTitle>
              <CardDescription className="grid sm:grid-cols-3 grid-cols-2 gap-8 py-4">
                {fontEnd.map((skill, index) => (
                  <span key={index} className="flex gap-2">
                    <CheckCircle />
                    {skill}
                  </span>
                ))}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div>
          <Card className="w-[20rem] sm:w-[30rem]">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-4">
                <DatabaseZap />
                <span className=""> Back-End</span>
              </CardTitle>
              <CardDescription className="grid sm:grid-cols-3 grid-cols-2 gap-8 py-4">
                {backEnd.map((skill, idx) => (
                  <span key={idx} className="flex gap-2">
                    <CheckCircle />
                    {skill}
                  </span>
                ))}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skill;