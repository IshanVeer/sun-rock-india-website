"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <nav className="absolute md:hidden flex items-center justify-between px-10 my-8 text-light-900 w-full z-10">
      <Link className="flex items-center gap-4" href="/">
        <Image
          src="/assets/images/pexels-romanp-17845.jpg"
          alt="logo"
          width={40}
          height={40}
          className="w-10 h-10 rounded-[100%] object-cover"
        />
        <h2 className=" h3-bold max-lg:h4-bold">SUN INDIA ROCKS</h2>
      </Link>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/assets/icons/hamburger.svg"
            alt="menu"
            height={40}
            width={40}
          />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-4">
              <Image
                src="/assets/images/pexels-romanp-17845.jpg"
                alt="logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-[100%] object-cover"
              />
              <p className=" h3-bold max-lg:h4-bold">SUN INDIA ROCKS</p>
            </SheetTitle>
          </SheetHeader>
          <ul className="px-6 py-8  flex flex-col border-b gap-4 border-neutral-500">
            {navLinks.map((link) => (
              <li
                className={`${
                  pathname === link.route ? "bg-light-700" : ""
                } px-8 py-2 rounded-sm h3-bold max-xl:px-2    hover:border-b-2 hover:border-light-900 `}
                key={link.route}
              >
                <Link href={link.route}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div>
            <button className="mx-6 bg-dark-100 text-light-900  py-2 px-4 gap-2 flex items-center cursor-pointer rounded-lg ">
              Catalogue
              <Image
                src="/assets/icons/download.svg"
                alt="download"
                width={30}
                height={30}
              />
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
