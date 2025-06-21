import React from "react";
import { FaMoneyCheck } from "react-icons/fa6";

const AboutItem = () => {
  return (
    <div className="py-[50px] text-center flex flex-col items-center">
      <div className="bg-green-800 p-2 rounded-full w-[60px] flex">
        <FaMoneyCheck className="size-12 bg-green-700 p-1 self-center rounded-full" />
      </div>
      <h1 className="text-white">Checkings account</h1>
      <p className="text-gray-400">
        fastiute gd ediet kwam boty <br /> drsan gardyydgiuye usulx
      </p>
    </div>
  );
};

export default AboutItem;
