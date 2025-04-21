"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { navLinks, socialLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="px-28 py-8 mt-[48px] bg-dark-100 text-light-900">
      <div className="flex border-b-2 justify-between">
        {/* left container */}
        <div className="flex flex-col">
          {/* logo */}
          <Link className="flex items-center gap-4" href="/">
            <Image
              src="/assets/images/pexels-romanp-17845.jpg"
              alt="logo"
              width={40}
              height={40}
              className="w-10 h-10 rounded-[100%] object-cover"
            />
            <h2 className=" h3-bold">SUN INDIA ROCKS</h2>
          </Link>
          {/* socials */}
          <ul className="flex pl-15 my-2 items-center gap-4">
            {socialLinks.map((social) => (
              <li key={social.id}>
                <a href={social.route}>
                  <Image
                    src={social.imrUrl}
                    alt={social.label}
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="my-16 ">
            <h3 className="h4-bold my-4">GET IN TOUCH</h3>
            <p className="w-2/3 mb-3 body-regular">
              Ut lobortis consequat varius. Nunc erit hendrerit urna . Ut lortis
              consequat varius.
            </p>
            <div className="flex ">
              <input
                placeholder="EMAIL"
                className="bg-light-900 px-2 py-0.5 placeholder:text-black focus:none"
                type="email"
              />

              <Image
                className="bg-light-900"
                src="/assets/icons/right-arrow.svg"
                alt="email"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
        {/* right container */}
        <div>
          <ul className="flex border-b gap-2 border-neutral-500">
            {navLinks.map((link) => (
              <li
                className={`${
                  pathname === link.route ? "border-b-2 border-light-900" : ""
                } px-8   hover:border-b-2 hover:border-light-900 `}
                key={link.route}
              >
                <Link href={link.route}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-[96px] flex justify-center gap-16">
            <div>
              <h2 className="text-[14px] my-3 font-bold border-b-2 ">
                Contact
              </h2>
              <p>+91 65478 29364</p>
            </div>
            <div>
              <h2 className="text-[14px] my-3 font-bold border-b-2 ">Email</h2>
              <p>sunindiarocks@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-4 justify-between body-bold">
        <Link href="/">PRIVACY POLICY</Link>
        <Link href="/">COPYRIGHT INFORMATION</Link>
      </div>
    </div>
  );
};

export default Footer;
