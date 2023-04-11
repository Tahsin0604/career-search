import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const AppliedJobs = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div>
      <div className="bg-violet-50 px-9 py-20">
        <h1 className="text-center heading">Applied Jobs</h1>
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
                <li className="pb-2 px-1 border-b border-solid border-slate-400 cursor-pointer">
                  Remote
                </li>
                <li className="pt-2 px-1 cursor-pointer">Onsite</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
