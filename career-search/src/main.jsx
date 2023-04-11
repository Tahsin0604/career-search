import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import getData from "./Loaders/getCategoryAndJobData";
import ErrorPage from "./Components/ErrorPage";
import JobDetails from "./Components/JobDetails";
import getJobDetails from "./Loaders/getSingleJob";
import AppliedJobs from "./Components/AppliedJobs";
import Statistics from "./Components/Statistics";
import Blogs from "./Components/Blogs";
import getAssignmentMarks from "./Loaders/getAssignmentMarks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader:getData,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/job/:id",
        element:<JobDetails />,
        loader:getJobDetails
      },
      {
        path:"/applied-jobs",
        element:<AppliedJobs />
      },
      {
        path:"/statistics",
        element:<Statistics />,
        loader:getAssignmentMarks
      },
      {
        path:"/blogs",
        element:<Blogs />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
