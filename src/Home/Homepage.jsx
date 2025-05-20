import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import Footer from "../ui/Footer";
import Landing from "./Landing";

import Homeheader from "./Homeheader";
import HomeNav from "./HomeNav";

/*          <span className="">
            <Link to="/login">Login/Signup</Link>
          </span>*/
const Homepage = () => {
  const [shownav, setShownav] = useState(false);

  return (
    <div className="bg-black min-h-lvh">
      <Homeheader setShownav={setShownav} shownav={shownav} />
      <HomeNav setShownav={setShownav} shownav={shownav} />

      <div className=" ">
        <Landing />
      </div>
      <Outlet />
    </div>
  );
};

export default Homepage;
