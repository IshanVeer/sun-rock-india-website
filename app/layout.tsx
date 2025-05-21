import type { Metadata } from "next";
import { Jost, Kumbh_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import MobileNav from "@/components/shared/MobileNav";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbhSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sun Rock India",
  description:
    "We specialize in granite manufacturing and export, delivering top-quality products to clients worldwide. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} ${jost.variable} antialiased`}>
        {/* <NavBar /> */}
        <MobileNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
