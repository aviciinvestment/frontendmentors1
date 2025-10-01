import React, { useEffect, useState } from "react";
import HourlyForcast from "../ui/HourlyForcast";
import DropDown from "../ui/DropDown";
import sunny from "../assets/images/icon-sunny.webp";
import pcloudy from "../assets/images/icon-partly-cloudy.webp";
import snow from "../assets/images/icon-snow.webp";
import fog from "../assets/images/icon-fog.webp";
//import overcast from "../assets/images/icon-overcast.webp"

const LandingComponent4HourlyForcast = ({ weatherApi }) => {
  const [weatherData, SetweatherData] = useState(null);
  const [selectedDay, SetSelectedDay] = useState("0");
  useEffect(() => {
    weatherApi.then((Response) => {
      SetweatherData(Response);
    });
  }, [weatherApi]);
  // each temperature represents the temperature of each day
  const Temperature8 = weatherData?.hourly?.temperature_2m?.slice(168, 192);
  const Temperature9 = weatherData?.hourly?.temperature_2m?.slice(192, 216);
  const Temperature10 = weatherData?.hourly?.temperature_2m?.slice(216, 240);
  const Temperature11 = weatherData?.hourly?.temperature_2m?.slice(240, 264);
  const Temperature12 = weatherData?.hourly?.temperature_2m?.slice(264, 288);
  const Temperature13 = weatherData?.hourly?.temperature_2m?.slice(288, 312);
  const Temperature14 = weatherData?.hourly?.temperature_2m?.slice(312, 336);
  //to change different days
  const Temperature = [
    Temperature8,
    Temperature9,
    Temperature10,
    Temperature11,
    Temperature12,
    Temperature13,
    Temperature14,
  ];
  const TemperatureTime = weatherData?.hourly?.time?.slice(0, 24);
  const WeatherIcon = [
    sunny,
    pcloudy,
    snow,
    fog,
    sunny,
    pcloudy,
    snow,
    fog,
    sunny,
    pcloudy,
    snow,
    fog,
    fog,
    snow,
    sunny,
    pcloudy,
    snow,
    fog,
    sunny,
    pcloudy,
    snow,
    fog,
    sunny,
    sunny,
  ];

  function dateFormat(date) {
    let data = new Date(date);
    date = data.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return date;
  }
  return (
    <div className="bg-gray-500 mx-auto  overflow-y-scroll contrast-100 h-[500px]   brightness-75 w-full  rounded-2xl p-5 flex flex-col gap-2">
      <div className="flex w-full py-2 justify-between">
        <div className="text-left">Hourly forecast</div>
        <div>
          <DropDown SetSelectedDay={SetSelectedDay}>
            <option value="0">Monday</option>
            <option value="1">Tuesday</option>
            <option value="2">Wednesday</option>
            <option value="3">Thursday</option>
            <option value="4">Friday</option>
            <option value="5">Saturday</option>
            <option value="6">Sunday</option>
          </DropDown>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {Temperature8?.map((_, index) => (
          <HourlyForcast
            condition={WeatherIcon[index]}
            key={index}
            time={dateFormat(TemperatureTime[index])}
            degree={Temperature[Number(selectedDay)][index]}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingComponent4HourlyForcast;
