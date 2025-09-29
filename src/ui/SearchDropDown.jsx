import React from "react";

const SearchedCountry = ["City Name", "City Name", "City Name", "City Name"];

const SearchDropDown = ({ SetEventOpen, InputValueOnClick }) => {
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
