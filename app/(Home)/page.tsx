import { achievements, partnersLogo } from "@/constants";
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
                <li className="px-12 rounded-2xl py-4 bg-[#E7EBED] " key={1}>
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
    </div>
  );
}
