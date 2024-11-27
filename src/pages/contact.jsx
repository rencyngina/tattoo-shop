import React from 'react';
import Navbar from '@/Components/Navbar';
import Foot from '@/Components/foot';
import Image from 'next/image';

const Contact = () => {
  return (
    <>
      {/* Navbar should be outside the main grid layout */}
      <Navbar />

      <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Left side (now contains the form) */}
        <div className="bg-[#e6e6e6] flex flex-col items-center justify-center min-h-screen p-6">
          <h1 className="text-6xl font-bold text-black mb-16">Contact Us</h1>
          <form className="w-full max-w-lg space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-semibold">First Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full text-base bg-transparent border-b-2 border-gray-700 p-2 focus:ring-0 focus:border-green-800 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Last Name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full text-base bg-transparent border-b-2 border-gray-700 p-2 focus:ring-0 focus:border-green-800 focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full text-base bg-transparent border-b-2 border-gray-700 p-2 focus:ring-0 focus:border-green-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Phone Number</label>
              <input
                type="text"
                placeholder="Enter phone number"
                className="w-full text-base bg-transparent border-b-2 border-gray-700 p-2 focus:ring-0 focus:border-green-800 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea
                placeholder="Write your message here"
                rows="4"
                className="w-full bg-transparent text-base border-b-2 border-gray-700 p-2 focus:ring-0 focus:border-green-800 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 text-lg font-semibold hover:bg-[#2e2827] focus:ring-2 focus:ring-gray-600"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right side (now contains the information) */}
        <div className="bg-black text-white flex flex-col items-center justify-center relative">
          <div className="mb-36 lg:mr-96 ml-9">
            <h4 className="text-xl text-gray-500">opening Hours</h4>
            <p className="text-lg">Monday-Friday</p>
            <p className="text-lg">9am-5pm</p>
            <p className="text-lg">Weekends</p>
            <p className="text-lg">Closed</p>

            <h5 className="mt-11 text-xl text-gray-500">address</h5>
            <p className="text-lg">Town, Suparman 51</p>
            <p className="text-lg">First Floor</p>
            <p className="text-lg">Nairobi</p>

            <h5 className="mt-11 text-xl text-gray-500">support</h5>
            <p className="text-lg">hello@gmail.com</p>
            <p className="text-lg">+254701315311</p>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <Image
              src="/images/drop.png"
              alt="Descriptive text"
              width={740}
              height={740}
              className="object-contain brightness-110 contrast-125 shadow-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
