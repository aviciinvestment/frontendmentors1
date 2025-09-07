import React from "react";
import DailyForcast from "../ui/DailyForcast";
import rainy from "../assets/images/icon-rain.webp";
import drizzle from "../assets/images/icon-drizzle.webp";
import sunny from "../assets/images/icon-sunny.webp";
import pcloudy from "../assets/images/icon-partly-cloudy.webp";
import storm from "../assets/images/icon-storm.webp";
import snow from "../assets/images/icon-snow.webp";
import fog from "../assets/images/icon-fog.webp";

const LandingPage3Forcast = () => {
  return (
    <div>
      <div className="text-left m-5">Daily Forcast</div>
      <div className="flex flex-wrap justify-between px-4">
        <DailyForcast days={"Tue"} icon={rainy} temp1={"20"} temp2={"14"} />
        <DailyForcast days={"Wed"} icon={drizzle} temp1={"21"} temp2={"15"} />
        <DailyForcast days={"Thu"} icon={sunny} temp1={"24"} temp2={"14"} />
        <DailyForcast days={"Fri"} icon={pcloudy} temp1={"25"} temp2={"13"} />
        <DailyForcast days={"Sat"} icon={storm} temp1={"21"} temp2={"15"} />
        <DailyForcast days={"Sun"} icon={snow} temp1={"25"} temp2={"16"} />
        <DailyForcast days={"Mon"} icon={fog} temp1={"24"} temp2={"15"} />
      </div>
    </div>
  );
};

export default LandingPage3Forcast;
