import React from 'react';
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Tooltip } from 'recharts';
import Assignment from './Assignment';


const Statistics = () => {
  const assignmentMarks = useLoaderData();
  console.log(assignmentMarks);
  return (
    <div >
      <div className="bg-violet-50 px-9 py-20">
        <h1 className="text-center heading">Statistics</h1>
      </div>
      <div className='container py-20 '>
        <div className='flex justify-center flex-col items-center md:flex-row'>
          <div className='text-center'>
            {
              assignmentMarks.map(assignment=><Assignment key={assignment.id} assignment={assignment} />)
            }
          </div>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="marks"
            startAngle={180}
            endAngle={0}
            data={assignmentMarks}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        </div>
     
      </div>
       
    </div>
  );
};

export default Statistics;
