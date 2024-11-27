import React from 'react';
import Image from 'next/image';
import Navbar from '@/Components/Navbar';
import Foot from '@/Components/foot';

const About = () => {
  return (
    <>
      <Navbar />

      <div className="bg-[#F5F5F5] overflow-hidden">
        <div
          className="h-72 w-full flex flex-col justify-center items-center"
          style={{
            backgroundImage: `linear-gradient(rgba(21, 21, 21, 0.6), rgba(30, 29, 29, 0.6)), url(/images/slide1.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <h1 className="text-2xl mt-6 lg:text-2xl xl:text-3xl text-white">
            ABOUT US
          </h1>
        </div>

        <div className="bg-white/35 w-full max-w-6xl mx-auto mt-14 p-8 shadow-2xl rounded-2xl text-gray-800">
          <h2 className="text-3xl font-bold mb-4 text-center">Learn more about me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg leading-relaxed">
            <p className='mt-10 text-base font-sans'>
              I have always been passionate about working with people and turning their ideas into something extraordinary—something that will not only represent who they are but also stay with them forever. For me, tattooing is far more than just creating art; it’s about building connections and bringing stories to life. It’s about taking someone’s dreams, memories, or emotions and transforming them into a design that becomes a permanent part of their identity. I love starting with a blank canvas and creating something from scratch, watching as a concept evolves into a piece of art that will forever live on the human body.
              <br/>
              <br/>
              What makes my work truly special is my love for freehand and freestyle tattoos. I thrive on the creativity and freedom that comes with designing directly on the skin, letting the lines and shapes flow naturally to fit each person’s unique form and vision. This approach ensures that every piece is deeply personal and one of a kind. I don’t just follow trends; I craft timeless designs that resonate on a deeply emotional level, creating pieces that people are proud to wear for a lifetime.
            </p>
            <p className='mt-10 text-base font-sans'>
              Tattooing is not just about ink; it’s about the experience and the story behind it. Each tattoo tells a tale—whether it’s a tribute to a loved one, a mark of strength, or a celebration of individuality. It’s incredibly fulfilling to know that my work becomes a part of someone’s journey, a symbol of something meaningful that they’ve chosen to carry with them forever.
              <br/>
              <br/>
              I find inspiration in every client I meet. Each person’s story and energy push me to create something truly unique and personal. I strive to make every tattoo session an inspiring and memorable experience, not just for my clients but for myself as an artist. For me, there is no greater joy than knowing I’ve helped someone express themselves in a way that words or other forms of art simply cannot.
              <br/>
              <br/>
              Tattooing is a blend of art, passion, and trust. It’s about creating beauty, honoring individuality, and leaving an indelible mark that stands the test of time. My work is my way of connecting with people and leaving a legacy of creativity, one tattoo at a time.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-16 px-4 mb-10">
          <h2 className="text-3xl font-bold text-center mb-8">How art should make you feel</h2>
          <div className="flex justify-between gap-6">
            {/* Card 1 */}
            <div className="w-full md:w-1/4 h-72 bg-cover bg-center rounded-lg shadow-lg" 
            style={{ backgroundImage: 'url(/images/card1.jpg)' }}>
              <div className="h-full flex items-center justify-center bg-black bg-opacity-40 text-white text-lg font-semibold">
                Confident
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-1/4 h-72 bg-cover bg-center rounded-lg shadow-lg" 
            style={{ backgroundImage: 'url(/images/card2.jpg)' }}>
              <div className="h-full flex items-center justify-center bg-black bg-opacity-40 text-white text-lg font-semibold">
                Beautiful
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-1/4 h-72 bg-cover bg-center rounded-lg shadow-lg" 
            style={{ backgroundImage: 'url(/images/card3.jpg)' }}>
              <div className="h-full flex items-center justify-center bg-black bg-opacity-40 text-white text-lg font-semibold">
                Expressive
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full md:w-1/4 h-72 bg-cover bg-center rounded-lg shadow-lg" 
            style={{ backgroundImage: 'url(/images/card4.jpg)' }}>
              <div className="h-full flex items-center justify-center bg-black bg-opacity-40 text-white text-lg font-semibold">
                Creative
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foot/>
    </>
  );
};

export default About;
