import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-purple-500 min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <div className="inline-block bg-purple-400 rounded-full px-4 py-2 mb-6">
          <p className="text-white text-sm">👋 What We Offer</p>
        </div>
        
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          Helping Businesses Improve<br />Their Online Presence
        </h1>
        
        <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
        Our team understands and listens to your needs. Whatever your business goals or target industry, we have something for everyone. So whether you need the full suite or just a specific service,  browse our list, pick what you like and let&apos;s get building your digital presence.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="bg-white rounded-md flex items-center px-3 py-2 w-full sm:w-auto">
            <span className="text-gray-400 mr-2">🌐</span>
            <input
              type="text"
              placeholder="yourwebsite.com/"
              className="bg-transparent outline-none flex-grow"
            />
          </div>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300 w-full sm:w-auto">
            Get a proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;