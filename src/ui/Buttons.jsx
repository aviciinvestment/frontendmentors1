import React from "react";

const Buttons = ({ children }) => {
  return (
    <button className="bg-blue-800 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded-full">
      {children}
    </button>
  );
};

export default Buttons;
