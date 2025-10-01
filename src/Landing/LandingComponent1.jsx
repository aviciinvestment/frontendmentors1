import { useEffect, useState } from "react";

import dateTimeEditor from "@/util/DateTimeEditor";
import rainy from "../assets/images/icon-rain.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import sunny from "../assets/images/icon-sunny.webp";
import pcloudy from "../assets/images/icon-partly-cloudy.webp";
import storm from "../assets/images/icon-storm.webp";
import snow from "../assets/images/icon-snow.webp";
import fog from "../assets/images/icon-fog.webp";
import overcast from "../assets/images/icon-overcast.webp";
const LandingComponent1 = ({ weatherApi, landingCountry }) => {
  const [temperature, setTemperature] = useState("");
  const [date, setDate] = useState("");
  const [setunit, setSetunit] = useState("°C");
  const [weatherIcon, setWeatherIcon] = useState(null);

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
      setTemperature(Response?.current?.temperature_2m);
      setDate(Response?.current?.time);
      setSetunit(Response?.current_units?.temperature_2m);
      setWeatherIcon(getWeatherCategory(Response?.current?.weather_code));
    });
  }, [weatherApi]);

  return (
    <div
      className="bg-[url('./assets/images/bg-today-small.svg')] sm:bg-[url('./assets/images/bg-today-large.svg')] bg-no-repeat items-center contrast-50 brightness-95
         rounded-3xl bg-cover sm:flex-row flex  justify-between flex-col py-20 px-6"
    >
      <div className="text-center sm:text-left">
        <h1 className="text-3xl uppercase text-white font-semibold">
          {landingCountry == "" ? "Abuja" : landingCountry}
        </h1>
        <p className="text-xl text-gray-300">{dateTimeEditor(date)}</p>
      </div>
      <div className="flex items-center ">
        <img className="size-32" src={weatherIcon} alt="" />
        <div className="text-6xl  font-DMSans font-medium">
          {temperature}
          {setunit}
        </div>
      </div>
    </div>
  );
};

export default LandingComponent1;
