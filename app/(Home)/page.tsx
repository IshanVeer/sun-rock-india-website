"use client";
import {
  achievements,
  blogsData,
  partnersLogo,
  productData,
  profilePictures,
  testimonials,
  whyChooseUsQue,
} from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

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
                      height={500}
                      width={500}
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
      {/* Spiral positioned absolutely behind both sections */}
      <Image
        src="/assets/images/Spiral.svg"
        alt="spiral-vector"
        height={100}
        width={100}
        className="absolute top-[1900px] left-[40px] w-1/5 -z-10 opacity-60"
      />

      {/* Achievements Section */}
      <section className="relative px-8 md:px-20 pb-28">
        <h2 className="title-font uppercase font-light text-[55px] leading-16">
          Our achievements
        </h2>
        <div className="flex gap-44">
          <div className="w-1/4">{/* optional decorative content */}</div>

          <div>
            <h3 className="title-font font-semibold uppercase text-[#696868]">
              Certificates
            </h3>
            {achievements.map((achievement) => (
              <div
                className="text-2xl flex py-10 border-b-2 border-[#B9B6B6] items-start gap-8"
                key={achievement.id}
              >
                <p className="w-1/4 capitalize">{achievement.label}</p>
                <p className="w-3/4 capitalize">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="relative overflow-hidden  bg-[url('/assets/images/home-product-image-1.jpg')] bg-cover bg-center px-8 h-[650px] z-10 md:px-20 pb-28">
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/30 to-transparent"></div>
        <div className="flex absolute top-1/3 gap-24">
          <div className="w-1/3">
            <h2 className="title-font mb-10 text-7xl text-white">
              Black Galaxy
            </h2>
            <p className="text-white mb-4 text-[20px] line-clamp-2">
              A luxurious black granite with golden and silver specks. A sleek,
              solid black granite known for its elegance. Rich brown with dark
              speckles, ideal for countertops. A unique granite with blue tones
              and intricate patterns.
            </p>
            <Link
              className="inline-flex px-5 py-2 hover:bg-primary-300 transition duration-150  bg-primary-500 text-white gap-2 justify-center items-center"
              href="/products"
            >
              <p>Learn More</p>{" "}
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="right"
                height={20}
                width={20}
              />
            </Link>
          </div>
          <div className=" py-2 h-60  flex gap-4 ">
            {productData.map((product) => (
              <Image
                key={product.id}
                src={product.imgUrl}
                height={300}
                width={400}
                alt={product.name}
                className="w-full border-4 border-white"
              />
            ))}
          </div>
        </div>
      </section>
      {/* why choose us section */}
      <section className="md:px-20 py-28">
        <div className="flex gap-16">
          {/* text conatianer */}
          <div className="w-[37.5%] ">
            <h2 className="title-font mb-20 uppercase font-light text-[55px] leading-16">
              Why Choose Sun Rock India?
            </h2>
            <p className="text-[20px] leading-8 mt-36 mb-6">
              With years of experience and a passion for perfection, we deliver
              premium stone solutions tailored to your vision.
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
          <div className="w-[25%]">
            <Image
              src="/assets/images/why-choose-us.jpg"
              alt="why-choose-us"
              height={1000}
              width={1000}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-[37.5%] ">
            <Accordion type="single" collapsible>
              {whyChooseUsQue.map((que) => (
                <AccordionItem
                  className="hover:none"
                  key={que.id}
                  value={que.id}
                >
                  <AccordionTrigger className="uppercase hover:cursor-pointer title-font text-[28px] font-normal items-center">
                    {que.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-[20px]">
                    {que.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      {/* Testimonials section */}
      <section className="md:px-20 pb-28">
        <div className="flex justify-between">
          <div className="bg-primary-500 relative w-[40%] text-white -ml-20 -mb-28 pl-20">
            <div className="absolute top-1/4">
              <p className=" font-semibold uppercase title-font">
                . Testimonials
              </p>
              <h2 className="text-[55px] z-50 title-font font-light uppercase">
                Stonework Stories from Our Clients
              </h2>
            </div>

            <Image
              src="/assets/images/Dawn.svg"
              height={1000}
              width={1000}
              alt="dawn"
              className="w-1/2 absolute top-80 z-10 left-0"
            />
          </div>
          <div className="w-[60%]">
            <Image
              src="/assets/images/testimonials-quotes.svg"
              alt="quote"
              height={300}
              width={300}
              className="w-1/12"
            />
            <Carousel className="mt-12">
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <p className="text-4xl  title-font">{`"${testimonial.description}"`}</p>
                    <div className="flex mt-8 items-center gap-4">
                      <Image
                        src={testimonial.profilePicture}
                        width={500}
                        height={500}
                        alt={testimonial.name}
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <div>
                        <p className="title-font  uppercase font-semibold">
                          {testimonial.name}
                        </p>
                        <p className="title-font font-semibold text-[#B9B6B6]">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex mt-12 gap-4 justify-end">
                <CarouselPrevious className="bg-primary-500 size-16 text-white cursor-pointer hover:text-white hover:bg-primary-300" />
                <CarouselNext className="bg-primary-500 text-white size-16 hover:text-white cursor-pointer hover:bg-primary-300" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      {/* map section */}
      <section className="md:px-20 py-28">
        <div className="flex justify-between">
          <div className="title-font">
            <h3 className="text-[55px] font-light">250+</h3>
            <p className="text-[20px]">Projects Successfully Delivered</p>
          </div>
          <div className="title-font">
            <h3 className="text-[55px] font-light">99%</h3>
            <p className="text-[20px]">On-Time Delivery Rate</p>
          </div>
          <div className="title-font">
            <h3 className="text-[55px] font-light">10+</h3>
            <p className="text-[20px]">Years of Industry Experience</p>
          </div>
        </div>
        <div>
          <Image
            src="/assets/images/map.jpg"
            alt="map"
            height={2000}
            width={2000}
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-between">
          {partnersLogo.map((logo) => (
            <div key={logo.id}>
              <Image
                className="w-full"
                height={500}
                width={500}
                alt="logo"
                src={logo.imgUrl}
              />
            </div>
          ))}
        </div>
      </section>
      {/* journal section */}
      <section>
        <div className="flex md:px-20 items-center justify-between">
          <h2 className="text-[55px] w-1/2 font-light uppercase">
            The Sun Rock Journal
          </h2>
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
        <ul className="flex px-6 pb-28 pt-12  gap-4">
          {blogsData.map((blog, index) => (
            <li
              key={blog.id}
              className={cn(
                "w-full pb-18 bg-[#F2F2F2]",
                index % 2 === 1 ? "h-[300px]" : "h-[400px]" // Change as needed
              )}
            >
              <Link href="/">
                <Image
                  src={blog.imgUrl}
                  height={1000}
                  width={1000}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <p className="text-[20px] title-font capitalize px-2 pt-2">
                  {blog.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
