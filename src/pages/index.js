import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/HeroSection/Hero";
import Object1 from "@/Components/object1";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <main>
      <Navbar />
      <Hero />
      <Object1 />
   </main>
  );
}
