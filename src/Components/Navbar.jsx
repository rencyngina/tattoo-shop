import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 lg:flex lg:justify-between backdrop-blur-sm w-full bg-transparent z-30 h-[10vh] lg:items-center lg:px-8 lg:py-4">
      <div>
        <Link href="/" passHref>
          <div className="cursor-pointer ">
            <Image
              className="lg:flex hidden"
              src="/images/logo.png"
              alt="logo"
              width={200}
              height={150}
            />
          </div>
        </Link>
      </div>

      <div className={`lg:flex ${isMobileNavOpen ? "flex" : ""} flex-col lg:flex-row lg:flex-grow lg:items-center lg:gap-10 text-yellow-300 text-lg`}>
        <div className="flex lg:hidden justify-end mt-6">
          <button className="mobile-nav-toggle" onClick={handleMobileNavToggle}>
            <FaBars className="h-8 w-8 text-white" />
          </button>
        </div>
        <div className="lg:flex lg:flex-grow hidden text-[#B38F65] justify-center gap-10 text-lg">
          <Link href="/" passHref>
            <div className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-gray-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom cursor-pointer">
              Home
            </div>
          </Link>
          <Link href="/about" passHref>
            <div className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-gray-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom cursor-pointer">
              About
            </div>
          </Link>
          <Link href="/contact" passHref>
            <div className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-gray-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom cursor-pointer">
              Contact Us
            </div>
          </Link>
          <Link href="/services" passHref>
            <div className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[1px] after:bg-gray-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom cursor-pointer">
              Services
            </div>
          </Link>
        </div>
      </div>
      <div className={`hidden lg:flex lg:gap-4 gap-2 lg:mb-10 mt-6`}>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-[#B38F65] text-lg hover:text-yellow-500 transition duration-300" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-[#B38F65] text-lg hover:text-yellow-500 transition duration-300" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-[#B38F65] text-lg hover:text-yellow-500 transition duration-300" />
        </a>
      </div>
      <div className={`block lg:hidden gap-2 lg:mb-10 mt-6 w-full ${isMobileNavOpen ? "flex lg:hidden flex-col" : "hidden"}`} style={{ backgroundColor: "#03234d" }}>
        <nav className="bg-black flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center justify-center">
            <li>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-lg hover:text-yellow-500 transition duration-300" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white text-lg hover:text-yellow-500 transition duration-300" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-white text-lg hover:text-yellow-500 transition duration-300" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
