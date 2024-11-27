// src/pages/about.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Sectionabout = () => {
  return (
    <div className="bg-gradient-to-b from-[#2E2827] to-[#3E3A39] min-h-screen">
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen">
        {/* Left Section */}
        <div className="flex-1 bg-transparent p-6 lg:p-8 flex flex-col justify-center space-y-6">
          <div className="mb-12 text-center lg:text-left">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white lg:ml-5">About Us</h1>
            <p className="text-gray-300  sm:text-base lg:text-2xl text-lg mt-4 lg:ml-10">
              The one who inspires me to keep going is you.
            </p>
          </div>

          {/* Image and text side by side */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 mt-4 space-y-6 lg:space-y-0">
            <Image
              src="/images/wear.jpeg"
              alt="Small Image"
              width={300}
              height={300}
              className="shadow-lg"
              loading="lazy"
            />
            <div className=" lg:text-left mt-6 lg:mt-0">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-6xl mb-4 lg:mb-10">Hey, I'm Lais.</h2>
              <p className="text-gray-300 text-lg sm:text-lg lg:text-xl leading-relaxed lg:ml-11 lg:mb-6 mb-4">
                I like to work with people and create 
                something from zero that will stay
                forever on the human body. 
                I do freehand and freestyle tattoos...
              </p>
              <Link href="/about">
                <button className="mb-8 lg:ml-9 sm:mt-8 lg:mt-10 text-sm sm:text-lg py-2 px-4 sm:px-6 bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 shadow-md text-black font-semibold">
                  READ MORE
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-transparent flex flex-col items-center justify-center space-y-6 lg:space-y-10 p-6 lg:p-8">
          <Image
            src="/images/picc.jpeg"
            alt="Big Image 1"
            width={250}
            height={250}
            className="shadow-md"
            loading="lazy"
          />
          <Image
            src="/images/pcc.jpg"
            alt="Big Image 2"
            width={250}
            height={250}
            className="shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Sectionabout;
