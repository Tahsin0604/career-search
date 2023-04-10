import React, { createContext } from 'react';
import Header from './Components/Header';
import { useLoaderData } from "react-router-dom";
import { Outlet } from 'react-router-dom';

export const CategoriesContext=createContext([]);
const App = () => {
  const categories = useLoaderData();
  return (
    
      <CategoriesContext.Provider value={categories}>
        <Header />
        <Outlet />
      </CategoriesContext.Provider>
    
  );
};

export default App;