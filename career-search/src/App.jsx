import React, { createContext } from "react";
import Header from "./Components/Header";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const CategoriesContext = createContext([]);
export const JobListsContext = createContext([]);
export const TopFourJobsContext = createContext([]);
const App = () => {
  const { categories, jobLists, showFirstFourJobs } = useLoaderData();
  console.log(categories, jobLists, showFirstFourJobs);
  return (
    <CategoriesContext.Provider value={categories}>
      <JobListsContext.Provider value={jobLists}>
        <TopFourJobsContext.Provider value={showFirstFourJobs}>
          <Header />
          <Outlet />
        </TopFourJobsContext.Provider>
      </JobListsContext.Provider>
    </CategoriesContext.Provider>
  );
};

export default App;
