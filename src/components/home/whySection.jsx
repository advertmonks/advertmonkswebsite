import Image from "next/image";
import React from "react";

const WhyNubiSection = () => {
  return (
    <div className="bg-gray-50 py-16 px-5 md:px-20 relative bg-gradient-to-r from-purple-400 to-purple-600 mx-5 rounded-3xl">
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-10 bg-white px-4 py-2 rounded-full shadow-md">
        <span className="text-purple-600 font-semibold">Why Nubi</span>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <div className="relative">
          <div className=" rounded-lg flex items-center justify-center relative overflow-hidden">
            <Image
              src="/Advertising-Agency-Why-Image.webp"
              alt="Taylor Johnson"
              width={600} // Increase width
              height={500} // Increase height
              // className="w-60 h-60 -mt-10 -mb-10" // Add negative margins for overflow
            />
          </div>
        </div>
        <div className="max-w-lg ">
          <h2 className="text-4xl font-bold mb-4  text-white">
            We’re the best award-winning agency
          </h2>
          <p className="text-slate-100 opacity-70 mb-6">
            Faucibus diam donec diam viverra. Semper phasellus in est malesuada
            lectus. Aliquam purus.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center text-lg text-white">
              <span className="text-green-500 font-bold text-xl mr-2">✔</span>
              We provide personalized, data-driven strategies
            </li>
            <li className="flex items-center text-lg text-white">
              <span className="text-green-500 font-bold text-xl mr-2">✔</span>
              Our team comprises industry-leading experts
            </li>
            <li className="flex items-center text-lg text-white">
              <span className="text-green-500 font-bold text-xl mr-2">✔</span>
              We have a proven track record of success
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyNubiSection;
