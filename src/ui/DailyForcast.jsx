import React from "react";

const DailyForcast = ({ icon, temp1, temp2, days }) => {
  return (
    <div className="flex flex-col justify-center bg-gray-500 contrast-100  brightness-75  rounded-xl min-w-32 flex-grow max-w-40 w-auto p-3">
      <div className="text-white text-lg">{days}</div>
      <div className="self-center">
        <img className="size-16" src={icon} alt="" />
      </div>
      <div className="text-lg text-white flex justify-between">
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
