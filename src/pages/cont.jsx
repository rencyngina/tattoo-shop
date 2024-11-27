import React from 'react';
import Navbar from '@/Components/Navbar';
import Foot from '@/Components/foot';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='bg-[#eeebe3] py-16  overflow-hidden'>
        <div className='container mx-auto grid lg:grid-cols-2 gap-12 px-6 lg:px-20'>
          {/* Left Side */}
          <div className='bg-[#eeebe3]  shadow-2xl p-10 mt-10'>
            <h1 className='text-5xl font-bold text-[#5E3219]'>Contact Us</h1>
            <p className='font-semibold text-gray-600  mt-4'>
              We are here to help. Whether you need cleaning products, aftercare services, or have general inquiries, reach out to us today!
            </p>

            <form className='mt-8 space-y-6'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <div>
                  <label className='block text-gray-700 font-semibold'>First Name</label>
                  <input
                    type='text'
                    placeholder='First name'
                    className='w-full border  p-3 focus:ring-2 focus:ring-green-800 focus:outline-none'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-semibold'>Last Name</label>
                  <input
                    type='text'
                    placeholder='Last name'
                    className='w-full border  p-3 focus:ring-2 focus:ring-green-800 focus:outline-none'
                  />
                </div>
              </div>
              <div>
                <label className='block text-gray-700 font-semibold'>Email</label>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-full border  p-3 focus:ring-2 focus:ring-green-800 focus:outline-none'
                />
              </div>
              <div>
                <label className='block text-gray-700 font-semibold'>Phone Number</label>
                <input
                  type='text'
                  placeholder='Enter phone number'
                  className='w-full border  p-3 focus:ring-2 focus:ring-green-800 focus:outline-none'
                />
              </div>
              <div>
                <label className='block text-gray-700 font-semibold'>Message</label>
                <textarea
                  placeholder='Write your message here'
                  rows='4'
                  className='w-full border  p-3 focus:ring-2 focus:ring-green-800 focus:outline-none'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-gray-800 text-white py-3 font-semibold hover:bg-[#2e2827] focus:ring-2 focus:ring-gray-600'
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div className='flex flex-col justify-center'>
            <div className='bg-gray-700 rounded- shadow-lg p-10'>
              <h2 className='text-4xl font-semibold text-black'>Get in Touch</h2>
              <p className='text-lg mt-4'>
                Need immediate assistance? Call us or visit one of our offices.
              </p>
              <p className='text-lg font-bold mt-6 text-black'>Phone: 0700400502</p>
            </div>
            <div className='mt-8'>
              <h3 className='text-2xl font-semibold text-[#5E3219]'>Nairobi Headquarters</h3>
              <p className='text-gray-600 mt-2 font-semibold'>801 5th Ave, Suite 1200</p>

              <h3 className='text-2xl font-semibold text-[#5E3219] mt-6'>Nakuru Headquarters</h3>
              <p className='text-gray-600 mt-2 font-semibold'>The Great Eagles, 1st Floor, 1st City Road</p>

              <h3 className='text-2xl font-semibold text-[#5E3219] mt-6'>Kisumu Headquarters</h3>
              <p className='text-gray-600 mt-2 font-semibold'>Kisumu City, LA.S 16, 5th Floor</p>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default Contact;
