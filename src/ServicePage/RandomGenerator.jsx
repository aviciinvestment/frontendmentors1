import React from "react";
import HomeHeader from "../HomePage/HomeHeader";
import HomeFooter from "../HomePage/HomeFooter";
import Buttons from "../ui/Buttons";
import { FaLock } from "react-icons/fa6";

const RandomGenerator = () => {
  return (
    <div>
      <HomeHeader />
      <div>
        <div className="flex flex-col justify-center items-center text-center m-6">
          <p className="text-blue-900 font-semibold">design with you in mind</p>
          <h1 className="text-4xl text-blue-950 font-extrabold leading-tight">
            Generate unique <br />
            PIN, CVV
          </h1>
          <p className="text-blue-900 font-semibold">
            Expiry date is the same as your original
          </p>
          <Buttons>
            <div className="flex justify-center items-center gap-2 p-2">
              Generate{" "}
              <FaLock className="bg-blue-900 p-1 rounded-full text-xl text-white" />
            </div>
          </Buttons>
        </div>
      </div>
      <div className="w-4/5 h-96 m-auto border-[1px] shadow-sm shadow-gray-500 rounded-md mb-16 border-gray-500"></div>
      <HomeFooter />
    </div>
  );
};

export default RandomGenerator;
