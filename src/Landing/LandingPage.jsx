import React, { useState } from "react";
import Header from "../ui/Header";
import LandingPageBody from "./LandingPageBody";
import LandingError from "./LandingError";
import { FetchApi } from "@/util/ApiService";

const LandingPage = () => {
  const [unit, Setunit] = useState("metric");
  const [weatherApi, SetWeatherApi] = useState(FetchApi("Abuja", unit));
  const [Search, SetSearch] = useState("searched");
  const [landingCountry, SetlandingCountry] = useState("");
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
        />
        {
          <LandingPageBody
            Search={Search}
            SetSearch={SetSearch}
            weatherApi={weatherApi}
            SetWeatherApi={SetWeatherApi}
            unit={unit}
            landingCountry={landingCountry}
            SetlandingCountry={SetlandingCountry}
          />
        }
        {/* {<LandingError />} */}
      </div>
    </div>
  );
};

export default LandingPage;
