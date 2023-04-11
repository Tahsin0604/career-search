import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const AppliedJobCard = ({ job }) => {
  return (
    <div className="my-4 py-3 px-4 border border-solid border-slate-300 rounded-md flex items-center justify-between flex-col md:flex-row gap-4 ">
      <div className="bg-slate-200 h-40 flex items-center rounded-md">
      <img src={job.companyLogo} alt="" className="w-32 px-4 " />
      </div>
      
      <div className="flex-grow flex flex-col items-center md:items-start">
        <h1 className="text-slate-800 font-bold text-lg mt-4">
          {job.jobTitle}
        </h1>
        <p className="text-slate-500 font-semibold mt-2">{job.companyName}</p>
        <div className="flex items-center gap-2 my-3">
          <h1 className="tag">{job.remoteOrOnsite}</h1>
          <h1 className="tag">{job.fulltimeOrPartTime}</h1>
        </div>
        <div className="flex items-center gap-5 text-slate-500 font-semibold mb-7">
          <div className="flex items-center gap-1">
            <MapPinIcon className="h-5 w-5 " />
            <h1>{job.location}</h1>
          </div>
          <div className="flex items-center gap-1">
            <CurrencyDollarIcon className="h-5 w-5" />
            <h1>
              Salary:<span>{job.salary}</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="my-2">
        <Link to={`../job/${job.id}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default AppliedJobCard;
