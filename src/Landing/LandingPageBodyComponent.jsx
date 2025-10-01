import React from "react";
import LandingComponent1 from "./LandingComponent1";
import LandingComponent2WeatherCondition from "./LandingComponent2WeatherCondition";
import LandingPage3Forcast from "./LandingPage3Forcast";
import LandingComponent4HourlyForcast from "./LandingComponent4HourlyForcast";

const LandingPageBodyComponent = ({ weatherApi, landingCountry }) => {
  return (
    <main>
      <div className="w-full container mx-auto ">
        <div className="flex flex-col md:flex-row justify-center  md:gap-12 gap-8">
          <div className="flex flex-col justify-start  md:gap-12 gap-8">
            <div className="flex flex-col  justify-center  md:gap-8 gap-4">
              <LandingComponent1
                weatherApi={weatherApi}
                landingCountry={landingCountry}
              />
              <LandingComponent2WeatherCondition weatherApi={weatherApi} />{" "}
            </div>
            <LandingPage3Forcast weatherApi={weatherApi} />
          </div>

          <div className="">
            <LandingComponent4HourlyForcast weatherApi={weatherApi} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandingPageBodyComponent;
