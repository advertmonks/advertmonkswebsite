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
      <div className="text-purple-600 mb-4">Services</div>
      
      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
          <h2 className="text-4xl font-bold mb-6">
          What We Offer
          </h2>
          <p className="text-gray-600 mb-6">
          Our team understands and listens to your needs. Whatever your business goals or target industry, we have something for everyone. So whether you need the full suite or just a specific service, browse our list, pick what you like and let&apos;s get building your digital presence.
          </p>
          {/* <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300">
            Learn More
          </button> */}
        </div>
        <div className="w-full hidden lg:w-1/3 md:flex self-center">
          <Image
            src="/callus.webp"
            alt="Avatar"
            width={200}
            height={180}
            className="ml-auto "
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard
          icon="🔗"
          title="Brand Building"
          description="Your brand is the voice of your product. At Advert Monks, our growing experience in building brand images ensures your social media account shows your brand’s values that calls out to your customers."
        />
        <ServiceCard
          icon="🔍"
          title="SEO Curation"
          description="When people don't search further than Google's first page, Advert Monks ensures traffic on your website by curating its design and content with trending keywords to improve ranking across search engines."
        />
        <ServiceCard
          icon="💎"
          title="Social Media Strategizing"
          description="Our team understands the nuances of each media platform, what makes them run, and puts it into a strategy for your business. Because nothing is stronger than a recommendation from a trusted friend."
        />
        <ServiceCard
          icon="🔗"
          title="Content Creation"
          description="Good content builds relationships that bring in revenue. That's why Advert Monks helps you write content that takes your business' legacy and does its story justice, in a way your customers appreciate."
        />
        <ServiceCard
          icon="🔗"
          title="Social Media Analytics"
          description="Simply putting up your content on various platforms is one step. Another is to understand the feedback data. That's why our team carefully analyses all your metrics to mould your content into reaching your target audience."
        />
        <ServiceCard
          icon="🔗"
          title="Video Production"
          description="If a picture can speak a thousand words, imagine what a video can do. Understanding and using this, our team helps you create online videos for your business that attracts customers to make them stay."
        />
      </div>
    </div>
  );
};

export default ServicesSection;