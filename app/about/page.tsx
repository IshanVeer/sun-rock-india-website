"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  excellence,
  manufacturingExcellence,
  stepsToExcellence,
} from "@/constants";

const Page = () => {
  const MotionSection = motion.section;
  return (
    <div>
      {/* Hero Section */}
      <MotionSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[url('/assets/images/about-hero-image.png')] bg-cover bg-center px-10 md:px-28 h-[650px] "
      >
        <div className="pt-48 md:w-[700px] ">
          <h1 className=" text-light-900 h1-bold">
            Crafting Excellence, Shaping Dreams{" "}
          </h1>
          <p className="text-[18px] py-8 md:w-[640px]  text-light-800">
            Delivering premium granite solutions with a legacy of craftsmanship,
            innovation, and global trust.{" "}
          </p>
          <div className="flex max-sm:flex-col gap-8">
            <div className="bg-light-800 transition duration-150 hover:bg-light-700 font-medium inline-block w-max px-4 py-2 rounded-lg">
              <Link href="/contact">Contact Us</Link>
            </div>
            <div className="flex hover:border-b-2 transition duration-150 border-light-900 font-medium items-center gap-3 text-light-900">
              <Link href="/products">See our Products</Link>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="right"
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
      </MotionSection>
      {/* our story */}
      <MotionSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-10 md:px-28 bg-light-900 py-20"
      >
        <div>
          <div className="md:flex mt-8 mb-16 items-end gap-24">
            <h2 className="md:w-2/5 h2-bold max-md:mb-4  text-dark-100">
              Our Story of Excellence
            </h2>
            <p className="text-light-600 md:w-3/4">
              At Sun India Rocks, we pride ourselves on excellence, combining
              advanced technology and skilled craftsmanship to create
              top-quality granite products. From raw material selection to final
              touches, we ensure every piece reflects our commitment to quality
              and client satisfaction.
              <br /> Offering stunning countertops, elegant flooring, and
              bespoke architectural elements, our diverse portfolio caters to
              both residential and commercial needs with durability and timeless
              elegance.
            </p>
          </div>
          <ul className="md:flex max-md:mt-8  gap-4">
            {excellence.map((testimonial) => (
              <li className=" max-md:my-4  " key={testimonial.id}>
                <Image
                  src={testimonial.imgUrl}
                  alt={testimonial.name}
                  height={50}
                  width={50}
                />
                <h3 className="text-[20px] my-3 font-bold text-dark-100">
                  {testimonial.name}
                </h3>

                <p className="base-regular text-light-600 my-4 leading-6">
                  {testimonial.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>
      {/* journey */}
      <MotionSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-10 md:px-28 bg-[#E7EBED] py-20"
      >
        <div className="md:flex items-center gap-20 ">
          {/* content */}
          <div className="md:w-3/5">
            <h2 className=" h2-bold  mb-8 text-dark-100">
              Journey Behind Our Success
            </h2>
            <p className="text-light-600 ">
              Founded in 2000 as a modest granite tile company, Sun India Rocks
              has evolved into a global leader in granite solutions. Over two
              decades, we&apos;ve expanded to eight state-of-the-art factories,
              setting industry benchmarks with our commitment to quality and
              innovation. Now, serving over 120 clients across 15+ countries, we
              continue to be a trusted supplier, delivering the finest granite
              with precision and passion. Join us as we redefine excellence in
              the granite industry.
            </p>
          </div>
          {/* image gallery */}
          <div className="grid gap-2 aspect-square grid-cols-3 md:w-2/5 h-full max-md:mt-6">
            <Image
              className="col-span-2 rounded-xl object-cover row-span-2 h-full w-full"
              src="/assets/images/journey-1.jpeg"
              alt="gallery-image-1"
              width={500}
              height={500}
            />
            <Image
              className="object-cover h-full rounded-xl w-full"
              src="/assets/images/journey-2.jpeg"
              alt="gallery-image-2"
              width={500}
              height={500}
            />
            <Image
              className="row-span-2  rounded-xl object-cover h-full w-full"
              src="/assets/images/journey-3.jpeg"
              alt="gallery-image-3"
              width={500}
              height={500}
            />
            <Image
              className="w-full rounded-xl h-full object-cover"
              src="/assets/images/journey-4.jpeg"
              alt="gallery-image-4"
              width={500}
              height={500}
            />
            <Image
              className="object-cover h-full rounded-xl  w-full"
              src="/assets/images/journey-5.jpeg"
              alt="gallery-image-5"
              width={500}
              height={500}
            />
          </div>
        </div>
      </MotionSection>
      {/* steps to excellence */}
      <MotionSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-10 md:px-28 bg-light-900 py-20"
      >
        <div className="md:flex items-center gap-20 justify-between">
          <div className="md:w-1/3">
            <h2 className="h2-bold text-dark-100">Our 4 Steps to Excellence</h2>
            <p className="my-4 text-light-600">
              Our four-step approach to business excellence ensures we
              consistently deliver high-quality granite solutions. By focusing
              on innovation, quality, efficiency, and customer satisfaction, we
              strive to exceed expectations at every stage.
            </p>
          </div>

          <ul className="md:w-2/3 md:grid grid-cols-2 max-md:mt-8  gap-4">
            {stepsToExcellence.map((testimonial) => (
              <li className="max-sm:my-2 " key={testimonial.id}>
                <Image
                  src={testimonial.imgUrl}
                  alt={testimonial.name}
                  height={50}
                  width={50}
                />
                <h3 className="text-[20px] my-3 font-bold text-dark-100">
                  {testimonial.name}
                </h3>

                <p className="base-regular text-light-600 my-4 leading-6">
                  {testimonial.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>
      {/* manufacturing MotionSection  */}
      <MotionSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-10 md:px-28 items-center bg-[#E7EBED] py-28"
      >
        <h2 className="h2-bold  my-4 col-span-2  text-dark-100 md:hidden">
          Excellence in Manufacturing & Export
        </h2>
        <ul className="md:grid grid-cols-4 gap-4  ">
          <h2 className="h2-bold  mt-4 col-span-2  text-dark-100 max-md:hidden">
            Excellence in Manufacturing & Export
          </h2>
          {manufacturingExcellence.map((manufacturing) => (
            <li
              className="bg-light-900 max-sm:my-4 flex flex-col gap-3 rounded-xl h4-bold text-light-600 px-8 py-4"
              key={manufacturing.id}
            >
              <Image
                src={manufacturing.imgUrl}
                alt={manufacturing.name}
                height={100}
                width={100}
                className="max-sm:w-20"
              />{" "}
              <h3>{manufacturing.name}</h3>
            </li>
          ))}
        </ul>
      </MotionSection>
    </div>
  );
};

export default Page;
