import React from "react";

const WelcomeContainer = () => {
  return (
    <div className="bg-white w-full p-3 shadow-sm border-[1px] border-gray-100 shadow-gray-300">
      <h1 className="p-2 font-bold text-2xl text-blue-100 brightness-90">
        welcome
      </h1>
      <h1 className="font-semibold font-sans text-[30px]">0 points</h1>
      <h1 className="font-medium text-gray-500">
        Earn 1 NGN for every referal
      </h1>
      <p className="text-xs leading-tight font-semibold">
        An get exclusive discounts as your points increases
      </p>
      <h1 className="leading-[28px] font-bold text-blue-600 cursor-pointer hover:bg-gray-200 w-auto pl-2">
        {" "}
        Start Earning
      </h1>
    </div>
  );
};

export default WelcomeContainer;
