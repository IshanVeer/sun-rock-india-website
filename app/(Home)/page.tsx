"use client";
import {
  achievements,
  choosingQualities,
  partnersLogo,
  profilePictures,
  testimonials,
} from "@/constants";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* hero container */}
      <section className="bg-[url('/assets/images/hero-image.png')] bg-cover bg-center px-10 md:px-20 h-[700px] relative">
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
      </section>
      {/* about section */}
      <section className="flex px-8 md:px-20 py-28">
        <p className="absolute uppercase -translate-y-1/2 origin-left left-12 rotate-90 title-font font-semibold text-[#696868]">
          . who are we
        </p>
        <div className="flex pl-12 border-l-2 border-[#B9B6B6] relative justify-between">
          {/* text container */}
          <div className="w-2/6 ">
            <h2 className="title-font w-1/3 -top-3 left-67 mb-28 absolute z-50  uppercase font-light text-[55px] leading-16">
              Tradition Meets Stone Innovation
            </h2>
            <p className="text-[20px] leading-8 mt-72 mb-6">
              At Sun Rock India, we specialize in premium stone craftsmanship
              that brings natural elegance to every space. With years of
              experience, we deliver durable and beautiful stone solutions
              tailored to your needs. At Sun Rock India, we specialize in
              premium stone craftsmanship that brings natural elegance to every
              space.
            </p>
            <Link
              className="inline-flex px-5 py-2 hover:bg-primary-300 transition duration-150  bg-primary-500 text-white gap-2 justify-center items-center"
              href="/products"
            >
              <p>Know More</p>{" "}
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="right"
                height={20}
                width={20}
              />
            </Link>
          </div>

          <div className="w-3/5 gap-4 flex">
            {/* image-1 */}
            <div className="w-1/2 relative">
              <Image
                src="/assets/images/about-img-1.jpg"
                alt="about-image-1"
                height={1000}
                width={1000}
                className="object-cover w-full h-full"
              />
              {/* white gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-transparent"></div>
            </div>
            {/* image-2 */}
            <Image
              src="/assets/images/about-img-2.jpg"
              alt="about-image-2"
              height={1000}
              width={1000}
              className="w-1/2 h-3/5 object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
