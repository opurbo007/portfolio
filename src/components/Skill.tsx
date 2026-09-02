import { CheckCircle, Code2, DatabaseZap, ServerCog, Wrench } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const frontend = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Bootstrap",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
];

const backend = [
  "Node.js",
  "Express.js",
  "Next.js API Routes",
  "Next.js Server Actions",
  "NestJS",
];

const databases = ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Redis"];

const tools = [
  "Electron",
  "WebSocket",
  "NextAuth",
  "Prisma",
  "REST APIs",
  "CI/CD",
  "Docker",
  "Offline-first & multi-tenant app design",
];

const Skill = () => {
  return (
    <section className="h-full sm:h-[40rem] py-8">
      <div>
        <h2 className="flex items-center justify-center font-semibold text-4xl pb-16 tracking-[1rem]">
          SKILLS
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 px-4 max-w-5xl mx-auto">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Code2 className="h-5 w-5" /> Frontend
            </CardTitle>
            <CardDescription className="grid sm:grid-cols-2 grid-cols-2 gap-x-6 gap-y-3 py-4 px-2">
              {frontend.map((skill, index) => (
                <span key={index} className="flex gap-2 items-center">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  {skill}
                </span>
              ))}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <ServerCog className="h-5 w-5" /> Backend
            </CardTitle>
            <CardDescription className="grid sm:grid-cols-2 grid-cols-2 gap-x-6 gap-y-3 py-4 px-2">
              {backend.map((skill, idx) => (
                <span key={idx} className="flex gap-2 items-center">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  {skill}
                </span>
              ))}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <DatabaseZap className="h-5 w-5" /> Databases
            </CardTitle>
            <CardDescription className="grid sm:grid-cols-2 grid-cols-2 gap-x-6 gap-y-3 py-4 px-2">
              {databases.map((skill, idx) => (
                <span key={idx} className="flex gap-2 items-center">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  {skill}
                </span>
              ))}
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center justify-center gap-2">
              <Wrench className="h-5 w-5" /> Tools & Practices
            </CardTitle>
            <CardDescription className="grid sm:grid-cols-2 grid-cols-2 gap-x-6 gap-y-3 py-4 px-2">
              {tools.map((skill, idx) => (
                <span key={idx} className="flex gap-2 items-center">
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  {skill}
                </span>
              ))}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
};

export default Skill;