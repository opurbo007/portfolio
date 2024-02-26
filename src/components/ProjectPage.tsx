"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface Project {
  _id: string;
  name: string;
  imagePath: string;
  description: string;
  git: string;
  live: string;
}

export function ProjectPage() {
  const [project, setProject] = useState<Project[]>([]);

  const getProject = async () => {
    try {
      const res = await axios.get("/api/project");
      setProject(res.data.projectData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {project?.map((project) => (
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
