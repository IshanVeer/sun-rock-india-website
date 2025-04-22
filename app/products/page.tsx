import ProductShowcase from "@/components/products/ProductShowcase";
import { buildData } from "@/constants";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url('/assets/images/product-hero-image.jpeg')] bg-cover bg-center px-10 md:px-28 h-[650px] ">
        <div className="pt-48 md:w-[700px] ">
          <h1 className=" text-light-900 h1-bold">
            Discover our Granite Collection{" "}
          </h1>
          <p className="text-[18px] py-8 md:w-[640px]  text-light-800">
            Explore premium granite and natural stones, expertly crafted for
            durability, elegance, and timeless style to enhance every space.{" "}
          </p>
          <div className="flex gap-8">
            <div className="bg-light-800 transition duration-150 hover:bg-light-700 font-medium inline-block px-4 py-2 rounded-lg">
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
      {/* make your own */}
      <section className="px-10 md:px-28 bg-light-900 py-20">
        <div className="md:flex items-center gap-12 justify-between">
          <div className="md:w-1/2">
            <h2 className="h2-bold text-dark-100">Make your Own</h2>
            <p className="my-4 text-light-600">
              Customize your granite slab with your choice of colors, finishes,
              and sizes. We craft each piece to match your unique vision with
              precision and care.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col text-center gap-3">
            <ul className="max-md:mt-16 text-dark-100">
              {buildData.map((build) => (
                <li
                  className="px-12 max-sm:px-4 flex items-center justify-between rounded-2xl py-4 odd:bg-[#E7EBED] even:bg-light-900 "
                  key={build.id}
                >
                  <p className="font-medium">{build.label}</p>
                  <p>{build.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      {/* description */}
      <section
        className="object-cover px-10 md:px-28  "
        style={{
          backgroundImage: "url('/assets/images/hero-image.png')",
        }}
      >
        <div className="py-30  text-light-900 flex flex-col gap-12 md:w-[700px] ">
          <div>
            <h1 className=" text-light-900 my-4 h1-bold">Our Products </h1>
            <h2 className="text-4xl font-medium text-light-700">
              From Earth to Elegance
            </h2>
          </div>

          <p className="text-[18px] py-8 md:w-[840px] ">
            Every granite slab has a story, and at Sun India Rocks, we bring
            that story to life. It begins deep within nature, where raw stone is
            sourced from the finest quarries. Through meticulous craftsmanship
            and cutting-edge technology, each slab undergoes a
            transformation—from raw beauty to polished perfection. Our skilled
            artisans ensure every detail reflects precision and artistry,
            delivering granite that embodies durability, elegance, and timeless
            appeal.{" "}
          </p>
        </div>
      </section>
      {/* product catalogue */}
      <section className="px-10  md:px-28 bg-[#E7EBED] py-20">
        <ProductShowcase />
      </section>
    </div>
  );
};

export default page;
