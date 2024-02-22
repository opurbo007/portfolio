"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ButtonsCard } from "./ui/tailwindcss-buttons";

const Navbar = () => {
  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  const [navClick, setNavClick] = useState(false);
  const toggleNavbar = () => {
    setNavClick(!navClick);
  };

  return (
    <>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-2 py-2 pt-4 sm:pt-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white ">
                  <Image
                    src={"/logo.png"}
                    alt={"logo"}
                    height={70}
                    width={70}
                    className="rounded-full"
                  />
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                {menu.map((item, idx) => (
                  <Link href={item.link} key={idx}>
                    <ButtonsCard>
                      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-lg p-px font-semibold leading-6  text-white text-lg inline-block">
                        <span className="absolute inset-0 overflow-hidden rounded-lg">
                          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-lg bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
                          <span> {item.name}</span>
                        </div>
                        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                      </button>
                    </ButtonsCard>
                    {/* <ButtonsCard>
                      <button className="p-[3px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                          {item.name}
                        </div>
                      </button>
                    </ButtonsCard> */}
                    {/* <ButtonsCard>
                      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        {item.name}
                      </button>
                    </ButtonsCard> */}
                  </Link>
                ))}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md  text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {navClick ? (
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                )}
              </button>
            </div>
          </div>
        </div>
        {navClick && (
          <div className="md:hidden ">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              {menu.map((item, idx) => (
                <Link
                  href={item.link}
                  key={idx}
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2 block"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
