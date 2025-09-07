import React from "react";
import LandingPageSearch from "./LandingPageSearch";
import LandingPageBodyComponent from "./LandingPageBodyComponent";

const LandingPageBody = () => {
  return (
    <div className="flex text-center flex-col  text-white">
      <div className="text-4xl font-semibold">How's the sky looking today?</div>
      <LandingPageSearch />
      <LandingPageBodyComponent />
    </div>
  );
};

export default LandingPageBody;
