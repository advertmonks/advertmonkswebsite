import Image from 'next/image';
import React from 'react';

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      image: '/images/reviewer1.jpg',
      name: 'John Doe',
      role: 'Popular Influencer',
      content: 'kdsjfkl jlslfjlfl sdf kjflflfjs fs lfj lj  fjfsdjflsjfslfj ljf jf lfj sldjfldsj fdls fjlf mfjsldfjljfldjc df f f dsfd ds ',
    },
    {
      id: 2,
      image: '/images/reviewer2.jpg',
      name: 'John Doe',
      role: 'Popular Influencer',
      content: 'kdsjfkl jlslfjlfl sdf kjflflfjs fs lfj lj  fjfsdjflsjfslfj ljf jf lfj sldjfldsj fdls fjlf mfjsldfjljfldjc df f f dsfd ds ',
    },
    {
      id: 3,
      image: '/images/reviewer2.jpg',
      name: 'John Doe',
      role: 'Popular Influencer',
      content: 'kdsjfkl jlslfjlfl sdf kjflflfjs fs lfj lj  fjfsdjflsjfslfj ljf jf lfj sldjfldsj fdls fjlf mfjsldfjljfldjc df f f dsfd ds ',
    },
    {
      id: 4,
      image: '/images/reviewer2.jpg',
      name: 'John Doe',
      role: 'Popular Influencer',
      content: 'kdsjfkl jlslfjlfl sdf kjflflfjs fs lfj lj  fjfsdjflsjfslfj ljf jf lfj sldjfldsj fdls fjlf mfjsldfjljfldjc df f f dsfd ds ',
    },
    // Add more reviewers here
  ];

  return (
    <div id='reviews' className="bg-gray-100 py-10 px-4 md:px-10 flex flex-col md:flex-row gap-10 h-auto md:h-screen ">
      
      {/* Reviews Section */}
      <div className="flex flex-col items-center w-full md:w-2/3">
        <div className="overflow-y-auto h-auto scrollbar-hide">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`rounded-lg bg-gray-50 p-6 mb-6 shadow-lg flex flex-col md:flex-row gap-4 ${index % 2 === 1 ? "md:ml-16" : ""}`}
            >
              <Image
                src={review.image}
                alt={review.name}
                width={80}
                height={80}
                className="rounded-full w-24 h-24 mx-auto md:mx-0"
              />
              <div className="text-center md:text-left">
                <p className="text-purple-600 font-semibold mb-2">
                  {review.content} Satisfied Users
                </p>
                <h3 className="text-lg md:text-xl font-bold">{review.name}</h3>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marketing Section */}
      <div className="mt-8 md:mt-16 flex flex-col justify-center items-center md:items-start w-full md:w-1/3">
        <h2 className="text-2xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-8">
          Hit Your Marketing Goals With Advert Monks
        </h2>
        <p className="text-center md:text-left text-gray-500 max-w-xs md:max-w-md mb-4 md:mb-8">
          Our team makes sure there&apos;s a little something for every business. Whether it&apos;s SEO and content writing services for an organic presence, advertising your business on social media, or creating ads best optimized for social media, Advert Monks makes sure you get what you want.
        </p>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
