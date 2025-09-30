import React, { useEffect, useState } from "react";
import HeaderDropdownComponent from "./HeaderDropdownComponent";
import { FetchApi } from "@/util/ApiService";
const units = {
  Imperial: ["Celcuis (C)", "km/h", "Millimetre (mm)"],
  Metric: ["Fahrenheit (F)", "mph", "inches (in)"],
  conditions: ["Temperature", "Wind Speed", "inches (in)"],
};

const HeaderDropdow = ({
  Setunit,
  SetWeatherApi,
  unit,
  SetlandingCountry,
  SettoggleDropDown,
}) => {
  const [SwitchCondition, SetSwitchCondition] = useState("imperial");
  useEffect(() => {
    Setunit(SwitchCondition);
  }, [Setunit, SwitchCondition]);

  return (
    <div className="min-w-[214px] cursor-pointer bg-gray-500 px-[8px] py-[6px] rounded-[12px] border-[1px] border-gray-400 contrast-100  brightness-75">
      <button
        onClick={() => {
          SetlandingCountry("Abuja");
          SetWeatherApi(FetchApi("Abuja", unit));
          if (SwitchCondition == "imperial") {
            SetSwitchCondition("metric");
          } else {
            SetSwitchCondition("imperial");
          }
          SettoggleDropDown(false);
        }}
        className="px-2 focus:outline-1 focus:outline-offset-2 outline-gray-400 w-full text-left py-[10px] text-base  rounded-xl hover:bg-gray-500 brightness-110  "
      >
        Switch to {SwitchCondition}
      </button>
      <div className="flex flex-col gap-2">
        {units.Imperial.map((elem, i) => (
          <HeaderDropdownComponent
            key={i}
            Metric={units.Metric[i]}
            Imperial={elem}
            conditions={units.conditions[i]}
            switchs={SwitchCondition}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderDropdow;
