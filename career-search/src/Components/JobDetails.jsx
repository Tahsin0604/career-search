import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import {
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addJobs, getJObs } from "../utilities/FakeDB";
import { AppliedJobsContext } from "../App";
import vectorTwo from "/All Images/Vector.png";

const JobDetails = () => {
  const job = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobsContext || []);
  const appliedJObBtn = (newJob) => {
    let temporaryJobs = [];
    const exist = appliedJobs.find(
      (existingJobs) => parseInt(existingJobs.id) === parseInt(newJob.id)
    );
    if(exist){
      toast("Already Applied for this job")
    }
    else{
      temporaryJobs=[...appliedJobs,newJob]
      toast.success("Just Applied")
      setAppliedJobs(temporaryJobs);
      addJobs(newJob.id,newJob.jobTitle)
    }
  };
  return (
    <div>
      <div className="bg-violet-50 relative px-9 py-20">
        <h1 className="text-center heading">Job Details</h1>
        <div className="absolute bottom-0 left-0 ">
          <img src={vectorTwo} className="w-32 " alt=""/>
        </div>
      </div>
      <div className="container py-20">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-4/6 ">
            <h1 className="text-slate-800 font-bold mb-4">
              Job Description:
              <span className="paragraph ml-2">{job.jobDescription}</span>
            </h1>
            <h1 className="text-slate-800 font-bold mb-4">
              Job Responsibility:{" "}
              <span className="paragraph ml-2">{job.jobResponsibility}</span>
            </h1>
            <h1 className="text-slate-800 font-bold">
              Educational Requirements:
            </h1>
            <p className="paragraph mb-4">{job.educationalRequirements}</p>
            <h1 className="text-slate-800 font-bold">Experiences:</h1>
            <p className="paragraph mb-4">{job.experiences}</p>
          </div>
          <div className="flex-grow">
            <div className=" bg-violet-100 px-8 py-6 rounded-md">
              <h1 className="sub-title pb-3  border-b border-solid border-slate-300">
                Job Details
              </h1>
              <div className="flex items-start gap-2 mt-3 ">
                <CurrencyDollarIcon className="h-5 w-5 text-blue-600 mt-1" />
                <h1 className="text-lg text-slate-600 font-semibold">
                  Salary:{" "}
                  <span className="mr-2 text-slate-500">{job.salary}</span>
                </h1>
              </div>
              <div className="flex items-start gap-2 mt-3 ">
                <CalendarDaysIcon className="h-5 w-5 text-blue-600 mt-1" />
                <h1 className="text-lg text-slate-600 font-semibold">
                  Job Title:{" "}
                  <span className="mr-2 text-slate-500">{job.jobTitle}</span>
                </h1>
              </div>
              <h1 className="sub-title mt-7 pb-3  border-b border-solid border-slate-300">
                Contact Information
              </h1>

              <div className="flex items-start gap-2 mt-3 ">
                <PhoneIcon className="h-5 w-5 text-blue-600 mt-1" />
                <h1 className="text-lg text-slate-600 font-semibold">
                  Phone:{" "}
                  <span className="mr-2 text-slate-500">
                    {job?.contactInformation?.phone}
                  </span>
                </h1>
              </div>
              <div className="flex items-start gap-2 mt-3 ">
                <EnvelopeIcon className="h-5 w-5 text-blue-600 mt-1" />
                <h1 className="text-lg text-slate-600 font-semibold">
                  Email:{" "}
                  <span className="mr-2 text-slate-500">
                    {job?.contactInformation?.email}
                  </span>
                </h1>
              </div>
              <div className="flex items-start gap-2 mt-3 ">
                <MapPinIcon className="h-5 w-5 text-blue-600 mt-1" />
                <h1 className="text-lg text-slate-600 font-semibold">
                  Address:{" "}
                  <span className="mr-2 text-slate-500">{job?.location}</span>
                </h1>
              </div>
            </div>
            <button className="btn mt-6 w-full" onClick={()=>appliedJObBtn(job)}>Apply Now</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
