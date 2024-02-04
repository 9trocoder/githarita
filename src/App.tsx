import React from "react";
import "./App.css";
import Signup from "./pages/Signup";
import { createBrowserRouter } from "react-router-dom";
import Signin from "./pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

export default router;
