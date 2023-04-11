import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import vectorOne from "/All Images/Vector-1.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headingVector, setHeadingVector] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    if (pathname !== "/") {
      setHeadingVector(true);
    } else {
      setHeadingVector(false);
    }
  }, [pathname]);

  return (
    <div className="bg-violet-50 relative">
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
                to="/statistics"
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
          <Link
            to="/"
            className={`btn hidden lg:inline-flex ${
              headingVector ? "z-10" : "z-auto"
            }`}
          >
            Start Applying
          </Link>

          <button
            className={`lg:hidden ${headingVector ? "z-10" : "z-auto"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3BottomRightIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <ul
          className={`flex-col space-y-1 lg:hidden mt-4 divide-y-2 divide-slate-300 bg-gray-50 p-2 rounded-md ${
            isOpen ? "flex" : "hidden"
          } `}
        >
          <li>
            <NavLink
              to="/statistics" onClick={() => setIsOpen(!isOpen)}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/applied-jobs" onClick={() => setIsOpen(!isOpen)}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs" onClick={() => setIsOpen(!isOpen)}
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
          <li className="py-5">
            <Link to="/" className="btn lg:hidden " onClick={() => setIsOpen(!isOpen)}>
              Start Applying
            </Link>
          </li>
        </ul>
      </div>
      {headingVector && (
        <div className="absolute top-0 right-0 ">
          <img src={vectorOne} className="w-32 " />
        </div>
      )}
    </div>
  );
};

export default Header;
