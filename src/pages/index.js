import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/HeroSection/Hero";
import Sectionabout from "@/Components/section-about";
import Sectionservices from "@/Components/sectionservices";
import Foot from "@/Components/foot";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <main>
      <Navbar />
      <Hero />
      <Sectionabout />
      <Sectionservices />
      <Foot />
   </main>
  );
}
