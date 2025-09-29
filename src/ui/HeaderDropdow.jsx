import React, { useState } from "react";
import HeaderDropdownComponent from "./HeaderDropdownComponent";

const unit = {
  Imperial: ["Celcuis (C)", "km/h", "Millimetre (mm)"],
  Metric: ["Fahrenheit (F)", "mph", "inches (in)"],
  conditions: ["Temperature", "Wind Speed", "inches (in)"],
};

const HeaderDropdow = () => {
  const [SwitchCondition, SetSwitchCondition] = useState("imperial");
  return (
    <div className="min-w-[214px] cursor-pointer bg-gray-500 px-[8px] py-[6px] rounded-[12px] border-[1px] border-gray-400 contrast-100  brightness-75">
      <button
        onClick={() => {
          if (SwitchCondition == "imperial") {
            SetSwitchCondition("metric");
          } else {
            SetSwitchCondition("imperial");
          }
        }}
        className="px-2 focus:outline-1 focus:outline-offset-2 outline-gray-400 w-full text-left py-[10px] text-base  rounded-xl hover:bg-gray-500 brightness-110  "
      >
        Switch to {SwitchCondition}
      </button>
      <div className="flex flex-col gap-2">
        {unit.Imperial.map((elem, i) => (
          <HeaderDropdownComponent
            key={i}
            Metric={unit.Metric[i]}
            Imperial={elem}
            conditions={unit.conditions[i]}
            switchs={SwitchCondition}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderDropdow;
