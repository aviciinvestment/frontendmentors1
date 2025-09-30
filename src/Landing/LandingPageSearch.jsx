import React, { useEffect, useState } from "react";
import Buttons from "../ui/Buttons";
import search from "../assets/images/icon-search.svg";
import SearchDropDown from "@/ui/SearchDropDown";
import { FetchApi } from "@/util/ApiService";
import {
  RiLoader2Line,
  RiProgress1Line,
  RiProgress2Line,
  RiProgress3Line,
  RiProgress4Line,
  RiProgress5Fill,
  RiProgress6Line,
  RiSearch2Line,
} from "react-icons/ri";

const LandingPageSearch = ({
  SetWeatherApi,
  inputValue,
  SetInputValue,
  SetlandingCountry,
}) => {
  const [eventOpen, SetEventOpen] = useState("DropDownClose");
  const [Search, SetSearch] = useState("searched");

  const input = document.getElementById("input");
  const DropDownActive = (condition) => {
    SetEventOpen(condition);
  };

  const InputValueOnClick = (value) => {
    input.value = value;
  };

  //////////////////////
  const onSubmit = (e) => {
    e.preventDefault();
    SetSearch("searching");
    SetWeatherApi(FetchApi(input.value));
    FetchApi(input.value).then((response) => {
      if (response) {
        SetSearch("searched");
        SetlandingCountry(input.value);
        input.value = "";
      }
    });

    DropDownActive("DropDownClose");
  };

  /////////////////
  useEffect(() => {
    if (inputValue == "") return;
    FetchApi(inputValue);
  });
  return (
    <div className=" mx-auto">
      <div className="self-center sm:flex gap-3 mt-12 items-center">
        <div className="flex flex-grow">
          <div className="flex py-4 px-6 rounded-l-xl items-center bg-gray-500 contrast-75 brightness-75 ">
            <img className="size-5" src={search} alt="" />
          </div>
          <input
            onChange={(e) => {
              SetInputValue(e.target.value);
              DropDownActive("DropDownOpen");
            }}
            id="input"
            //onMouseLeave={() => DropDownActive("DropDownClose")}
            placeholder="Search for a place..."
            className="outline-none sm:min-w-[656px] w-full  text-2xl border-none rounded-r-xl items-center px-6 py-4 bg-gray-500 contrast-75 brightness-75 "
          />
        </div>
        <div className="relative flex-shrink-0 ">
          <Buttons onSubmit={onSubmit}>Search</Buttons>
        </div>
      </div>
      <div
        className={`${
          eventOpen == "DropDownOpen" ? "visible" : "invisible"
        } sm:min-w-[696px] text-left brightness-100 absolute cursor-pointer rounded-xl p-2 z-50 bg-gray-600 top-[270px]`}
      >
        <SearchDropDown
          SetEventOpen={SetEventOpen}
          InputValueOnClick={InputValueOnClick}
          inputValue={inputValue}
        />
      </div>
      <div
        className={`${
          Search == "searching" ? "visible" : "invisible"
        } flex gap-1 items-center text-lg px-2 py-3 rounded-lg sm:min-w-[696px] text-left brightness-100 absolute cursor-pointer p-2 z-50 bg-gray-600 top-[230px]`}
      >
        <RiLoader2Line className="animate-spin size-5" />
        Search In Progress
      </div>
    </div>
  );
};

export default LandingPageSearch;
