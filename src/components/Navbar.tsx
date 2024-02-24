import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "../provider/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
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
      <div className="hidden md:flex justify-between items-center top-0 left-0 w-full sm:pt-6 sm:px-32">
        <div>
          <Link href={"/"}>
            <Image src={"/opurbo.jpg"} alt={"logo"} width={200} height={80} />
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <Menubar className=" ">
            {menu.map((item, idx) => (
              <MenubarMenu key={idx}>
                <Link href={item.path}>
                  <MenubarTrigger className="text-lg">
                    {item.title}
                  </MenubarTrigger>
                </Link>
              </MenubarMenu>
            ))}
          </Menubar>

          <ModeToggle />
        </div>
      </div>
      <div className="flex justify-between items-center top-0 left-0 w-full p-2 md:invisible">
        <div>
          <Link href={"/"}>
            <Image src={"/opurbo.jpg"} alt={"logo"} width={100} height={80} />
          </Link>
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
                <Link href={"/"}>
                  <Image
                    src={"/opurbo.jpg"}
                    alt={"logo"}
                    width={200}
                    height={100}
                  />
                </Link>
              </SheetTitle>

              <SheetDescription>
                <Menubar className="flex flex-col border-none ">
                  {menu.map((item, idx) => (
                    <MenubarMenu key={idx}>
                      <Link href={item.path} className="py-2">
                        <MenubarTrigger>{item.title}</MenubarTrigger>
                      </Link>
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
