"use client";
import {
  achievements,
  choosingQualities,
  partnersLogo,
  testimonials,
} from "@/constants";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const MotionSection = motion.section;
  return (
    <div>
      <Head>
        {/* Preload critical images */}
        <link rel="preload" href="/assets/images/hero-image.png" as="image" />
        <link rel="preload" href="/assets/images/map.jpg" as="image" />
      </Head>
      {/* Hero Section */}
      <MotionSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-[url('/assets/images/hero-image.png')] bg-cover bg-center px-10 md:px-28 h-[650px] "
      >
        <div className="pt-48 md:w-[700px] ">
          <h1 className=" text-light-900 h1-bold">
            Sun India Rocks is a Pioneering Company in
          </h1>
          <p className="text-[18px] py-8 md:w-[640px]  text-light-800">
            We specialize in granite manufacturing and export, delivering
            top-quality products to clients worldwide.{" "}
          </p>
          <div className="flex max-sm:flex-col gap-8">
            <div className="bg-light-800 transition duration-150 hover:bg-light-700 font-medium  w-max  px-4 py-2 rounded-lg">
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
      {/* Achievements Section */}
      <MotionSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-10 md:px-28 bg-[#E7EBED] py-20"
      >
        <ul className="sm:grid max-md:grid-cols-2 max-md:gap-8 grid-cols-3 gap-12">
          {achievements.map((achievement) => (
            <li
              className="flex max-sm:my-8 items-center max-md:items-start gap-4"
              key={achievement.label}
            >
              <Image
                src="/assets/icons/medal.svg"
                alt="medals"
                height={40}
                width={40}
                className="w-16 "
              />
              <div className="flex flex-col gap-3 max-sm:gap-1">
                <h3 className="h4-bold text-dark-100">{achievement.label}</h3>
                <p className="body-regular text-light-600">
                  {achievement.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="md:flex items-center my-16 gap-32">
          <h2 className="h2-bold ">Our Achievements</h2>
          <p className="md:px-7 text-light-600">
            With six key achievements, including industry certifications and
            global partnerships, we continue to set new standards in granite
            manufacturing and export, ensuring quality and innovation in every
            project.
          </p>
        </div>
      </MotionSection>
      {/* partner MotionSection */}

      <MotionSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-10 md:px-28 bg-light-900 py-20"
      >
        <div className="md:flex items-center gap-12 justify-between">
          <div className="md:w-1/2">
            <h2 className="h2-bold text-dark-100">
              Manufacturing & Exporting to the premier
            </h2>
            <p className="my-4 text-light-600">
              From pioneering startups to industry-leading enterprises
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col text-center gap-3">
            <ul className="max-md:mt-16 grid gap-4 grid-cols-3 max-sm:grid-cols-2">
              {partnersLogo.map((logo) => (
                <li
                  className=" items-center px-12 max-sm:px-8 max-sm:py-2 rounded-2xl py-4 bg-[#E7EBED] "
                  key={logo.id}
                >
                  <Image
                    className="w-full object-cover"
                    src={logo.imgUrl}
                    alt="logo"
                    width={40}
                    height={40}
                  />
                </li>
              ))}
            </ul>
            <p className="body-regular text-light-600">
              And many more to come...
            </p>
          </div>
        </div>
      </MotionSection>
      {/* Why choose us */}
      <MotionSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-10 md:px-28 bg-[#E7EBED] py-20"
      >
        <div className="md:flex justify-between">
          {/* title MotionSection */}
          <div className="flex flex-col gap-6">
            <h2 className="h2-bold">Why Choose Us ?</h2>
            <div className="flex items-center text-xs gap-2 font-semibold text-[#047C7C]">
              <div className="p-2 inline-block bg-[#047C7C] rounded-[100%]">
                <Image
                  className="bg-[#047C7C] rounded-[100%]"
                  src="/assets/icons/chevron-right.svg"
                  alt="icon"
                  height={20}
                  width={20}
                />
              </div>
              <p>Know More</p>
            </div>
          </div>
          {/* paragraph MotionSection */}
          <div className="max-md:py-4 md:w-3/5">
            <p className="text-light-600 text-md leading-7">
              With decades of expertise, a global footprint spanning [X]
              countries, and a steadfast commitment to quality, we deliver
              unparalleled granite solutions tailored to your needs. Our
              certified processes, innovative craftsmanship, and reliable
              logistics make us the trusted partner for projects of any scale.
            </p>
          </div>
        </div>

        <ul className="md:flex my-16 items-center gap-4">
          {choosingQualities.map((quality) => (
            <li
              className="p-2 max-md:my-4 rounded-lg bg-light-900 w-full"
              key={quality.id}
            >
              <Image
                className="w-full h-52 rounded-lg object-cover"
                src={quality.imgUrl}
                alt={quality.title}
                width={200}
                height={200}
              />
              <h2 className="h3-bold text-dark-100 my-4 mx-2">
                {quality.title}
              </h2>
              <p className="paragraph-regular text-light-600 mx-2 mb-4">
                {quality.description}
              </p>
            </li>
          ))}
        </ul>
      </MotionSection>
      {/* client MotionSection */}
      <MotionSection
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-10 md:px-28 bg-light-900 py-20"
      >
        {/* map */}
        <div className="md:flex items-center">
          {/* heading container*/}
          <div className="md:w-1/4">
            <h2 className="h2-bold my-8 text-dark-100">
              Our Clients Across the World
            </h2>
            <div className="max-md:flex max-md:gap-3 max-md:justify-center">
              <div className="sm:flex my-4 items-center bg-[#E7EBED] gap-6 px-6 py-3 rounded-md bg-">
                <h3 className="text-[48px] max-sm:text-3xl font-semibold text-dark-100">
                  400+
                </h3>
                <p className="font-medium text-light-600">Clients Worldwide</p>
              </div>
              <div className="sm:flex my-4  items-center bg-[#E7EBED] gap-6 px-6 py-3 rounded-md bg-">
                <h3 className="text-[48px] max-sm:text-3xl font-semibold text-dark-100">
                  2000+
                </h3>
                <p className="font-medium text-light-600">Satisfied Clients</p>
              </div>
            </div>
          </div>

          {/* map container */}
          <div className="md:w-3/4">
            <Image
              className="w-full"
              src="/assets/images/map.jpg"
              alt="map"
              width={1000}
              height={1000}
            />
          </div>
        </div>
        {/* testimonials */}
        <div>
          <div className="md:flex items-center gap-24">
            <h2 className="md:w-2/5 h2-bold my-8 text-dark-100">
              What our Clients Say?
            </h2>
            <p className="text-light-600 md:w-3/4">
              Our clients are at the heart of everything we do, and their
              feedback speaks volumes about our commitment to excellence. Having
              served numerous customers globally, we are proud to showcase their
              reviews, highlighting our quality, reliability, and exceptional
              service in granite manufacturing and export.
            </p>
          </div>
          <ul className="md:flex max-md:mt-8 gap-4">
            {testimonials.map((testimonial) => (
              <li
                className="bg-[#E7EBED] max-md:my-4 rounded-lg p-6 "
                key={testimonial.id}
              >
                <h3 className="text-[20px] font-bold text-dark-100">
                  {testimonial.name}
                </h3>
                <p className="text-[14px] font-medium text-light-600">
                  {testimonial.designation}
                </p>
                <p className="base-regular text-light-600 my-4 leading-6">
                  {testimonial.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </MotionSection>
    </div>
  );
}
