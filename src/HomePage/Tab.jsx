import React from "react";
import { FaUser } from "react-icons/fa6";

const Tab = ({ title, logo, children }) => {
  return (
    <div className="text-black font-normal cursor-pointer p-2 border-l-2 border-blue-950 my-5 hover:bg-blue-100">
      <div className="flex items-center gap-2">
        {logo}
        <h1 className="font-bold self-center">{title}</h1>
      </div>
      <p>{children}</p>
    </div>
  );
};

export default Tab;
