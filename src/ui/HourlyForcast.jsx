import React from "react";

const HourlyForcast = ({ condition, time, degree }) => {
  return (
    <div
      className="pl-3 pr-4 py-3 flex justify-between items-center text-white
     bg-gray-500 contrast-75  brightness-110 w-auto rounded-lg "
    >
      <div className="flex gap-4 brightness-200 text-left items-center">
        <img className="size-10" src={condition} alt="" />
        <div className="text-xl">{time}</div>
      </div>
      <div className="text-lg">
        {degree}
        <sup>o</sup>
      </div>
    </div>
  );
};

export default HourlyForcast;
