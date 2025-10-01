import React, { useState } from "react";
import LandingPageSearch from "./LandingPageSearch";
import LandingPageBodyComponent from "./LandingPageBodyComponent";
import LandingLoadState from "@/ui/LandingLoadState";

import { FetchApi } from "@/util/ApiService";
const LandingPageBody = ({
  weatherApi,
  SetWeatherApi,
  unit,
  Search,
  SetSearch,
  landingCountry,
  SetlandingCountry,
}) => {
  const [inputValue, SetInputValue] = useState("");
  const [SearchedThrough, SetSearchedThrough] = useState(true);

  return (
    <div className="flex text-center flex-col gap-12 md:gap-16 text-white">
      <div className="text-6xl  font-Bricolage_Grotesque font-bold">
        How's the sky looking today?
      </div>
      <LandingPageSearch
        Search={Search}
        SetSearch={SetSearch}
        inputValue={inputValue}
        SetInputValue={SetInputValue}
        SetWeatherApi={SetWeatherApi}
        unit={unit}
        SetlandingCountry={SetlandingCountry}
        SetSearchedThrough={SetSearchedThrough}
      />
      {SearchedThrough ? (
        Search == "searching" ? (
          <LandingLoadState />
        ) : (
          <LandingPageBodyComponent
            weatherApi={weatherApi}
            landingCountry={landingCountry}
          />
        )
      ) : (
        <div className="text-white font-DMSans font-medium text-2xl">
          No search result found!
        </div>
      )}
      {/* { <LandingLoadState />} */}
    </div>
  );
};

export default LandingPageBody;
