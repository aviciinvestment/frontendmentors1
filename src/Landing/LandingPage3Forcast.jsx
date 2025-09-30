import React, { useEffect, useState } from "react";
import DailyForcast from "../ui/DailyForcast";
import rainy from "../assets/images/icon-rain.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import sunny from "../assets/images/icon-sunny.webp";
import pcloudy from "../assets/images/icon-partly-cloudy.webp";
import storm from "../assets/images/icon-storm.webp";
import snow from "../assets/images/icon-snow.webp";
import fog from "../assets/images/icon-fog.webp";
import dateTimeEditor from "@/util/DateTimeEditor";

const LandingPage3Forcast = ({ weatherApi }) => {
  const [weatherData, SetweatherData] = useState(null);
  useEffect(() => {
    weatherApi.then((Response) => {
      SetweatherData(Response);
    });
  }, [weatherApi]);
  const TemperatureMax = weatherData?.daily.temperature_2m_max.slice(7, 14);
  const TemperatureMin = weatherData?.daily.temperature_2m_min.slice(7, 14);
  const TemperatureTime = weatherData?.daily.time.slice(7, 14);
  const WeatherIcon = [rainy, drizzle, sunny, pcloudy, storm, snow, fog];

  return (
    <div className="flex flex-col gap-5">
      <div className="text-left text-xl">Daily Forcast</div>
      <div className="flex justify-start gap-4 flex-wrap  w-full">
        {TemperatureMax?.map((item, index) => (
          <DailyForcast
            key={index}
            days={dateTimeEditor(TemperatureTime[index]).slice(0, 4)}
            icon={WeatherIcon[index]}
            temp1={
              TemperatureMin[index] +
              weatherData?.daily_units.temperature_2m_min
            }
            temp2={item + weatherData?.daily_units.temperature_2m_min}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage3Forcast;
