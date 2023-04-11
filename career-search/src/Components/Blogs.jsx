import React from 'react';

const Blogs = () => {
  return (
    <div >
      <div className="bg-violet-50 px-9 py-20">
        <h1 className="text-center heading">Blogs</h1>
      </div>
      <div className='container py-20'>

        <h1 className='sub-title'>1.When should you use context API?</h1>
        <p className='paragraph mt-2'>When some data needs to accessed by many other components, we create a context API at parent components and use it as an antenna by sending the in it.</p>

        <h1 className='sub-title mt-8'>2.What is a custom hook?</h1>
        <p className='paragraph mt-2'>A custom hook is a special JavaScript function whose name starts with 'use'. It is a mechanism to reuse other hooks</p>


        <h1 className='sub-title mt-8'>3.What is useRef?</h1>
        <p className='paragraph mt-2'>useRef is a hook that lets us reference a value that need not to required rendering.</p>


        
      </div>
      
    </div>
  );
};

export default Blogs;