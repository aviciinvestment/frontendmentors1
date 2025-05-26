import React from "react";
import Landingpage from "./Landing/Landingpage";
import LandingHeader from "./Landing/LandingHeader";
import Blogs from "./Blog/Blogs";

const Homepage = () => {
  return (
    <div className="bg-red-50">
      <LandingHeader />
      <Landingpage />
      <Blogs />
    </div>
  );
};

export default Homepage;
