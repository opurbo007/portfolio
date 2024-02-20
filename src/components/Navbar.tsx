"use client";

import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
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
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div
          className={`flex flex-col sm:flex-row items-center justify-between ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="my-4 sm:my-0 mr-4 sm:mr-0">
            <h2>O~P</h2>
          </div>

          <div className="flex flex-col sm:flex-row items-center">
            <ul className="flex flex-col sm:flex-row">
              {menu.map((item, idx) => (
                <li key={idx} className="list-none p-3 sm:p-6">
                  <Link href={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4 sm:mt-0 sm:ml-4">
          <Button className="block sm:hidden" onClick={toggle}>
            {isOpen ? (
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
          </Button>
          <ModeToggle />
        </div>
      </div>
    </>
  );
};

export default Navbar;
