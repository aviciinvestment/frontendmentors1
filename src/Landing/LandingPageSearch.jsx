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
  unit,
  Search,
  SetSearch,
  SetSearchedThrough,
}) => {
  const [eventOpen, SetEventOpen] = useState("DropDownClose");

  const input = document.getElementById("input");
  const DropDownActive = (condition) => {
    SetEventOpen(condition);
  };

  const InputValueOnClick = (value) => {
    input.value = value;
  };
  //////////////////////////
  //////////////////////
  const onSubmit = (e) => {
    e.preventDefault();
    SetSearch("searching");
    SetWeatherApi(FetchApi(input.value, unit));
    FetchApi(input.value, unit).then((response) => {
      if (response) {
        SetSearch("searched");
        SetlandingCountry(input.value);
        input.value = "";
      }
    });

    DropDownActive("DropDownClose");
    FetchApi(input.value, unit).then((response) => {
      if (response == "not found") {
        SetSearchedThrough(false);
      } else {
        SetSearchedThrough(true);
      }
    });
  };

  /////////////////
  useEffect(() => {
    if (inputValue == "") return;
    FetchApi(inputValue, unit);
  });
  return (
    <div className="w-full">
      <div className=" sm:flex mx-auto w-full justify-center  gap-3">
        <div className="flex   justify-center sm:w-full md:w-auto ">
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
            className="outline-none  w-full md:w-auto  text-2xl border-none rounded-r-xl items-center px-1 py-4 bg-gray-500 contrast-75 brightness-75 "
          />
        </div>
        <div className="">
          <Buttons onSubmit={onSubmit}>Search</Buttons>
        </div>
      </div>
      <div
        className={`${
          eventOpen == "DropDownOpen" ? "visible" : "invisible"
        } mt-2 text-left md:w-1/3 sm:w-10/12 w-11/12 mx-auto  right-0 left-0  brightness-100 absolute cursor-pointer rounded-xl p-2 z-50 bg-gray-600`}
      >
        <SearchDropDown
          SetEventOpen={SetEventOpen}
          InputValueOnClick={InputValueOnClick}
          inputValue={inputValue}
          unit={unit}
        />
      </div>
      <div
        className={`${
          Search == "searching" ? "visible" : "invisible"
        } mt-2 md:w-1/3 sm:w-10/12 w-11/12 mx-auto  flex gap-1 items-center  right-0 left-0  text-lg px-2 py-3 rounded-lg  text-left brightness-100 absolute cursor-pointer p-2 z-50 bg-gray-600 `}
      >
        <RiLoader2Line className="animate-spin size-5" />
        Search In Progress
      </div>
    </div>
  );
};

export default LandingPageSearch;
