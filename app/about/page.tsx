"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[650px] px-10 md:px-20 overflow-hidden">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[url('/assets/images/about-hero-image.jpg')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/60 to-transparent"></div>
        </div>

        {/* Foreground Content */}
        <div className="pt-48 relative z-10 md:w-[700px] text-white">
          <h1 className="title-font text-[75px] font-normal leading-24">
            Crafting Excellence, Shaping Dreams
          </h1>
          <p className="text-[20px] py-4  md:w-[540px]">
            Delivering premium granite solutions with a legacy of craftsmanship,
            innovation, and global trust.
          </p>
        </div>
      </section>
      {/* Impact section */}
      <div className="flex md:px-20 pt-28 justify-between">
        <h2 className="title-font w-1/3 leading-16 text-[55px] font-light">
          Our Impact in Numbers
        </h2>
        <div className="title-font">
          <h3 className="text-[55px] font-light">500+</h3>
          <p className="text-[20px]"> Projects Completed</p>
        </div>
        <div className="title-font">
          <h3 className="text-[55px] font-light">200+</h3>
          <p className="text-[20px]">Satisfied Clients</p>
        </div>
      </div>
      <section className="flex px-8 md:px-20 pt-28 pb-48">
        <p className="absolute uppercase -translate-y-1/2 origin-left left-12 rotate-90 title-font font-semibold text-[#696868]">
          . About Us
        </p>
        <div>
          <div className="flex pl-12 border-l-2 border-[#B9B6B6] relative justify-between">
            <div className="w-3/5">
              <Image
                src="/assets/images/about-us-image.jpg"
                alt="about-image-1"
                height={1000}
                width={1000}
                className="object-cover w-full h-full"
              />
            </div>
            {/* text container */}
            <div className="w-2/6 relative ">
              <h2 className="title-font mb-16  z-50  uppercase font-light text-[55px] leading-16">
                Tradition Meets Stone Innovation
              </h2>
              <p className="text-[20px] leading-8  mb-6">
                At Sun Rock India, we specialize in premium stone craftsmanship
                that brings natural elegance to every space. With years of
                experience, we deliver durable and beautiful stone solutions
                tailored to your needs. At Sun Rock India, we specialize in
                premium stone craftsmanship that brings natural elegance to
                every space.
              </p>
              <div className="px-12 absolute top-105 -left-86 font-light py-10 text-white bg-primary-500 inline-block">
                <h2 className="text-[55px]  title-font ">20+</h2>
                <p className="text-2xl ">years of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Steps to excellence */}
      <section className="bg-primary-500 md:px-16 py-28">
        <div className="text-center">
          <h3 className="text-[45px] text-white font-light title-font uppercase">
            Our 4 Steps to Excellence
          </h3>
        </div>
        <div className="flex mt-12 mb-4 gap-8">
          <div className="flex w-[80%] h-[485px] gap-18 items-center bg-white">
            <video
              className="w-1/2 h-full object-cover"
              autoPlay
              muted
              playsInline
            >
              <source
                src="/assets/videos/steps-to-excellence-manufacturing.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <div className="w-1/2">
              <h2 className="text-4xl  mb-12 uppercase title-font ">
                Precision Manufacturing for Lasting Quality
              </h2>
              <p className="text-[20px]">
                We aim to deliver premium-quality stone solutions that blend
                timeless elegance with lasting durability, enhancing spaces
                across India and beyond.
              </p>
            </div>
          </div>
          <div className="w-[20%]">
            <video className=" h-full object-cover" autoPlay muted playsInline>
              <source
                src="/assets/videos/steps-to-excellence-2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="border-t-4 py-4 mt-16">
          <ul className="text-white flex justify-between items-center">
            <li className="text-[20px] font-semibold title-font uppercase">
              Manufacturing
            </li>
            <li className="text-[20px] font-semibold title-font uppercase">
              Quality
            </li>
            <li className="text-[20px] font-semibold title-font uppercase">
              packing
            </li>
            <li className="text-[20px] font-semibold title-font uppercase">
              Delivery
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page;
