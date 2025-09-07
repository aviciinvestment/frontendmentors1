import React, { useEffect } from "react";
import Buttons from "../ui/Buttons";
import search from "../assets/images/icon-search.svg";

const LandingPageSearch = () => {
  useEffect(() => {
    fetch("https://customer-api.open-meteo.com/v1/forecast")
      .then((res) => {
        console.log(res);
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  return (
    <div className="self-center sm:flex gap-3 mt-12">
      <div className="flex">
        <div className="flex p-3 rounded-l-md items-center bg-gray-500 contrast-75 brightness-75 ">
          <img className="size-5" src={search} alt="" />
        </div>
        <input
          placeholder="Search for a place..."
          className="outline-none border-none rounded-r-md items-center p-2 bg-gray-500 contrast-75 brightness-75 "
        />
      </div>
      <Buttons>Search</Buttons>
    </div>
  );
};

export default LandingPageSearch;
