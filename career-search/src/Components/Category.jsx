import React from "react";

const Category = ({ category }) => {
  return (
    <div className="px-4 bg-slate-100 text-center py-4 rounded-md w-60 text-slate-700">
      <img
        src={category.categoryLogo}
        alt="Category Icon"
        className="h-16 w-16 p-3 bg-slate-200 rounded-md mx-auto"
      />
      <h1 className="text-lg font-bold mt-3 mb-2">{category.categoryName}</h1>
      <h1 className="">{category.jobsAvailable} Jobs Available</h1>
    </div>
  );
};

export default Category;
