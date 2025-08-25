import React, { useRef } from "react";
import HomeHeader from "./HomeHeader";
import HomeLanding from "./HomeLanding";
import HomeAbout from "./HomeAbout";
import HomeFooter from "./HomeFooter";

const HomePage = () => {
  const scrollRef = useRef(null);
  const handleScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="font-sans bg-blue-100">
      <HomeHeader handleScroll={handleScroll} />
      <HomeLanding />
      <HomeAbout scrollRef={scrollRef} />
      <HomeFooter />
    </div>
  );
};

export default HomePage;
