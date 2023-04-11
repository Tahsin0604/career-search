import React from 'react';

const Assignment = ({assignment}) => {
  return (
    <div className='flex gap-2 mt-2 '>
      <h1 className='text-slate-700 tracking-wider font-semibold text-xl'>{assignment.name} :</h1>
      <h1 className='text-slate-700 tracking-wider font-semibold text-xl'>{assignment.marks}</h1>
      
    </div>
  );
};

export default Assignment;