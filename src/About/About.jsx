import service from "../assets/AIRTIME Trampolinpark.jpg";
import ai from "../assets/Five Reasons Why Virtual Reality Is A Game-Changer.jpg";
import Aboutitem from "./Aboutitem";
import AboutFooter from "./AboutFooter";
import { useState } from "react";
import SpinnerMini from "../ui/SpinnerMini";
const Abouts = [
  { image: ai, text: "Chat with our Exclusive AI assistant", link: "/" },
  { image: service, text: "Patronize us", link: "/purchase" },
];
const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div
      className={`w-[70%] m-auto ${
        isLoading ? "opacity-10" : ""
      } sm:w-[75%] sm:flex`}
    >
      {isLoading ? <SpinnerMini /> : ""}
      {Abouts.map((elem, i) => {
        return (
          <Aboutitem
            setIsLoading={setIsLoading}
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
