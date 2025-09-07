import React from "react";
import Weathercondition from "../ui/Weathercondition";

const LandingComponent2WeatherCondition = () => {
  return (
    <div className="flex flex-wrap justify-between m-4">
      <Weathercondition condition={"Feels Like"} value={"18"} />
      <Weathercondition condition={"Humidity"} value={"46%"} />
      <Weathercondition condition={"Wind"} value={"14km/h"} />
      <Weathercondition condition={"precipitation"} value={"0 mm"} />
    </div>
  );
};

export default LandingComponent2WeatherCondition;
