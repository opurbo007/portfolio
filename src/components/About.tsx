import { Code2, GraduationCap } from "lucide-react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const About = () => {
  return (
    <div className="h-full sm:h-[40rem]">
      <div>
        <h2 className="flex items-center justify-center font-semibold text-4xl pb-16 tracking-[0.7rem]">
          ABOUT ME
        </h2>
      </div>
      <div>
        <div className="px-4 sm:px-20 flex flex-col sm:flex-row items-center justify-center gap-10">
          <div>
            <Image
              src={"/me.jpg"}
              height={450}
              width={450}
              alt="Profile"
              className="border rounded-3xl"
            />
          </div>
          <div>
            <div className="flex sm:flex-row flex-col gap-4">
              <div>
                <Card className="w-[20rem]">
                  <CardHeader>
                    <GraduationCap />
                    <CardTitle className="pb-4">Education </CardTitle>
                    <CardDescription>
                      {`B.sc. In CSE,`}
                      <br />
                      {`Dhaka International University`}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div>
                <Card className="w-[20rem] ">
                  <CardHeader>
                    <Code2 />
                    <CardTitle>Experience </CardTitle>
                    <CardDescription>
                      {`Full-Stack Developer at Tachy's since May 2024, building and maintaining production web applications with Next.js, React, Node.js, MongoDB, and PostgreSQL.`}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
            <div className="py-4">
              <Separator />
              <div className="w-[20rem] sm:w-[45rem] px-2 py-2 border-none bg-transparent">
                <CardDescription>
                  {`A passionate full-stack web developer based in Nottingham, UK, specializing in the MERN stack, Next.js, and modern web technologies. I love building practical, user-friendly applications — from e-commerce and dashboards to AI-powered tools and PWAs.`}
                </CardDescription>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
