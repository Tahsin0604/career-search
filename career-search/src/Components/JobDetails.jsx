import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const job=useLoaderData();
  console.log(job);
  return (
    <div>
      <h1>{job.id}</h1>
    </div>
  );
};

export default JobDetails;