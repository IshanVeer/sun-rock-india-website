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
            <div className="bg-light-800 font-medium inline-block px-4 py-2 rounded-lg">
              <Link href="/contact">Contact Us</Link>
            </div>
            <div className="flex font-medium items-center gap-3 text-light-900">
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
}
