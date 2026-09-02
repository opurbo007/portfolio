import { Briefcase, GraduationCap, MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { getExperienceDuration } from "@/utils/experience";

const About = () => {
  const duration = getExperienceDuration();
  return (
    <div className="h-full py-8">
      <div>
        <h2 className="flex items-center justify-center font-semibold text-4xl pb-16 tracking-[0.7rem]">
          ABOUT ME
        </h2>
      </div>
      <div>
        <div className="px-4 sm:px-20 flex flex-col sm:flex-row items-center justify-center gap-10">
          <div>
            <Image
              src={"/avatar.jpg"}
              height={300}
              width={300}
              alt="Profile"
              className="border rounded-3xl object-cover h-64 w-64 sm:h-72 sm:w-72"
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
                    <Briefcase />
                    <CardTitle>Experience </CardTitle>
                    <CardDescription>
                      <span className="font-semibold">Full-Stack Developer</span>
                      <br />
                      {`Techy's World Ltd · May 2024 - Present`}
                      <br />
                      <span className="text-neutral-500 dark:text-neutral-400">
                        Nottingham, UK
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
            <div className="py-4">
              <Separator />
              <div className="w-[20rem] sm:w-[45rem] px-2 py-2 border-none bg-transparent">
                <CardDescription>
                  {`A passionate full-stack web developer based in Nottingham, UK, specializing in the MERN stack, Next.js, and modern web technologies. I love building practical, user-friendly applications — from e-commerce and dashboards to AI-powered tools and PWAs. I have been working professionally for `}
                  <span className="font-semibold text-black dark:text-white">
                    {duration}
                  </span>
                  {` and counting.`}
                </CardDescription>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-600 dark:text-neutral-300 px-2">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Nottingham, UK
              </span>
              <a href="mailto:opu.pal.dev@gmail.com" className="inline-flex items-center gap-1.5 hover:underline">
                <Mail className="h-3.5 w-3.5" />
                opu.pal.dev@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
