import React from "react";
import HourlyForcast from "../ui/HourlyForcast";
import DropDown from "../ui/DropDown";
import sunny from "../assets/images/icon-sunny.webp";
import pcloudy from "../assets/images/icon-partly-cloudy.webp";
import snow from "../assets/images/icon-snow.webp";
import fog from "../assets/images/icon-fog.webp";
import overcast from "../assets/images/icon-overcast.webp";

const LandingComponent4HourlyForcast = () => {
  return (
    <div className="bg-gray-500 contrast-100   brightness-75 w-full  rounded-2xl p-5 flex flex-col gap-2">
      <div className="flex w-full py-2 justify-between">
        <div className="text-left">Hourly forecast</div>
        <div>
          <DropDown>
            <option value="">Monday</option>
            <option value="">Tuesday</option>
            <option value="">Wednesday</option>
            <option value="">Thursday</option>
            <option value="">Friday</option>
            <option value="">Saturday</option>
            <option value="">Sunday</option>
          </DropDown>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <HourlyForcast condition={overcast} time={"3 PM"} degree={"20"} />
        <HourlyForcast condition={pcloudy} time={"4 PM"} degree={"20"} />
        <HourlyForcast condition={sunny} time={"5 PM"} degree={"20"} />
        <HourlyForcast condition={overcast} time={"6 PM"} degree={"19"} />
        <HourlyForcast condition={snow} time={"7 PM"} degree={"18"} />
        <HourlyForcast condition={fog} time={"8 PM"} degree={"18"} />
        <HourlyForcast condition={snow} time={"9 PM"} degree={"17"} />
        <HourlyForcast condition={overcast} time={"10 PM"} degree={"17"} />
      </div>
    </div>
  );
};

export default LandingComponent4HourlyForcast;
