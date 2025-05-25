"use client";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="bg-primary-500 flex">
        {/* image contaienr */}
        <div className="w-1/2">
          <Image
            src="/assets/images/contact-hero-image.jpg"
            alt="contatc-hero"
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </div>
        {/* text-container */}
        <div className="w-1/2 py-32  text-center">
          <h1 className="text-[75px] title-font text-white capitalize">
            Lets get in Touch
          </h1>
          <p className="text-[20px] w-3/4 mx-auto text-white capitalize">
            We’d love to hear from you! Reach out for any inquiries or project
            assistance.
          </p>
          <div className="flex flex-col mx-auto w-1/2 mt-12 gap-6 ">
            <div className="flex gap-6  items-center">
              <div className="bg-white rounded-full p-4">
                <Image
                  src="/assets/icons/phone.svg"
                  alt="phone"
                  height={30}
                  width={30}
                />
              </div>

              <p className="text-[20px] text-white">+91 65478 29364</p>
            </div>
            <div className="flex gap-6  items-center">
              <div className="bg-white rounded-full p-4">
                <Image
                  src="/assets/icons/mail.svg"
                  alt="phone"
                  height={30}
                  width={30}
                />
              </div>

              <p className="text-[20px] text-white">sunindiarocks@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      {/* form section */}
      <section className="flex">
        {/* form container */}
        <div className="w-1/2 py-32 px-12  text-center">
          <h1 className="text-[55px] title-font uppercase">have a question?</h1>
          <p className="text-[20px] w-3/4 mx-auto text-white capitalize">
            We’d love to hear from you! Reach out for any inquiries or project
            assistance.
          </p>
          <form action="submit">
            <div className="grid grid-cols-2 gap-12">
              {/* name */}
              <div className="flex flex-col items-start">
                <label className="text-2xl" htmlFor="name">
                  Name
                </label>
                <input
                  className="border-b-2 border-[#B9B6B6] w-full focus:outline-none focus:ring-0"
                  id="name"
                  type="text"
                />
              </div>
              {/* email */}
              <div className="flex flex-col items-start">
                <label className="text-2xl" htmlFor="email">
                  Email
                </label>
                <input
                  className="border-b-2 border-[#B9B6B6] w-full focus:outline-none focus:ring-0"
                  id="email"
                  type="email"
                />
              </div>
              {/* phone */}
              <div className="flex flex-col items-start">
                <label className="text-2xl" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="border-b-2 border-[#B9B6B6] w-full focus:outline-none focus:ring-0"
                  id="phone"
                  type="number"
                />
              </div>
              {/* Country */}
              <div className="flex flex-col items-start">
                <label className="text-2xl" htmlFor="country">
                  Country
                </label>
                <input
                  className="border-b-2 border-[#B9B6B6] w-full focus:outline-none focus:ring-0"
                  id="country"
                  type="text"
                />
              </div>
            </div>
            <div></div>
            {/* inquiry */}
            <div className="flex py-12 flex-col items-start">
              <label className="text-2xl" htmlFor="inquiry">
                Inquiry Message
              </label>
              <textarea
                className="border-b-2 h-30 border-[#B9B6B6] w-full focus:outline-none focus:ring-0"
                id="inquiry"
                name="inquiry"
              />
            </div>
          </form>
        </div>
        {/* image contaienr */}
        <div className="w-1/2">
          <Image
            src="/assets/images/contact-hero-image.jpg"
            alt="contatc-hero"
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default page;
