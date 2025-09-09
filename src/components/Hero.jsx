import React from "react";
import { motion } from "framer-motion";

const clientLogos = [
  "/assets/tata.webp",
  "/assets/bmw-svgrepo-com.svg",
  "/assets/sony-2-logo-svgrepo-com.svg",
  "/assets/huggies.svg",
  "/assets/Eton-Logo.webp",
  "/assets/procter-gamble-1.svg",
];

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-white text-black flex flex-col justify-between mt-2">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 lg:px-20 h-[90%]">
        {/* Left Side Animation */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.img
            src="/assets/lion-face-svgrepo-com.svg"
            alt="Animation"
            className="max-w-[220px] lg:max-w-[260px] lg:mt-0 mt-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Right Side Static Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-normal">
            Design
            <br /> Transform
            <br /> Accelerate
          </h1>

          <p className="mt-5 max-w-xl text-base md:text-xl lg:text-2xl text-gray-800 mx-auto lg:mx-0 font-medium">
            Redefining user experiences through <br /> Behavioural Science & AI.
          </p>
        </div>
      </div>

      {/* Infinite Moving Logos with Text & Divider */}
      <div className="w-full bg-white pt-0 pb-12 overflow-hidden relative border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex items-center space-x-8">
          {/* Left Side Text */}
          <div className="flex-shrink-0 text-sm md:text-sm lg:text-base font-semibold text-gray-800 whitespace-nowrap">
            Your trusted UI UX design agency.
          </div>

          <div className="h-17 w-px bg-gray-900"></div>

          {/* Right Side Infinite Logos */}
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-slide whitespace-nowrap">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`client-${index}`}
                  className="h-12 mx-8 inline-block"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.button
        className="fixed bottom-6 right-6 w-26 h-26 rounded-full shadow-xl  overflow-hidden z-50 cursor-pointer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => alert("Contact Us Clicked!")}
      >
        <video
          src="../../assets/avatar-leo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.button>

      <style>{`
              @keyframes slide {
              0% { transform: translateX(0); }
               100% { transform: translateX(-50%); }
            }
            .animate-slide {
                animation: slide 15s linear infinite;
                   display: flex;
                   will-change: transform;
         }
          `}</style>
    </section>
  );
};

export default Hero;
