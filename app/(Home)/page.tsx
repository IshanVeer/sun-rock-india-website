import { achievements, choosingQualities, partnersLogo } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="object-cover px-28 h-[650px]"
        style={{ backgroundImage: "url('/assets/images/hero-image.png')" }}
      >
        <div className="pt-48 w-[700px]">
          <h1 className=" text-light-900 h1-bold">
            Sun India Rocks is a Pioneering Company in
          </h1>
          <p className="text-[18px] py-8 w-[640px] text-light-800">
            We specialize in granite manufacturing and export, delivering
            top-quality products to clients worldwide.{" "}
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
      {/* Achievements Section */}
      <section className="px-28 bg-[#E7EBED] py-20">
        <ul className="grid grid-cols-3 gap-12">
          {achievements.map((achievement) => (
            <li className="flex items-center gap-4" key={achievement.label}>
              <Image
                src="/assets/icons/medal.svg"
                alt="medals"
                height={40}
                width={40}
                className="w-16"
              />
              <div className="flex flex-col gap-3">
                <h3 className="h4-bold text-dark-100">{achievement.label}</h3>
                <p className="body-regular text-light-600">
                  {achievement.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex items-center my-16 gap-32">
          <h2 className="h2-bold ">Our Achievements</h2>
          <p className="px-7 text-light-600">
            With six key achievements, including industry certifications and
            global partnerships, we continue to set new standards in granite
            manufacturing and export, ensuring quality and innovation in every
            project.
          </p>
        </div>
      </section>
      {/* partner section */}

      <section className="px-28 bg-light-900 py-20">
        <div className="flex items-center gap-12 justify-between">
          <div className="w-1/2">
            <h2 className="h2-bold text-dark-100">
              Manufacturing & Exporting to the premier
            </h2>
            <p>From pioneering startups to industry-leading enterprises</p>
          </div>

          <div className="w-1/2 flex flex-col text-center gap-3">
            <ul className=" grid gap-4 grid-cols-3">
              {partnersLogo.map((logo) => (
                <li
                  className="px-12 rounded-2xl py-4 bg-[#E7EBED] "
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
      </section>
      {/* Why choose us */}
      <section className="px-28 bg-[#E7EBED] py-20">
        <div className="flex justify-between">
          {/* title section */}
          <div className="flex flex-col gap-6">
            <h2 className="h2-bold">Why Choose Us ?</h2>
            <div className="flex items-center text-xs gap-2 font-semibold text-[#047C7C]">
              <div className="p-2 inline-block bg-[#047C7C] rounded-[100%]">
                <Image
                  className="bg-[##047C7C] rounded-[100%]"
                  src="/assets/icons/chevron-right.svg"
                  alt="icon"
                  height={20}
                  width={20}
                />
              </div>
              <p>Know More</p>
            </div>
          </div>
          {/* paragraph section */}
          <div className="w-3/5">
            <p className="text-light-600 text-md leading-7">
              With decades of expertise, a global footprint spanning [X]
              countries, and a steadfast commitment to quality, we deliver
              unparalleled granite solutions tailored to your needs. Our
              certified processes, innovative craftsmanship, and reliable
              logistics make us the trusted partner for projects of any scale.
            </p>
          </div>
        </div>

        <ul className="flex my-16 items-center gap-4">
          {choosingQualities.map((quality) => (
            <li className="p-2 rounded-lg bg-light-900 w-full" key={quality.id}>
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
      </section>
    </div>
  );
}
