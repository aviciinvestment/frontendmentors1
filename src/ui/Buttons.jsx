import React from "react";

const Buttons = ({ children }) => {
  return (
    <button className="contrast-50 brightness-95 bg-blue-700 text-white text-xl w-full mt-2 sm:mt-0 px-6 py-4 rounded-xl">
      {children}
    </button>
  );
};

export default Buttons;
