import React, { createContext, useState } from "react";
import Header from "./Components/Header";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

export const CategoriesContext = createContext([]);
export const JobListsContext = createContext([]);
export const TopFourJobsContext = createContext([]);
export const AppliedJobsContext = createContext([]);
const App = () => {
  const { categories, jobLists, showFirstFourJobs, initialJObs } =
    useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState(initialJObs);
  return (
    <CategoriesContext.Provider value={categories}>
      <JobListsContext.Provider value={jobLists}>
        <TopFourJobsContext.Provider value={showFirstFourJobs}>
          <AppliedJobsContext.Provider value={[appliedJobs, setAppliedJobs]}>
            <Header />
            <Outlet />
            <Footer />
          </AppliedJobsContext.Provider>
        </TopFourJobsContext.Provider>
      </JobListsContext.Provider>
    </CategoriesContext.Provider>
  );
};

export default App;
