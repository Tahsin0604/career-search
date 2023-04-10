import React, { useContext, useState } from "react";
import Banner from "./Banner";
import { CategoriesContext, JobListsContext, TopFourJobsContext } from "../App";
import Category from "./Category";
import JobCard from "./JobCard";

const Home = () => {
  const [loadAll, setLoadAll] = useState(false);

  const categories = useContext(CategoriesContext);
  const jobLists = useContext(JobListsContext);
  
  const topFourJobs = useContext(TopFourJobsContext);
  return (
    <div>
      {/* Banner section */}
      <Banner />

      {/* Category section */}
      <section className="container py-4">
        <h1 className="heading text-center">Job Category List</h1>
        <p className="paragraph text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-16 gap-4 ">
          {categories.map((category, id) => (
            <Category key={id} category={category} />
          ))}
        </div>
      </section>

      {/* Job List Section */}
      <section className="container py-6">
      <h1 className="heading text-center">Featured Jobs</h1>
        <p className="paragraph text-center mb-9">
        Explore thousands of job opportunities with all the information you need. Its your future
        </p>
        {loadAll ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
            {jobLists.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {topFourJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
            <button onClick={()=>setLoadAll(true)} className="btn mx-auto my-6">See All Jobs</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
