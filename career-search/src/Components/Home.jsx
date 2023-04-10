import React, { useContext } from "react";
import Banner from "./Banner";
import { CategoriesContext } from "../App";
import Category from "./Category";

const Home = () => {
  
  const categories=useContext(CategoriesContext);
  return (
    <div>
      <Banner />
      <section className="container py-4">
        <h1 className="heading text-center">Job Category List</h1>
        <p className="paragraph text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center mt-16 gap-4 ">
          {categories.map((category,id) => <Category key={id} category={category} /> )}
        </div>
      </section>
    </div>
  );
};

export default Home;
