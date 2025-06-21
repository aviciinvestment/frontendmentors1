import React from "react";
import { FaUser } from "react-icons/fa6";

const Tab = () => {
  return (
    <div className="text-black font-normal cursor-pointer p-2 border-l-2 border-green-950 my-5 hover:bg-green-100">
      <div className="flex items-center gap-2">
        <FaUser />
        {"  "}
        <h1 className="font-bold self-center">income andexpenses tracker</h1>
      </div>
      <p>
        You can view your accont balances, transaction history and statements.{" "}
        <br /> aroundeven set up custom alerts to help you stay on top of your
        finnces.
      </p>
    </div>
  );
};

export default Tab;
