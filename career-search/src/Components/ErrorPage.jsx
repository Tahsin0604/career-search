import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaceFrownIcon } from "@heroicons/react/24/outline";

const ErrorPage = () => {
  const {status,error}=useRouteError();
  return (
    <div className='flex flex-col items-center justify-center gap-4 h-screen'>
      <FaceFrownIcon className='h-40 w-40 text-red-700'/>
      <div className='text-center mt-2'>
          <h2 className='font-extrabold  text-9xl text-red-400 '>
            <span className='sr-only'>
              Error 
            </span>
            {status||404}
          </h2>
          <p className='font-semibold  text-2xl md:text-3xl text-slate-700 mt-9 mb-12'>{error?.message}</p>
          <Link to='/' className='btn'>Back to HomePage</Link>
        </div>
      
    </div>
  );
};

export default ErrorPage;