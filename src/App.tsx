import React from "react";
import "./index.css";
import Signup from "./pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
