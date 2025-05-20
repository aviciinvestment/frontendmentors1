import React from "react";
import { StringtoList } from "../util/Helper";

const Formselect = ({ plans, dispatch, background }) => {
  return (
    <select
      className=" w-[85%] my-2 hover:ring-offset-2 transition-all outline-none text-white bg-blue-700 border-none  rounded-sm hover:ring-4 ring-fuchsia-700 p-3"
      data-user="stick"
      name=""
      id=""
      onChange={(e) => {
        dispatch({ type: "plan", payload: StringtoList(e.target.value) });
      }}
    >
      <option
        className="w-full bg-fuchsia-600 outline-none border-none"
        data-user="stick"
        value=""
      >
        SELECT PLANS
      </option>

      {plans.map((elem, i) => (
        <option data-user="stick" key={i}>
          Amount __
          {elem.amount}
          ...............................{" "}
          {background === 0 ? "plan" : "airtime_amount"} __
          {background === 0 ? elem.plan : elem.airtime_amount}
        </option>
      ))}
    </select>
  );
};

export default Formselect;
