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
  apiState,
}) => {
  const [toggleDropDown, SettoggleDropDown] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between ">
        <div>
          <img className="sm:size-44 size-32" src={logo} alt="" />
        </div>
        <div
          onClick={() => {
            SettoggleDropDown(!toggleDropDown);
          }}
          className="flex text-white cursor-pointer bg-gray-500 contrast-75 brightness-75 items-center
       hover:ring-1 ring-white px-4 rounded-lg py-3 gap-3"
        >
          <img className="size-4" src={iconunit} alt="" />
          <div
            className="
         text-white text-base cursor-pointer rounded-md
         "
          >
            Units
          </div>
          <RiArrowDownSLine className="text-white text-lg cursor-pointer" />
        </div>
      </div>
      <div
        className={`text-white absolute z-50 ${
          toggleDropDown ? "visible" : "invisible"
        }  right-4 sm:right-6 md:right-28`}
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
          apiState={apiState}
        />
      </div>
    </div>
  );
};

export default Header;
