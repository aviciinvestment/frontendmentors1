import React from "react";
import Header from "../ui/Header";
import LandingPageBody from "./LandingPageBody";

const LandingPage = () => {
  return (
    <div className="bg-blue-950 sm:h-screen brightness-105 contrast-200">
      <Header />
      <LandingPageBody />
    </div>
  );
};

export default LandingPage;
