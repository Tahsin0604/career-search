import React from 'react';
import banner from '/All Images/banner.png'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='bg-violet-50'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
          <div className='max-w-xl text-slate-600'>
            <h1 className='text-4xl md:text-5xl font-extrabold tracking-wide flex flex-col'>
            <span>One Step</span>
            
            <span className='mt-2'>Closer To Your</span>
            
            <span className='text-violet-400'>Dream Job</span>
            </h1>
            <p className='max-w-md my-10 tracking-wide'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <Link to="/" className='btn'>Get Started</Link>
            
            
            
          </div>
          <img src={banner} alt="banner image" className='max-w-xs md:max-w-lg lg:max-w-xl'/>
        </div>
      </div>
      
    </div>
  );
};

export default Banner;