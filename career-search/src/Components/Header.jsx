import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon,XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div className="bg-violet-50">
      <div className="container py-6 ">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h1 className="text-slate-600 text-3xl font-bold tracking-wider ">
              career
              <span className="font-extrabold  text-violet-800">S</span>
              earch
            </h1>
          </Link>
          <ul className="hidden lg:flex justify-between items-center space-x-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/applied-jobs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <Link to="/" className="btn hidden lg:inline-flex">
            Start Applying
          </Link>

          <button className="lg:hidden" onClick={()=>setIsOpen(!isOpen)}>
            {
              isOpen?<XMarkIcon className="h-6 w-6" />:<Bars3BottomRightIcon className="h-6 w-6" />
            }
          </button>
        </div>
        <ul className={`flex-col space-y-1 mt-4 divide-y-2 divide-slate-300 bg-gray-50 p-2 rounded-md ${isOpen?'flex':'hidden'}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/applied-jobs"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
          <li className="py-5">
            <Link to="/" className="btn lg:hidden ">
              Start Applying
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
