import React, { useState } from "react";
import Header from "../ui/Header";
import LandingPageBody from "./LandingPageBody";
import LandingError from "./LandingError";
import { FetchApi } from "@/util/ApiService";

const LandingPage = () => {
  const [weatherApi, SetWeatherApi] = useState(FetchApi("Abuja"));

  return (
    <div className=" bg-blue-950 min-h-screen brightness-105 contrast-200">
      <div className="font-DMSans">
        <Header weatherAPI={weatherApi} />
        {
          <LandingPageBody
            weatherApi={weatherApi}
            SetWeatherApi={SetWeatherApi}
          />
        }
        {/* {<LandingError />} */}
      </div>
    </div>
  );
};

export default LandingPage;
