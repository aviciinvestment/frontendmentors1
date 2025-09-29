import React from "react";
import { RiCheckLine } from "react-icons/ri";

const HeaderDropdownComponent = ({ Metric, switchs, conditions, Imperial }) => {
  return (
    <div
      className={` border-gray-400 py-2 ${
        Imperial == "Millimetre (mm)" ? "border-0" : "border-b-[0.5px]"
      }  `}
    >
      <div className="text-gray-300 text-sm p-1">{conditions}</div>
      <div
        className={`rounded-lg ${
          switchs == "imperial" ? "bg-gray-500 px-2" : ""
        } hover:bg-gray-500 brightness-110 flex justify-between items-center`}
      >
        <div className="text-white px-2 py-[10px]  text-base">{Imperial}</div>
        <div className="text-base px-2">
          {switchs == "imperial" ? <RiCheckLine /> : ""}
        </div>
      </div>
      <div
        className={`rounded-lg ${
          switchs == "metric" ? "bg-gray-500" : ""
        } hover:bg-gray-500 brightness-110 flex justify-between items-center`}
      >
        <div className="text-white px-2 py-[10px] text-base">{Metric}</div>
        <div className="text-base px-2">
          {switchs == "metric" ? <RiCheckLine /> : ""}
        </div>
      </div>
    </div>
  );
};

export default HeaderDropdownComponent;
