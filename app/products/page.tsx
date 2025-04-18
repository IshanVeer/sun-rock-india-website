import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="object-cover px-28 h-[650px]"
        style={{ backgroundImage: "url('/assets/images/hero-image.png')" }}
      >
        <div className="pt-48 w-[700px]">
          <h1 className=" text-light-900 h1-bold">
            Discover our Granite Collection
          </h1>
          <p className="text-[18px] py-8 w-[640px] text-light-800">
            Explore premium granite and natural stones, expertly crafted for
            durability, elegance, and timeless style to enhance every space.
          </p>
          <div className="flex gap-8">
            <div className="bg-light-800 transition duration-150 hover:bg-light-700 font-medium inline-block px-4 py-2 rounded-lg">
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
