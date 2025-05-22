"use client";
import Link from "next/link";
import React from "react";

import { navLinks, socialLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="px-10 relative overflow-hidden  md:px-16 py-20 flex justify-between items-start bg-primary-500 text-white">
      {/* info container */}
      <div className="flex w-1/4 flex-col gap-16">
        <h1 className="title-font uppercase h1-light font-light">
          lets work together
        </h1>
        <div className="title-font h3-regular flex flex-col gap-8">
          <p>+91 65478 29364</p>
          <p>sunindiarocks@gmail.com</p>
          <p className="leading-8">
            Sun Rock India123 Industrial Estate, NH-4Makrana Road, Kishangarh –
            305801 Rajasthan, India
          </p>
        </div>
      </div>
      {/* link container */}
      <div className="flex mt-6 gap-16">
        {/* nav links */}
        <div className="flex flex-col gap-6">
          <h2 className="title-font text-2xl font-normal uppercase">
            Quick Links
          </h2>
          <ul className="flex flex-col gap-4 h3-regular">
            {navLinks.map((link) => (
              <li key={link.route}>
                <Link href={link.route}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* social links */}
        <div className="flex flex-col gap-6">
          <h2 className="title-font text-2xl font-normal uppercase">
            Social Links
          </h2>
          <ul className="flex capitalize flex-col gap-4 h3-regular">
            {socialLinks.map((link) => (
              <li key={link.route}>
                <Link href={link.route}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Logo */}
      <div className="relative">
        <h1 className="title-font absolute top-10 -right-28 text-[400px] font-semibold z-0">
          S
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
