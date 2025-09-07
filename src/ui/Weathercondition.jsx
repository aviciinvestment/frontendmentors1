import React from "react";

const Weathercondition = ({ condition, value }) => {
  return (
    <div className="bg-gray-500 contrast-100 brightness-75 text-left p-4 rounded-xl m-2 w-[42%] sm:w-[22%]">
      <p className="text-sm text-gray-300">{condition}</p>
      <h1 className="sm:text-3xl text-2xl mt-2">{value}</h1>
    </div>
  );
};

export default Weathercondition;
