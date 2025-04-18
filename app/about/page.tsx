import Link from "next/link";
import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="object-cover px-28 h-[650px]"
        style={{ backgroundImage: "url('/assets/images/hero-image.png')" }}
      >
        <div className="pt-48 w-[700px]">
          <h1 className=" text-light-900 h1-bold">
            Crafting Excellence, Shaping Dreams
          </h1>
          <p className="text-[18px] py-8 w-[640px] text-light-800">
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
    </div>
  );
};

export default Page;
