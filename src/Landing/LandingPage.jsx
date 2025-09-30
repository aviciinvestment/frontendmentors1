import React, { useEffect, useState } from "react";
import Header from "../ui/Header";
import LandingPageBody from "./LandingPageBody";
import LandingError from "./LandingError";
import { FetchApi } from "@/util/ApiService";
import { searchLocations } from "@/util/ApiService";

const LandingPage = () => {
  const [unit, Setunit] = useState("metric");
  const [weatherApi, SetWeatherApi] = useState(FetchApi("Abuja", unit));
  const [Search, SetSearch] = useState("searched");
  const [landingCountry, SetlandingCountry] = useState("");
  const [error, Seterror] = useState(null);
  const [apiState, SetApiState] = useState(true);

  useEffect(() => {
    weatherApi.then((response) => {
      if (response == "error") {
        SetApiState(false);
        return;
      }
      SetApiState(true);
    });

    searchLocations("lon").then((response) => {
      if (response == "error") {
        Seterror(true);
      } else {
        Seterror(false);
      }
    });
  }, [weatherApi]);

  return (
    <div className=" bg-blue-950 min-h-screen brightness-105 contrast-200">
      <div className="font-DMSans">
        <Header
          weatherApi={weatherApi}
          SetWeatherApi={SetWeatherApi}
          unit={unit}
          Setunit={Setunit}
          SetSearch={SetSearch}
          landingCountry={landingCountry}
          SetlandingCountry={SetlandingCountry}
          apiState={apiState}
        />
        {error ? (
          <LandingError />
        ) : (
          <LandingPageBody
            Search={Search}
            SetSearch={SetSearch}
            weatherApi={weatherApi}
            SetWeatherApi={SetWeatherApi}
            unit={unit}
            landingCountry={landingCountry}
            SetlandingCountry={SetlandingCountry}
          />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
