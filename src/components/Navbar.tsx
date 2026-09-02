"use client";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Image from "next/image";
import { ModeToggle } from "../provider/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const menu = [
  {
    title: "Home",
    target: "#home",
  },
  {
    title: "About",
    target: "#about",
  },
  {
    title: "Projects",
    target: "#projects",
  },
  {
    title: "Skills",
    target: "#skills",
  },
  {
    title: "Contact",
    target: "#contact",
  },
];

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <div className="hidden md:flex justify-between items-center top-0 left-0 w-full sm:pt-6 sm:px-32">
        <div>
          <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
            <Image src={"/opurbo.jpg"} alt={"logo"} width={200} height={80} />
          </a>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <Menubar className=" ">
            {menu.map((item, idx) => (
              <MenubarMenu key={idx}>
                <a href={item.target} onClick={(e) => handleScroll(e, item.target)}>
                  <MenubarTrigger className="text-lg">
                    {item.title}
                  </MenubarTrigger>
                </a>
              </MenubarMenu>
            ))}
          </Menubar>

          <ModeToggle />
        </div>
      </div>
      <div className="flex justify-between items-center top-0 left-0 w-full p-2 md:invisible">
        <div>
          <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
            <Image src={"/opurbo.jpg"} alt={"logo"} width={100} height={80} />
          </a>
        </div>
        <Sheet>
          <SheetTrigger className="absolute top-0 right-0 ">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="pt-6 flex items-center justify-center">
                <a href="#home" onClick={(e) => handleScroll(e, "#home")}>
                  <Image
                    src={"/opurbo.jpg"}
                    alt={"logo"}
                    width={200}
                    height={100}
                  />
                </a>
              </SheetTitle>

              <SheetDescription>
                <Menubar className="flex flex-col border-none ">
                  {menu.map((item, idx) => (
                    <MenubarMenu key={idx}>
                      <a
                        href={item.target}
                        onClick={(e) => handleScroll(e, item.target)}
                        className="py-2"
                      >
                        <MenubarTrigger>{item.title}</MenubarTrigger>
                      </a>
                    </MenubarMenu>
                  ))}
                  <span>
                    <ModeToggle />
                  </span>
                </Menubar>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Navbar;