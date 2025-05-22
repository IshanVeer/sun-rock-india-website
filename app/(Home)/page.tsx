"use client";
import {
  achievements,
  choosingQualities,
  partnersLogo,
  testimonials,
} from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* hero container */}
      <div className="bg-[url('/assets/images/hero-image.png')] bg-cover bg-center px-10 md:px-28 h-[700px] relative">
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative w-4/5 mx-auto text-center top-[35%] z-10">
          <h1 className="title-font mb-4 text-7xl leading-20 font-normal text-white capitalize">
            Innovating Granite Solutions Trusted Worldwide
          </h1>
          <Link
            className="inline-flex px-5 py-2 hover:bg-primary-300 transition duration-150  bg-primary-500 text-white gap-2 justify-center items-center"
            href="/products"
          >
            <p>View Products</p>{" "}
            <Image
              src="/assets/icons/chevron-right.svg"
              alt="right"
              height={20}
              width={20}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
