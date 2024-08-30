import React from 'react';
import Image from 'next/image';

const Stat = ({ value, label }) => (
  <div className="mb-4">
    <div className="text-4xl font-bold">{value}</div>
    <div className="text-gray-500">{label}</div>
  </div>
);

const AboutMeSection = () => {
  return (
    <div  className="container mx-auto px-4 py-16">
      <div className="text-purple-600 mb-2">About me</div>
      
      <h2 className="text-4xl font-bold mb-6 max-w-3xl">
        I&apos;ve been helping businesses improve their SEO for over 5 years
      </h2>
      
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <div className="h-2 w-2 bg-green-500 rounded-full mb-6"></div>
          
          <p className="text-gray-600 mb-6">
            Pellentesque tempus nibh et est elementum id consequat eu lectus. Consectetur urna id faucibus at feugiat praesent. Volutpat felis ipsum orci vitae pharetra.
          </p>
          
          <p className="text-gray-600 mb-8">
            Vestibulum fermentum mi consectetur pretium viverra urna.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <Stat value="100+" label="Clients served" />
            <Stat value="500+" label="Websites optimized" />
            <Stat value="1M+" label="Keywords optimized" />
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-purple-500 transform -skew-x-6 z-0"></div>
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={400}
            height={400}
            className="relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;