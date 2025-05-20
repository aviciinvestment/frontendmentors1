import React from "react";

const PurchaseMarkup = ({ setPurchasemarkup, children }) => {
  function outclick(e) {
    if (e.target.dataset.user === "stick") return;
    setPurchasemarkup(false);
  }
  return (
    <div
      onClick={(e) => {
        outclick(e);
      }}
      className={`z-30 absolute w-full top-0 py-16 left-0 right-0 h-lvh backdrop-blur-sm bg-opacity-50 bg-black`}
    >
      <div data-user="stick" className="sm:w-[30rem] w-full m-auto">
        {children}
      </div>
    </div>
  );
};

export default PurchaseMarkup;
