import React from "react";
import service from "../assets/AIRTIME Trampolinpark.jpg";
import ai from "../assets/Five Reasons Why Virtual Reality Is A Game-Changer.jpg";
import Aboutitem from "./Aboutitem";
import AboutFooter from "./AboutFooter";
const Abouts = [
  { image: ai, text: "Chat with our Exclusive AI assistant", link: "/" },
  { image: service, text: "Patronize us", link: "/purchase" },
];
const About = () => {
  return (
    <div className="w-[70%] m-auto sm:w-[30%] sm:flex">
      {Abouts.map((elem, i) => {
        return (
          <Aboutitem
            image={elem.image}
            text={elem.text}
            key={i}
            link={elem.link}
          />
        );
      })}
    </div>
  );
};

export default About;
