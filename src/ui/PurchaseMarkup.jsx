import React from "react";

const PurchaseMarkup = ({ setPurchasemarkup, image, children }) => {
  function outclick(e) {
    if (e.target.dataset.user === "stick") return;
    setPurchasemarkup(false);
  }
  return (
    <div
      onClick={(e) => {
        outclick(e);
      }}
      className={`z-30 absolute flex-col justify-center text-2xl w-full top-0 left-0 right-0 -bottom-56 backdrop-blur-sm bg-transparent flex`}
    >
      <div
        data-user="stick"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="shadow-lg shadow-blue-950 rounded-2xl w-[60%] h-auto p-14 m-auto"
      >
        {children}
      </div>
    </div>
  );
};

export default PurchaseMarkup;
