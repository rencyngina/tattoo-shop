import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../../public/images/slide1.jpg";
import Image2 from "../../../public/images/slide2.jpg";
import Image3 from "../../../public/images/slide3.jpg";
import Image4 from "../../../public/images/slide4.jpg";
import { LuArrowDownCircle } from "react-icons/lu";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Head from 'next/head';

const Hero = () => {
  const imagesData = [
    {
      image: Image1,
      title: "PIERSINGS & ART",
      description: "We do it perfectly",
      button1Label: "Book Now",
      button1Link: "/book",
      button2Label: "Contact us",
      button2Link: "/contact",
    },
    {
      image: Image2,
      title: "TATTOO WORLD",
      description:
        "Your premiere choice for a significantly different tattooing experience.",
      button1Label: "Book Now",
      button1Link: "/book",
      button2Label: "Contact Us",
      button2Link: "/contact",
    },
    {
      image: Image3,
      title: "ART STUDIO",
      description:
        " My aim is to inspire faith in yourself, the future, and life itself through tattoos.",
      button1Label: "Our Expertise",
      button1Link: "/practice-areas",
      button2Label: "Get Started",
      button2Link: "/contact",
    },
    {
      image: Image4,
      title: "PIERSINGS AND ART",
      description:
        "They are wonderful from customer service to the art work it’s a great shop all around.",
      button1Label: "Our Services",
      button1Link: "/services",
      button2Label: "Contact Us",
      button2Link: "/contact",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Head>
        <title>TATTOO AFRICA</title>
        <meta name="description" content="Unlock legal excellence with Royfordlaw. Highly skilled professionals from Kenya's prestigious Law School, University of Nairobi, ready to guide you. Trust in our expertise for unparalleled legal services." />
      </Head>
      <div className="w-full h-[76vh] lg:h-[84.5vh] xl:h-[87]">
        <Slider {...settings} className="w-full h-[80vh] lg:h-[90.8vh] xl:h-[87]">
          {imagesData.map((slide, index) => (
            <div key={index} className="relative h-[76vh] lg:h-[90vh] ">
              <Image src={slide.image} alt={`Slide ${index}`} className="w-full mb-8 h-[76vh] lg:h-[90vh] object-cover" />
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-4 sm:p-8">
                <h1 className="w-full sm:w-1/2 lg:w-1/1 text-4xl font-bold lg:text-4xl xl:text-5xl leading-relaxed lg:font-extrabold mb-2">
                  {slide.title}
                </h1>
                <p className="text-white w-full sm:w-1/2 lg:w-1/2 text-sm lg:text-xl leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex mt-16 gap-8">
                  <a href={slide.button1Link} className="mr-4 border border-bg-white text-white px-8 lg:px-12 py-4  hover:bg-gray-200 transition-colors">
                    {slide.button1Label}
                  </a>
                  
                  <a href={slide.button2Link} className=" border-gray-500 bg-gray-500 text-white px-8 lg:px-12 py-4  hover:bg-gray-200 transition-colors">
                    {slide.button2Label}
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        <ScrollLink
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="absolute bottom-0 left-0 flex gap-4 justify-center items-center p-4 lg:p-16"
        >
          <LuArrowDownCircle className="text-2xl lg:text-3xl text-white animate-bounce" />
          <h1 className="text-white text-sm lg:text-xl leading-relaxed">See More</h1>
        </ScrollLink>
      </div>
    </>
  );
};

export default Hero;
