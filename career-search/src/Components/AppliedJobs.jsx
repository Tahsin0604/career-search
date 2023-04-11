import React, { useContext, useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import AppliedJobCard from "./AppliedJobCard";
import { AppliedJobsContext } from "../App";
import vectorTwo from "/All Images/Vector.png";
const AppliedJobs = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobsContext || []);
  const [appliedList, setAppliedList] = useState(appliedJobs);
  

  const filterJobs = (filter) => {
    if(filter!=="Default"){
      const temporaryList = appliedJobs.filter(
        (job) => job.remoteOrOnsite === filter
      );
      setAppliedList(temporaryList);
    }
    else{
      setAppliedList(appliedJobs);
    }
    setFilterOpen(!filter);
  };
  return (
    <div>
      <div className="bg-violet-50 relative px-9 py-20">
        <h1 className="text-center heading">Applied Jobs</h1>
        <div className="absolute bottom-0 left-0 ">
          <img src={vectorTwo} className="w-32 " alt=""/>
        </div>
      </div>
      <div className="container py-20">
        <div className="flex justify-end w-full">
          <div>
            <div
              className="flex items-center gap-3 px-6 py-2 border border-solid border-slate-400 rounded-md cursor-pointer"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <h1>Filter By</h1>
              <ChevronDownIcon className="h-5 w-5 " />
            </div>
            {filterOpen && (
              <ul className="px-5 py-2 border border-solid border-slate-400 rounded-md mt-1 ">
                <li
                  className="pb-2 px-1 border-b border-solid border-slate-400 cursor-pointer"
                  onClick={() => filterJobs("Remote")}
                >
                  Remote
                </li>
                <li
                  className="py-2 px-1 border-b border-solid border-slate-400 cursor-pointer"
                  onClick={() => filterJobs("Onsite")}
                >
                  Onsite
                </li>
                <li
                  className="pt-2 px-1 cursor-pointer"
                  onClick={() => filterJobs("Default")}
                >
                  Default
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="mt-4">
          {appliedList.map((job) => (
            <AppliedJobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
