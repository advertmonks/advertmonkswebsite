// components/QuoteForm.js
"use client"
import { useEmailContext } from '@/context/EmailContext';
import Link from 'next/link';
import React from 'react';

export default function  QuoteForm () {
  let {isEmpty, setIsEmpty} = useEmailContext();

  const handleChange = ({target})=>{
    setIsEmpty(target.value);
  }
  return (
    <div className="flex flex-col items-center p-8 bg-white">
      <div className="text-center bg-gradient-to-r from-purple-500 to-purple-300 p-8 rounded-lg w-3/4 gap-20  flex" >
      <div className='w-1/2'>
        <h2 className="text-white text-2xl font-semibold mb-4 text-left">Get a free quote today</h2>
        <p className="text-purple-100 mb-8 text-left">
          Nam sapien feugiat id ipsum quam massa. Convallis est morbi semper posuere arcu diam facilisi aliquam sit. Sit tincidunt turpis.
        </p>
        </div>
        <form className="flex justify-center gap-4 items-center">
          <input 
            type="email" 
            placeholder="Your email" 
            value={isEmpty}
            onChange={handleChange}
            required 
            className="px-4 py-2 rounded-lg h-11 border-none outline-none focus:ring-2 focus:ring-purple-300"
          />
          <Link href="/about#contactform"> 
          <button 
            type="submit" 
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Contact us
          </button>
          </Link>
        </form>
      </div>
      
    </div>
  );
};


