import React from "react";
import logo from "../assets/images/logo.svg";
import iconunit from "../assets/images/icon-units.svg";
import DropDown from "./DropDown";
import { RiHomeGearFill } from "react-icons/ri";
const Header = () => {
  return (
    <div className="flex -mt-6 items-center justify-between mx-4 sm:mx-20">
      <div>
        <img className="size-44" src={logo} alt="" />
      </div>
      <div>
        <DropDown iconunit={iconunit}>
          <option value="Units">
            <div>Units</div>
          </option>
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </DropDown>
      </div>
    </div>
  );
};

export default Header;
