import React, { useEffect, useState } from "react";
import DailyForcast from "../ui/DailyForcast";
import rainy from "../assets/images/icon-rain.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import sunny from "../assets/images/icon-sunny.webp";
import pcloudy from "../assets/images/icon-partly-cloudy.webp";
import storm from "../assets/images/icon-storm.webp";
import snow from "../assets/images/icon-snow.webp";
import fog from "../assets/images/icon-fog.webp";
import overcast from "../assets/images/icon-overcast.webp";
import dateTimeEditor from "@/util/DateTimeEditor";

const LandingPage3Forcast = ({ weatherApi }) => {
  const [weatherData, SetweatherData] = useState(null);
  function getWeatherCategory(code) {
    switch (true) {
      case code === 0:
        return sunny;

      case [1, 2].includes(code):
        return pcloudy; // partly or mainly clear

      case code === 3:
        return overcast;

      case [45, 48].includes(code):
        return fog;

      case [51, 53, 55, 56, 57].includes(code):
        return drizzle;

      case [61, 63, 65, 66, 67, 80, 81, 82].includes(code):
        return rainy;

      case [71, 73, 75, 77, 85, 86].includes(code):
        return snow;

      case [95, 96, 99].includes(code):
        return storm;

      default:
        return sunny; // fallback
    }
  }

  useEffect(() => {
    weatherApi.then((Response) => {
      SetweatherData(Response);
    });
  }, [weatherApi]);
  const TemperatureMax = weatherData?.daily?.temperature_2m_max?.slice(7, 14);
  const TemperatureMin = weatherData?.daily?.temperature_2m_min?.slice(7, 14);
  const TemperatureTime = weatherData?.daily?.time?.slice(7, 14);
  const WeatherIcon = [];

  weatherData?.daily?.weather_code?.slice(7, 14).map((code) => {
    WeatherIcon.push(getWeatherCategory(code));
  });

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
              weatherData?.daily_units?.temperature_2m_min
            }
            temp2={item + weatherData?.daily_units?.temperature_2m_min}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage3Forcast;
