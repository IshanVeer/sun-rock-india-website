import Link from "next/link";
import React from "react";
import Image from "next/image";
import { excellence } from "@/constants";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="object-cover px-20 md:px-28  h-[650px]"
        style={{
          backgroundImage: "url('/assets/images/about-hero-image.png')",
        }}
      >
        <div className="pt-48 w-[700px] max-md:w-[580px]">
          <h1 className=" text-light-900 h1-bold">
            Crafting Excellence, Shaping Dreams{" "}
          </h1>
          <p className="text-[18px] py-8 w-[640px] max-md:w-[520px] text-light-800">
            Delivering premium granite solutions with a legacy of craftsmanship,
            innovation, and global trust.{" "}
          </p>
          <div className="flex gap-8">
            <div className="bg-light-800 transition duration-150 hover:bg-light-700 font-medium inline-block px-4 py-2 rounded-lg">
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
      </section>
      {/* our story */}
      <section className="px-20 md:px-28 bg-light-900 py-20">
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
                <h3 className="text-[20px] font-bold text-dark-100">
                  {testimonial.name}
                </h3>

                <p className="base-regular text-light-600 my-4 leading-6">
                  {testimonial.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Page;
