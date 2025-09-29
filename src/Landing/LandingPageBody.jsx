import React from "react";
import LandingPageSearch from "./LandingPageSearch";
import LandingPageBodyComponent from "./LandingPageBodyComponent";
import LandingLoadState from "@/ui/LandingLoadState";

const LandingPageBody = ({ weatherApi, SetWeatherApi }) => {
  return (
    <div className="flex text-center flex-col gap-12 text-white">
      <div className="text-6xl  font-Bricolage_Grotesque font-bold">
        How's the sky looking today?
      </div>
      <LandingPageSearch SetWeatherApi={SetWeatherApi} />
      {<LandingPageBodyComponent weatherApi={weatherApi} />}
      {/* {<div className="text-white font-DMSans font-medium text-2xl">
        No search result found!
      </div>} */}{" "}
      {/* { <LandingLoadState />} */}
    </div>
  );
};

export default LandingPageBody;
