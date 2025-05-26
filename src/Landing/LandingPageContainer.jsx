import React from "react";
import WelcomeContainer from "./LandingComponents/WelcomeContainer";
import InsightContainer from "./LandingComponents/InsightContainer";
import ProductLanding from "./LandingComponents/ProductLanding";
import AccountSetup from "./LandingComponents/AccountSetup";
import Advert from "./LandingComponents/Advert";
const LandingPageContainer = () => {
  return (
    <div className="sm:grid grid-cols-2 w-[90%] m-auto gap-4 mt-10">
      <WelcomeContainer />
      <InsightContainer />
      <ProductLanding />
      <AccountSetup />
      <Advert />
    </div>
  );
};

export default LandingPageContainer;
