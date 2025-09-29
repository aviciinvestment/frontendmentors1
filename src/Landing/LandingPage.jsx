import React from "react";
import Header from "../ui/Header";
import LandingPageBody from "./LandingPageBody";
import LandingError from "./LandingError";

const LandingPage = () => {
  return (
    <div className=" bg-blue-950 min-h-screen brightness-105 contrast-200">
      <div className="font-DMSans">
        <Header />
        {<LandingPageBody />}
        {/* {<LandingError />} */}
      </div>
    </div>
  );
};

export default LandingPage;
