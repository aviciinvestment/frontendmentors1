import React from "react";
import { FiBarChart, FiSettings } from "react-icons/fi";
import { IoIosAirplane, IoMdNotificationsOutline } from "react-icons/io";

const LandingHeader = () => {
  return (
    <div className="flex items-center justify-between text-white text-lg font-bold bg-blue-800 p-6">
      <div className="flex items-center">
        <IoIosAirplane className="size-12 sm:size-16" />
      </div>
      <ul className="sm:visible hidden sm:flex basis-[70%] justify-center sm:gap-8">
        <li className="LandingHeaderHover">Home</li>
        <li className="LandingHeaderHover">Blog</li>
        <li className="LandingHeaderHover">About</li>
        <li className="LandingHeaderHover">Address</li>
      </ul>

      <ul className="sm:visible hidden sm:flex basis-[30%] justify-center gap-4">
        <li className="LandingHeaderHover">
          <IoMdNotificationsOutline className=" size-8" />
        </li>
        <li className="LandingHeaderHover self-center">
          <FiSettings className="size-7" />
        </li>
        <li className="LandingHeaderHover">login</li>
      </ul>
      <div>
        <FiBarChart className="size-12 sm:hidden -rotate-90" />
      </div>
    </div>
  );
};

export default LandingHeader;
