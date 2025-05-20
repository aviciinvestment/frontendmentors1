import React from "react";
import { Link } from "react-router-dom";

const HomeNav = ({ setShownav, shownav }) => {
  if (!shownav) return;
  return (
    <div
      onClick={() => {
        setShownav(false);
      }}
      className="font-bold text-white bg-yellow-400 text-center divide-y-[2px] border-t-[1px] border-gray-400 divide-gray-400"
    >
      <Link>
        <div className="text-xs py-2">Login</div>
      </Link>
      <Link to="/about">
        <div className="text-xs py-2">About</div>
      </Link>
    </div>
  );
};

export default HomeNav;
