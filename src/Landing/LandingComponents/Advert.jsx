import React from "react";
import placeholder from "../../Assets/placeholder.jpg";
const Advert = () => {
  return (
    <div className="bg-white w-full p-3 shadow-sm border-[1px] border-gray-100 shadow-gray-300">
      <img className="h-64 w-full opacity-15" src={placeholder} alt="" />
    </div>
  );
};

export default Advert;
