import { useState } from "react";
import sunny from "../assets/images/icon-sunny.webp";

const LandingComponent1 = ({ weatherApi }) => {
  const [temperature, setTemperature] = useState("");
  console.log(weatherApi);

  weatherApi.then((Response) => {
    setTemperature(Response.current.temperature_2m);
  });
  return (
    <div
      className="bg-[url('./assets/images/bg-today-small.svg')] sm:bg-[url('./assets/images/bg-today-large.svg')] bg-no-repeat items-center contrast-50 brightness-95
         rounded-[20px] bg-cover sm:flex-row flex justify-between flex-col py-20 px-6"
    >
      <div className="text-left">
        <h1 className="text-3xl text-white font-semibold">Berlin, Germany</h1>
        <p className="text-xl text-gray-300">Tuesday, Aug 5, 2025</p>
      </div>
      <div className="flex items-center ">
        <img className="size-32" src={sunny} alt="" />
        <div className="text-8xl font-DMSans font-medium">
          {temperature}
          <sup>o</sup>
        </div>
      </div>
    </div>
  );
};

export default LandingComponent1;
