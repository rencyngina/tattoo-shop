import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Foot from "@/Components/foot"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image2 from "../../../public/images/slide2.jpg";
import Image3 from "../../../public/images/slide3.jpg";
import Image4 from "../../../public/images/image.jpg";
import { IoCloseCircle } from 'react-icons/io5';
import SoftwareRequestForm from "./SoftwareRequestForm";
import Head from 'next/head';
import Image from "next/image";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const audioRef = useRef(null); // Reference to the audio element

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Adjust the volume here (0 is mute, 1 is full volume)
  const adjustVolume = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Set volume to 30% of the maximum
    }
  };

  const imagesData = [
    {
      image: Image2,
      title: "TATTOO WORLD",
      description: "YOUR CREATIVITY MATTERS",
      buttonLink: "/book",
    },
    {
      image: Image3,
      title: "ART STUDIO",
      description: "My aim is to inspire faith in yourself, the future, and life itself through tattoos.",
      buttonLink: "/book",
    },
    {
      image: Image4,
      title: "PIERCINGS ARE ART",
      description: "We take pride in what we do.",
      buttonLink: "/book",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>TATTOO AFRICA</title>
        <meta
          name="description"
          content="Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law School, University of Nairobi, ready to guide you. Trust in our expertise for unparalleled legal services."
        />
      </Head>

      {/* Audio background element */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/audio/mp3.mp3" type="audio/mp3" />
        <source src="/audio/mp3.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      {/* Call the adjustVolume function to control the audio volume */}
      {adjustVolume()}

      <div className="w-full h-screen overflow-x-hidden overflow-hidden">
        <Slider {...settings} className="w-full h-screen">
          {imagesData.map((slide, index) => (
            <div key={index} className="relative w-full h-screen">
              <Image
                src={slide.image}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-white lg:p-3 p-3 sm:p-8">
                <h1
                  style={{ color: '#5E3219' }}
                  className="w-full sm:w-1/2 lg:w-full text-center text-4xl font-bold lg:text-4xl xl:text-5xl leading-relaxed lg:font-extrabold lg:mt-72 mt-80 mb-3"
                >
                  {slide.title}
                </h1>
                <p
                  style={{ color: '#ca9b20' }}
                  className="text-center w-full sm:w-3/4 lg:w-1/2 text-xl font-bold lg:text-xl shadow-black leading-relaxed"
                >
                  {slide.description}
                </p>
                <div className="flex-1"></div>
                <div className="mb-80 lg:mb-60 w-full sm:w-1/2 flex justify-center">
                  <button
                    type="button"
                    onClick={toggleForm}
                    className="relat px-20 py-3.5 overflow-hidden group bg-gradient-to-r from-gray-700 to-black relative hover:bg-gradient-to-r hover:from-gray-600 hover:to-black text-white transition-all ease-out duration-300"
                  >
                    <span
                      className="absolute right-0 w-10 h-full top-0 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 -skew-x-12 group-hover:-translate-x-36 ease"
                    ></span>
                    <span className="relative text-xl font-semibold">BOOK NOW!</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {showForm && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 z-20 flex items-center justify-center">
            <div className="relative z-30">
              <SoftwareRequestForm />
              <button
                onClick={toggleForm}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <IoCloseCircle className="w-8 h-8 text-gray-500" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
