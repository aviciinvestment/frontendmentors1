import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import iconunit from "../assets/images/icon-units.svg";
import {
  RiArrowDownFill,
  RiArrowDownSLine,
  RiHomeGearFill,
} from "react-icons/ri";
import HeaderDropdow from "./HeaderDropdow";

const Header = ({
  unit,
  Setunit,
  SetSearch,
  weatherApi,
  SetWeatherApi,
  landingCountry,
  SetlandingCountry,
}) => {
  const [toggleDropDown, SettoggleDropDown] = useState(false);
  return (
    <div className="flex items-center justify-between mx-4 sm:mx-20">
      <div>
        <img className="size-44" src={logo} alt="" />
      </div>
      <div
        onClick={() => {
          SettoggleDropDown(!toggleDropDown);
        }}
        className="flex text-white cursor-pointer bg-gray-500 contrast-75 brightness-75 items-center
       hover:ring-1 ring-white px-4 rounded-[8px] py-3 gap-[10px]"
      >
        <img className="size-4" src={iconunit} alt="" />
        <div
          className="
         text-white text-base relative cursor-pointer rounded-md
         "
        >
          Units
        </div>
        <RiArrowDownSLine className="text-white text-[16px] cursor-pointer" />
      </div>
      <div
        className={`text-white absolute z-50 ${
          toggleDropDown ? "visible" : "invisible"
        } top-[70px] right-[45px] `}
      >
        <HeaderDropdow
          unit={unit}
          Setunit={Setunit}
          SetSearch={SetSearch}
          SetWeatherApi={SetWeatherApi}
          weatherApi={weatherApi}
          landingCountry={landingCountry}
          SetlandingCountry={SetlandingCountry}
          SettoggleDropDown={SettoggleDropDown}
        />
      </div>
    </div>
  );
};

export default Header;
