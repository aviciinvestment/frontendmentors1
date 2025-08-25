import React, { useRef } from "react";
import HomeHeader from "./HomeHeader";
import HomeLanding from "./HomeLanding";
import HomeAbout from "./HomeAbout";
import HomeFooter from "./HomeFooter";

const HomePage = () => {
  const scrollRef = useRef(null);
  const scrollTopRef = useRef(null);
  const handleTopScroll = () => {
    scrollTopRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="font-sans bg-blue-100">
      <HomeHeader handleScroll={handleScroll} scrollTopRef={scrollTopRef} />
      <HomeLanding />
      <HomeAbout scrollRef={scrollRef} />
      <HomeFooter handleTopScroll={handleTopScroll} />
    </div>
  );
};

export default HomePage;
