import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import Footer from "../ui/Footer";
import Landing from "./Landing";

import Homeheader from "./Homeheader";
/*          <span className="">
            <Link to="/login">Login/Signup</Link>
          </span>*/
const Homepage = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div className="bg-black min-h-lvh">
      <Homeheader />

      <div className=" ">
        <Landing />
      </div>
      <Outlet />
    </div>
  );
};

export default Homepage;
