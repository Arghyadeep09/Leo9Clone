import React from "react";
import { motion } from "framer-motion";

const clientLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/1/12/Tata_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/23/Sony_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/ee/Huggies_logo.svg",
  "https://leo9studio.com/wp-content/uploads/2024/02/eton-logo.webp",
  "https://leo9studio.com/wp-content/uploads/2024/02/kimirica-logo.webp",
];

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-white text-black flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 lg:px-20 h-[90%]">
        {/* Left Side Animation */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <motion.img
            src="https://leo9studio.com/wp-content/uploads/2024/02/leo9-animation.gif"
            alt="Animation"
            className="max-w-[400px] lg:max-w-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Right Side Static Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest">
            Design<br/> Transform<br/> Accelerate
          </h1>

          <p className="mt-6 max-w-xl text-2xl text-gray-800 mx-auto lg:mx-0 font-medium">
            Redefining user experiences through Behavioural Science & AI.
          </p>
        </div>
      </div>

      {/* Infinite Moving Logos */}
      <div className="w-full bg-white py-6 overflow-hidden relative border-t border-gray-200">
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

      {/* Infinite Scroll Animation */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 12s linear infinite;
          display: flex;
        }
      `}</style>
    </section>
  );
};

export default Hero;
