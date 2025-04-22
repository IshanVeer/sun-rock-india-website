import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <section className="px-10 md:px-28 bg-light-900 py-20">
      <div className="pt-30 sm:flex items-center">
        <div className="flex sm:w-1/2 flex-col gap-6">
          <h1 className="h1-bold">Lets get in Touch</h1>
          <p>
            We’d love to hear from you! Reach out for any inquiries or project
            assistance, and let’s discuss how Sun India Rocks can provide the
            perfect granite solutions for your needs.
          </p>
          <div className="flex">
            <Image
              src="/assets/icons/phone.svg"
              alt="call"
              height={50}
              width={50}
            />
            <div>
              <p>+91 65478 29364</p>
              <p>sunindiarocks@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="sm:w-1/2 mt-8 rounded-lg p-8 px-8 bg-[#E7EBED]">
          <form className="flex  flex-col gap-8" action="submit">
            <div className="flex flex-col gap-2">
              {/* name */}
              <label className="text-dark-100 h4-bold" htmlFor="name">
                Name
              </label>
              <input
                className="w-full rounded-md p-1.5 bg-light-900"
                id="name"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="h4-bold text-dark-100" htmlFor="number">
                Phone Number
              </label>
              <input
                id="number"
                className="w-full rounded-md p-1.5 bg-light-900"
                type="number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="h4-bold  text-dark-100" htmlFor="email">
                Email
              </label>
              <input
                className="w-full rounded-md p-1.5 bg-light-900"
                id="email"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="h4-bold  text-dark-100" htmlFor="message">
                Message
              </label>{" "}
              <textarea
                className="w-full rounded-md bg-light-900"
                rows={4}
                id="message"
              />
            </div>
            <button className="bg-[#047C7C] rounded-md text-light-900 h4-bold w-full px-4 py-2">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
