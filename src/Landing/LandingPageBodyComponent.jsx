import React from "react";
import LandingComponent1 from "./LandingComponent1";
import LandingComponent2WeatherCondition from "./LandingComponent2WeatherCondition";
import LandingPage3Forcast from "./LandingPage3Forcast";
import LandingComponent4HourlyForcast from "./LandingComponent4HourlyForcast";

const LandingPageBodyComponent = () => {
  return (
    <div className="sm:flex items-center w-full justify-between px-2 sm:px-7">
      <div className="w-full basis-[70%]  flex flex-col  justify-center">
        <LandingComponent1 />
        <LandingComponent2WeatherCondition />
        <LandingPage3Forcast />
      </div>
      <LandingComponent4HourlyForcast />
    </div>
  );
};

export default LandingPageBodyComponent;
