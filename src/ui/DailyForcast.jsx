import React from "react";

const DailyForcast = ({ icon, temp1, temp2, days }) => {
  return (
    <div className="flex flex-col justify-center bg-gray-500 contrast-100  brightness-75  rounded-xl m-2 w-[27%] sm:w-[12%] p-2">
      <div className="text-gray-300">{days}</div>
      <div className="self-center">
        <img className="size-16" src={icon} alt="" />
      </div>
      <div className="text-sm text-gray-300 flex justify-between">
        <div>
          {temp1}
          <sup>o</sup>
        </div>
        <div>
          {temp2}
          <sup>o</sup>
        </div>
      </div>
    </div>
  );
};

export default DailyForcast;
