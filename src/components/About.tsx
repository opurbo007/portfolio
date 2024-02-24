import { Code2, GraduationCap } from "lucide-react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";

const About = () => {
  return (
    <div className="h-full sm:h-[40rem]  ">
      <div>
        <h2 className="flex items-center justify-center font-semibold text-4xl pb-16 tracking-[0.7rem]">
          ABOUT ME
        </h2>
      </div>
      <div>
        <div className="px-2 sm:px-20 flex flex-col sm:flex-row items-center justify-center gap-10">
          <div className="">
            <Image
              src={"/me.jpg"}
              height={500}
              width={500}
              alt="Profile"
              className="border rounded-3xl"
            />
          </div>
          <div>
            <div className=" flex sm:flex-row flex-col gap-4">
              <div>
                <Card className="w-[20rem]">
                  <CardHeader>
                    <GraduationCap />
                    <CardTitle className="pb-4">Education </CardTitle>
                    <CardDescription>
                      B.sc. In CSE, <br /> Dhaka International University
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
                      "Experienced coder ready to transition to the industry for
                      practical application and professional growth."
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
            <div className="py-4">
              <Separator />
              <div className="w-[22rem] sm:w-[45rem] px-2 py-2 border-none bg-transparent">
                <CardDescription>
                  "Fullstack Web Developer skilled in HTML, CSS, JavaScript,
                  PHP, ReactJS, Node.js, MongoDB, MySQL, and more. Contributed
                  to diverse projects including e-commerce, blogs, and social
                  media dashboards. Eager to advance with new technologies and
                  elevate web development career."
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
