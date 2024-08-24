import Image from 'next/image';
import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'David Daily',
      role: 'Head of Production',
      image: '/images/david.png',
    },
    {
      name: 'John Stewart',
      role: 'Creative Director',
      image: '/images/john.png',
    },
    {
      name: 'Taylor Johnson',
      role: 'Head of Client Services',
      image: '/images/taylor.png',
    },
    {
      name: 'Walter Mountain',
      role: 'Project Manager',
      image: '/images/walter.png',
    },
    {
      name: 'Allen Chang',
      role: 'Creative Director',
      image: '/images/allen.png',
    },
    {
      name: 'Rick James',
      role: 'Development Lead',
      image: '/images/rick.png',
    },
  ];

  return (
    <div className="bg-white py-16 px-5 md:px-20">
      <div className="text-center">
        <h4 className="text-purple-600 text-lg font-semibold mb-2">The Team</h4>
        <h2 className="text-4xl font-bold mb-8">
          Meet the brilliant minds behind our successful campaigns
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <Image
              src={member.image}
              alt={member.name}
              width={40}
              height={40}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
