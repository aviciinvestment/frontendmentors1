import React from "react";
import AboutItem from "./AboutItem";
import Tab from "./Tab";
import { FaUser } from "react-icons/fa6";

const HomeAbout = () => {
  return (
    <div className="bg-green-950 rounded-t-3xl text-green-400 text-center font-bold pt-[30px] ">
      <div>
        <h1 className=" ">why swift?</h1>
        <div className="text-[20px] text-white">
          The Only FinTech App <br />
          you ever Know
        </div>
        <p className="text-gray-500 font-normal">
          our online banking platform is user friendly and easy to navigate
        </p>
      </div>
      <div className="sm:flex justify-around">
        <AboutItem />
        <AboutItem />
        <AboutItem />
        <AboutItem />
      </div>
      <div className="bg-white text-left p-3 sm:grid grid-cols-2">
        <div className="">
          <div>
            <h1 className="text-[30px] text-green-950">
              Super convenient online banking
            </h1>
            <p className="text-black">
              You can view your accont balances, transaction history and
              statements. <br /> aroundeven set up custom alerts to help you
              stay on top of your finnces.
            </p>
          </div>
          <div>
            <Tab />
            <Tab />
            <Tab />
          </div>
        </div>
        <div className="text-black">
          <div className=" bg-gray-200 p-3">
            <div className="bg-white shadow-sm shadow-gray-200 border-[1px] border-gray-200 rounded-lg p-2 flex flex-col gap-4">
              <div className="flex justify-around">
                <div className="flex items-center gap-2">
                  <FaUser className="size-11 bg-gray-100 rounded-full" />
                  <h1>Alex Turner</h1>
                  <p>Designer</p>
                </div>
                <p className="bg-green-300 text-xs self-center text-green-950 p-2 rounded-full">
                  completed
                </p>
              </div>
              <div className="flex justify-around text-xs px-11">
                <div>
                  <p className="font-normal">identity no</p>
                  <h1>0013</h1>
                </div>
                <div>
                  <p className="font-normal">date of birth</p>
                  <h1>0013</h1>
                </div>
                <div>
                  <p className="font-normal">Amount</p>
                  <h1>0013</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-gradient-to-b from-green-900 to-green-500 p-4 text-white text-center">
            <h1>You Recieved</h1>
            <button className="bg-white text-green-900 p-2 px-3 rounded-full shadow-sm shadow-gray-600">
              $1000.00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
