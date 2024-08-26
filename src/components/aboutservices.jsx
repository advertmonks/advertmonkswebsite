import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-gray-100 p-6 rounded-lg">
    <div className="text-purple-500 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-purple-600 mb-2">Services</div>
      
      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mb-6">
            I offer a wide range of services to help you achieve your SEO goals
          </h2>
          <p className="text-gray-600 mb-6">
            I have the skills and knowledge to get the job done in no time.
            Check out my services page to learn more about what I can offer.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
            Learn More
          </button>
        </div>
        <div className="w-full lg:w-1/3">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={200}
            height={200}
            className="ml-auto"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon="🔍"
          title="SEO Audit"
          description="Quis quis est interdum arcu. Quam egestas nibh viverra dictum ultrices."
        />
        <ServiceCard
          icon="💎"
          title="Keyword Research"
          description="Dictumst nibh quis eget eleifend conse ctetur. Sapien vitae maecenas massa in."
        />
        <ServiceCard
          icon="🔗"
          title="Link Building"
          description="Et mauris pharetra consectetur sem et sit. Sit posuere tellus mattis sit."
        />
      </div>
    </div>
  );
};

export default ServicesSection;