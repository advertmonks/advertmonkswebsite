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
    <div id='reviews' className="bg-gray-100 py-10 px-5 md:px-20 flex gap-6">
      
      <div className="flex flex-col items-center w-1/2">
        <div className="overflow-y-auto h-96 scrollbar-hide">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 mb-6 shadow-lg rounded-lg text-center flex"
            >
              <Image
                src={review.image}
                alt={review.name}
                width={40}
                height={40}
                className="rounded-full w-52 h-24 mx-auto mb-4 "
              />
              <div className='text-left'>
              <p className="text-purple-600 font-semibold mt-4">
                {review.content} Satisfied Users
              </p>
              <h3 className="text-xl font-bold">{review.name}</h3>
              <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
            {/* <p className="text-center text-gray-500 mt-10">
            More than 25,000 world-class brands trust <span className="text-purple-600">Influozy</span>
            </p>
            <div className="flex justify-center space-x-4 mt-4">
            <Image src="/images/logo1.png" alt="Logo 1" className="h-6" width={40}
                    height={40}/>
            <Image src="/images/logo2.png" alt="Logo 2" className="h-6" width={40}
                    height={40}/>
            <Image src="/images/logo3.png" alt="Logo 3" className="h-6" width={40}
                    height={40}/>
            <Image src="/images/logo4.png" alt="Logo 4" className="h-6" width={40}
                    height={40}/>
            </div> */}
      </div>
      <div className='mt-16'>
      <h2 className="text-4xl font-bold text-center mb-8">
        Find The Right Influencer For Your Business
      </h2>
      <p className="text-center mb-8 text-gray-500 max-w-xl mx-auto">
        Taciti dui nobis lobortis donec consectetur vel felis efficitur. 
        Accumsan molestie habitasse litora ornare a turpis sed faucibus fermentum.
      </p>
      <button className="bg-purple-600 text-white px-6 py-2 rounded-lg mx-auto block mb-8">
        Discover More
      </button>
      </div>
    </div>
  );
};

export default ReviewSection;
