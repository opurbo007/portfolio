import Image from "next/image";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Project = () => {
  const projectData = [
    {
      name: "Portfolio",
      git: "https://github.com/opurbo007/portfolio",
      live: "https://portfolio.vercel.app/",
      imagePath: "/project1.png",
    },
    {
      name: "Qoo-Media",
      git: "https://github.com/opurbo007/Qoo-media",
      live: "https://qoo-media.vercel.app/",
      imagePath: "/project2.png",
    },
    {
      name: "Weather App ",
      git: "https://github.com/opurbo007/Weather-With-VUE-JS",
      live: "https://weather000.netlify.app/",
      imagePath: "/project3.png",
    },
  ];

  return (
    <section className="h-full sm:h-[40rem] py-8">
      <div>
        <h2 className="flex items-center justify-center font-semibold text-4xl pb-16 tracking-[0.7rem]">
          PROJECTS
        </h2>
      </div>
      <div className=" flex items-center justify-center sm:flex-row flex-col gap-4">
        <div>
          <div className=" flex sm:flex-row flex-col gap-4 sm:gap-16">
            {projectData.map((item, idx) => (
              <div key={idx}>
                <Card className="w-[20rem]">
                  <CardHeader>
                    <CardTitle className="pb-4 text-center">
                      {item.name}{" "}
                    </CardTitle>
                    <CardDescription>
                      <Image
                        src={item.imagePath}
                        alt={"Project"}
                        height={250}
                        width={250}
                      />
                    </CardDescription>
                  </CardHeader>
                  <div className="flex justify-between flex-row space-y-0 space-x-4 my-4 mx-2 ">
                    <Link
                      href={item.git}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-28 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                        GitHub
                      </button>
                    </Link>
                    <Link
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="w-28 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                        Live Demo
                      </button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
