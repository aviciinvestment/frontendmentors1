import React from "react";
import Weathercondition from "../ui/Weathercondition";

const LandingComponent2WeatherCondition = () => {
  return (
    <div className="grid sm:grid-cols-4 mt-8 mb-12 grid-cols-2 gap-[24px]">
      <Weathercondition condition={"Feels Like"} value={"18"} />
      <Weathercondition condition={"Humidity"} value={"46%"} />
      <Weathercondition condition={"Wind"} value={"14km/h"} />
      <Weathercondition condition={"precipitation"} value={"0 mm"} />
    </div>
  );
};

export default LandingComponent2WeatherCondition;
