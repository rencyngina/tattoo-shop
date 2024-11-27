import React from 'react';
import Link from 'next/link'

const SectionServices = () => {
  const services = [
    {
      title: "Piercings",
      description:
        "We are currently expanding our piercing collection. Come and find some jewelry/piercing you may like. Click on the button below to look at prices and discounts.",
      image: "/images/white4.jpg",
    },
    {
      title: "Tattoos and Removal",
      description: "We also sell art and range of local artistic like lrys stafoss, Charly moon etc. You aan also be creative and we can make your imagination come to life. I also free style.",
      image: "/images/white3.jpg",
    },
    {
      title: "After care",
      description: "After piercings or tattoos we offer you free cleaning and chech ups for the next 6 weeks. We also sell healing products to help you on the healing journy.",
      image: "/images/white2.jpg",
    },
    {
      title: "Lipo",
      description: "We also offer lipo services on the side. We will help you get rid of the extra fat in weeks. We have the perfect payment plan for you.",
      image: "/images/white1.jpg",
    },
  ];

  return (
    <div
      className="w-full h-[160vh] xl:h-[78vh] flex flex-col  justify-center bg- items-center relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(/images/white.jpg)`,
      
       }}
    >
     {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/35"></div> {/* Adjust the opacity (e.g., /50) as needed */}

      {/* Header */}
      <div className="absolute top-0  mt-4 ">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold mb-2 flex justify-center items-center text-[#96A889]">
            Our Services
          </h1>
          <div className="ml-30 w-64 h-1 bg-gray-800"></div>
          <p className="text-yellow-400 text-2xl mt-4">
            
          </p>
        </div>
      </div>

      {/* Service Cards */}
      <div className="absolute top-44 w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:px-8 gap-4 px-6 max-w-screen-xl">
          {services.map((service, index) => (
            <article
              key={index}
              className="relative w-[250px] h-[250px] rounded-[20px] bg-cover bg-center shadow-lg overflow-hidden group"
              style={{ backgroundImage: `url(${service.image})` }}
            >
              {/* Background overlay */}
              <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/70"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 group-hover:h-full transition-all duration-500 bg-black text-white p-4 rounded-tl-[42px] overflow-hidden">
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-sm mt-1 line-clamp-2 group-hover:line-clamp-none">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="absolute lg:bottom-20 bottom-16 md:bottom-20 w-full flex justify-center">
      <Link href="/services">
      <button className="bg-transparent border border-gray-800 text-white text-lg font-bold py-4 px-16 hover:bg-gray-800 transition">
        Learn More
      </button>
      </Link>
      </div>
    </div>
  );
};

export default SectionServices;
