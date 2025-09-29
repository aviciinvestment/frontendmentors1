import React from "react";
import LandingComponent1 from "./LandingComponent1";
import LandingComponent2WeatherCondition from "./LandingComponent2WeatherCondition";
import LandingPage3Forcast from "./LandingPage3Forcast";
import LandingComponent4HourlyForcast from "./LandingComponent4HourlyForcast";

const LandingPageBodyComponent = ({ weatherApi }) => {
  return (
    <main>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 pt-[48px] md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <LandingComponent1 weatherApi={weatherApi} />
            <LandingComponent2WeatherCondition />
            <LandingPage3Forcast />
          </div>
          <div className="col-span-1 ">
            <LandingComponent4HourlyForcast />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPageBodyComponent;
