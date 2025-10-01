import React from "react";

const Weathercondition = ({ condition, value }) => {
  return (
    <div className="bg-gray-500 contrast-100 brightness-75 text-left p-5 rounded-xl w-auto">
      <p className="text-xl text-gray-300">{condition}</p>
      <h1 className="text-2xl ">{value}</h1>
    </div>
  );
};

export default Weathercondition;
