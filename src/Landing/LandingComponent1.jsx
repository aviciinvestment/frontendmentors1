import { useEffect, useState } from "react";
import sunny from "../assets/images/icon-sunny.webp";
import dateTimeEditor from "@/util/DateTimeEditor";
const LandingComponent1 = ({ weatherApi, landingCountry }) => {
  const [temperature, setTemperature] = useState("");
  const [date, setDate] = useState("");
  const [setunit, setSetunit] = useState("°C");

  useEffect(() => {
    weatherApi.then((Response) => {
      setTemperature(Response?.current?.temperature_2m);
      setDate(Response?.current?.time);
      setSetunit(Response?.current_units?.temperature_2m);
    });
  }, [weatherApi]);

  return (
    <div
      className="bg-[url('./assets/images/bg-today-small.svg')] sm:bg-[url('./assets/images/bg-today-large.svg')] bg-no-repeat items-center contrast-50 brightness-95
         rounded-[20px] bg-cover sm:flex-row flex justify-between flex-col py-20 px-6"
    >
      <div className="text-center sm:text-left">
        <h1 className="text-3xl uppercase text-white font-semibold">
          {landingCountry == "" ? "Abuja" : landingCountry}
        </h1>
        <p className="text-xl text-gray-300">{dateTimeEditor(date)}</p>
      </div>
      <div className="flex items-center ">
        <img className="size-32" src={sunny} alt="" />
        <div className="text-6xl sm:text-8xl font-DMSans font-medium">
          {temperature}
          {setunit}
        </div>
      </div>
    </div>
  );
};

export default LandingComponent1;
