import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="absolute text-light-900 px-28 w-full z-10 justify-between my-8 flex">
      {/* logo */}
      <div className="flex items-center gap-4">
        <Image
          src="/assets/images/pexels-romanp-17845.jpg"
          alt="logo"
          width={40}
          height={40}
          className="w-10 h-10 rounded-[100%] object-cover"
        />
        <h2 className=" h3-bold">SUN INDIA ROCKS</h2>
      </div>
      {/* navbar */}
      <ul className="flex border-b gap-2 border-neutral-500">
        {navLinks.map((link) => (
          <li
            className="px-8  hover:border-b-2 hover:border-light-900 "
            key={link.route}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* catalogue button */}
      <button>Catalogue</button>
    </nav>
  );
};

export default NavBar;
