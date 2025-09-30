import React, { useState } from "react";
import Weathercondition from "../ui/Weathercondition";
import { useEffect } from "react";

const LandingComponent2WeatherCondition = ({ weatherApi }) => {
  const [weatherData, SetweatherData] = useState(null);
  useEffect(() => {
    weatherApi.then((Response) => {
      SetweatherData(Response);
    });
  }, [weatherApi]);
  console.log(weatherData);

  return (
    <div className="grid sm:grid-cols-4 mt-8 mb-12 grid-cols-2 gap-[24px]">
      <Weathercondition
        condition={"Feels Like"}
        value={weatherData?.current.temperature_2m + "°"}
      />
      <Weathercondition
        condition={"Humidity"}
        value={weatherData?.current.relative_humidity_2m + "%"}
      />
      <Weathercondition
        condition={"Wind"}
        value={weatherData?.current.wind_speed_10m + "km/h"}
      />
      <Weathercondition
        condition={"precipitation"}
        value={weatherData?.current.precipitation + " mm"}
      />
    </div>
  );
};

export default LandingComponent2WeatherCondition;
