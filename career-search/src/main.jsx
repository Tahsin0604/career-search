import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import getData from "./Loaders/getCategoryAndJobData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader:getData,
    children:[
      {
        path:"/",
        element:<Home />,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
