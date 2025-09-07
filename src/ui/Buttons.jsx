import React from "react";

const Buttons = ({ children }) => {
  return (
    <button className="contrast-50 brightness-95 bg-blue-700 text-white text-xs w-full mt-2 sm:mt-0 px-5 py-2 rounded-md">
      {children}
    </button>
  );
};

export default Buttons;
