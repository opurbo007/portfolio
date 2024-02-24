import { Copyright } from "lucide-react";
import { Separator } from "./ui/separator";

const Footer = () => {
  const menu = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Projects",
      path: "/project",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <div className="">
        <div className="flex flex-col justify-center items-center space-y-4 text-sm">
          <div className="flex justify-center items-center space-x-4 tracking-[0.2rem]">
            <div className="text-center">
              Opu Pal | opupal07@gmail.com | +8801920172104{" "}
            </div>
          </div>
          <Separator className="w-3/4 mx-auto" />
          <div className="text-center">
            <h4 className="text-sm font-medium leading-none flex justify-center items-center">
              <Copyright /> All Rights Reserved to Opu Pal - 2024
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
