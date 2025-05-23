"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav
      className={`absolute max-md:hidden  px-20 w-full z-10 justify-between my-8 flex ${
        pathname === "/contact" ? "text-dark-100" : "text-light-900"
      }`}
    >
      {/* logo */}

      <Link className="flex items-center gap-4" href="/">
        <Image
          src="/assets/images/logo.jpg"
          alt="logo"
          width={40}
          height={40}
          className="w-10 h-10 rounded-[100%] object-cover"
        />
        <h2 className=" h3-bold max-lg:h4-bold">SUN INDIA ROCKS</h2>
      </Link>

      {/* navbar */}
      <ul className="flex h3-medium gap-2 ">
        {navLinks.map((link) => (
          <li
            className={`${
              pathname === link.route && pathname === "/contact"
                ? "border-b-2 border-dark-100 "
                : pathname === link.route
                ? "border-b-2 border-light-900"
                : ""
            } px-6 py-3 max-xl:px-2    hover:border-b-2 hover:border-light-900 `}
            key={link.route}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* catalogue button */}
      <button
        className={`${
          pathname === "/contact"
            ? "bg-black text-white"
            : pathname === "/"
            ? "bg-neutral-800"
            : pathname === "/about"
            ? "bg-primary-500"
            : ""
        } py-1.5 uppercase title-font  px-5 gap-2 flex items-center cursor-pointer `}
      >
        View Catalogue
        <Image
          src="/assets/icons/download.svg"
          alt="download"
          width={30}
          height={30}
        />
      </button>
    </nav>
  );
};

export default NavBar;
