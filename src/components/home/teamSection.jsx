import Image from 'next/image';
import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'David Daily',
      role: 'Head of Production',
      image: '/ankush.png',
    },
    {
      name: 'John Stewart',
      role: 'Creative Director',
      image: '/pixelcut-export.png',
    },
    {
      name: 'Taylor Johnson',
      role: 'Head of Client Services',
      image: '/Untitled design (3).png',
    },
  ];

  return (
    <div id='team' className="bg-white py-16 px-5 md:px-20 ">
      <div className="text-center">
        <h4 className="text-purple-600 text-lg font-semibold mb-2">The Team</h4>
        <h2 className="text-4xl font-bold mb-8">
          Meet the brilliant minds behind our successful campaigns
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <Image
              src={member.image}
              alt={member.name}
              width={50}
              height={50}
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
