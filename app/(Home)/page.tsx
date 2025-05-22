"use client";
import {
  achievements,
  choosingQualities,
  partnersLogo,
  profilePictures,
  testimonials,
} from "@/constants";
import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* hero container */}
      <div className="bg-[url('/assets/images/hero-image.png')] bg-cover bg-center px-10 md:px-28 h-[700px] relative">
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative  mx-auto text-center top-[35%] z-10">
          <h1 className="title-font w-4/5 mx-auto mb-4 text-7xl leading-20 font-normal text-white capitalize">
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
          <div className="flex w-full  items-end absolute top-86 justify-between">
            <p className="title-font font-normal text-white w-1/3">
              We specialize in granite manufacturing and export, delivering top
              quality products and clients worldwide
            </p>
            <div className="flex backdrop-blur-md bg-white/10 border border-white/20 px-10 py-4 gap-4 rounded-l-lg border-r-0 items-center">
              <div className="flex">
                {profilePictures.map((img) => (
                  <div className="flex -ml-4" key={img.id}>
                    <Image
                      src={img.imgUrl}
                      alt={img.name}
                      height={1000}
                      width={1000}
                      className="w-12 h-12 border-2 border-yellow-200 object-cover rounded-[100%]"
                    />{" "}
                  </div>
                ))}
              </div>

              <p className="font-semibold title-font text-[22px] text-white">
                2K+ clients served
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
