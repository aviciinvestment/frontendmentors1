import React from "react";
import image from "../assets/Cloud Airplane Logo.svg";
import name from "../assets/NAME.svg";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homeheader = () => {
  return (
    <div>
      <div className="bg-yellow-400">
        <div className="w-[90%] m-auto flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <img className="size-10" src={image} alt="" />
              <img className="size-24" src={name} alt="" />
            </div>
          </Link>
          <FaBars className="size-7" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Homeheader;
