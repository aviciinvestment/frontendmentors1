import React from "react";
import { searchLocations } from "@/util/ApiService";

let SearchedCountry = [];

const SearchDropDown = ({ SetEventOpen, InputValueOnClick, inputValue }) => {
  searchLocations(inputValue).then((locations) => {
    SearchedCountry = [];
    locations.forEach((element) => {
      SearchedCountry.push(element.name);
    });
  });
  console.log(SearchedCountry);
  return (
    <div className="cursor-pointer">
      {SearchedCountry.map((elem, i) => (
        <div
          onClick={() => {
            SetEventOpen("DropDownClose");
            InputValueOnClick(`${elem}`);
          }}
          key={i}
          className="py-3 px-2 rounded-xl hover:bg-gray-500"
        >
          {elem}
        </div>
      ))}
    </div>
  );
};

export default SearchDropDown;
