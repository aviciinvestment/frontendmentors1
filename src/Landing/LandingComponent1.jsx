import React from "react";
import sunny from "../assets/images/icon-sunny.webp";
const LandingComponent1 = () => {
  return (
    <div
      className="bg-[url('./assets/images/bg-today-small.svg')] sm:bg-[url('./assets/images/bg-today-large.svg')] bg-no-repeat items-center contrast-50 brightness-95
         rounded-3xl bg-cover sm:flex-row flex justify-between flex-col m-7 py-20 px-6"
    >
      <div className="text-left">
        <h1 className="text-3xl font-semibold">Berlin, Germany</h1>
        <p className="text-sm text-gray-300">Tuesday, Aug 5, 2025</p>
      </div>
      <div className="flex items-center ">
        <img className="size-28" src={sunny} alt="" />
        <div className="text-6xl font-semibold">
          20<sup>o</sup>
        </div>
      </div>
    </div>
  );
};

export default LandingComponent1;
