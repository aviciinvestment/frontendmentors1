import React, { useState } from "react";
import LandingPageSearch from "./LandingPageSearch";
import LandingPageBodyComponent from "./LandingPageBodyComponent";
import LandingLoadState from "@/ui/LandingLoadState";

const LandingPageBody = ({ weatherApi, SetWeatherApi }) => {
  const [inputValue, SetInputValue] = useState("");
  const [landingCountry, SetlandingCountry] = useState("");

  return (
    <div className="flex text-center flex-col gap-12 text-white">
      <div className="text-6xl  font-Bricolage_Grotesque font-bold">
        How's the sky looking today?
      </div>
      <LandingPageSearch
        inputValue={inputValue}
        SetInputValue={SetInputValue}
        SetWeatherApi={SetWeatherApi}
        SetlandingCountry={SetlandingCountry}
      />
      {
        <LandingPageBodyComponent
          weatherApi={weatherApi}
          landingCountry={landingCountry}
        />
      }
      {/* {<div className="text-white font-DMSans font-medium text-2xl">
        No search result found!
      </div>} */}{" "}
      {/* { <LandingLoadState />} */}
    </div>
  );
};

export default LandingPageBody;
