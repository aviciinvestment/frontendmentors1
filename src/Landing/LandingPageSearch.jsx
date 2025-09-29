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

const LandingPageSearch = () => {
  const [eventOpen, SetEventOpen] = useState("DropDownClose");
  const [Search, SetSearch] = useState("");

  const DropDownActive = (condition) => {
    SetEventOpen(condition);
  };

  const InputValueOnClick = (value) => {
    const input = document.getElementById("input");
    input.value = value;
  };

  useEffect(() => {
    FetchApi("Abuja");
  });
  return (
    <div className=" mx-auto">
      <div className="self-center sm:flex gap-3 mt-12 items-center">
        <div className="flex flex-grow">
          <div className="flex py-4 px-6 rounded-l-xl items-center bg-gray-500 contrast-75 brightness-75 ">
            <img className="size-5" src={search} alt="" />
          </div>
          <input
            id="input"
            onChange={() => DropDownActive("DropDownOpen")}
            //onMouseLeave={() => DropDownActive("DropDownClose")}
            placeholder="Search for a place..."
            className="outline-none sm:min-w-[656px] w-full  text-2xl border-none rounded-r-xl items-center px-6 py-4 bg-gray-500 contrast-75 brightness-75 "
          />
        </div>
        <div
          onClick={() => {
            SetSearch("searching");
          }}
          className="relative flex-shrink-0 "
        >
          <Buttons>Search</Buttons>
        </div>
      </div>
      <div
        className={`${
          eventOpen == "DropDownOpen" ? "visible" : "invisible"
        } sm:min-w-[696px] text-left brightness-100 absolute cursor-pointer rounded-xl p-2 z-50 bg-gray-600 top-[230px]`}
      >
        <SearchDropDown
          SetEventOpen={SetEventOpen}
          InputValueOnClick={InputValueOnClick}
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
