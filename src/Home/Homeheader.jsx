import React from "react";
import image from "../assets/Cloud Airplane Logo.svg";
import name from "../assets/NAME.svg";
import { Fa500Px, FaBars } from "react-icons/fa";
import { FaCpanel } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homeheader = ({ setShownav, shownav }) => {
  return (
    <div>
      <div className="bg-yellow-400">
        <div className="w-[90%] m-auto flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <img className="size-7" src={image} alt="" />
              <img className="size-24" src={name} alt="" />
            </div>
          </Link>
          <div
            onClick={() => {
              setShownav(!shownav);
            }}
          >
            {shownav ? (
              <FaXbox className="size-5 transition-all" />
            ) : (
              <FaBars className="size-5 transition-all" />
            )}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Homeheader;
