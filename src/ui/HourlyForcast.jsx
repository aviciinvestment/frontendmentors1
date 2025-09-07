import React from "react";

const HourlyForcast = ({ condition, time, degree }) => {
  return (
    <div className="p-2 flex justify-between items-center text-white bg-gray-500 contrast-75  brightness-75  rounded-md ">
      <div className="flex gap-4 text-left items-center">
        <img className="size-9" src={condition} alt="" />
        <div>{time}</div>
      </div>
      <div>
        {degree}
        <sup>o</sup>
      </div>
    </div>
  );
};

export default HourlyForcast;
