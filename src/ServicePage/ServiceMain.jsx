import React from "react";
import { Link } from "react-router-dom";
import { FaCreditCard, FaExclamation } from "react-icons/fa6";

const ServiceMain = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-blue-950 text-center text-3xl font-extrabold">
        Insert your One Time <br /> {"DEBIT CARD"}
      </h1>
      <Link to="/success">
        <button className="bg-gray-200 contrast-20 rounded-lg p-3 font-bold m-3 border-[1px] border-gray-300 shadow-sm shadow-gray-30">
          submit Card Details
        </button>
      </Link>
      <div className="m-3 rounded-lg bg-gray-200 contrast-20 p-6 border-[1px] border-gray-300 shadow-sm shadow-gray-300">
        <div>
          <label htmlFor="">Debit Card Number</label>
          <br />
          <div className="flex items-center">
            <FaCreditCard className="bg-white border-[1px] rounded-lg rounded-r-none border-r-0 border-gray-300 shadow-sm shadow-gray-300 h-10 w-8 p-[2px]" />

            <input
              type="text"
              placeholder="0000-0000-0000-0000"
              className="rounded-l-none border-l-0 rounded-lg border-[1px] p-1 border-gray-300 shadow-sm shadow-gray-300 outline-none"
            />
          </div>
        </div>
        <div className="sm:flex gap-2 justify-center">
          <div>
            <label htmlFor="">Expiration Date</label>
            <br />
            <input
              type="text"
              placeholder="MM/YY"
              className="rounded-lg border-[1px] p-1 border-gray-300 shadow-sm shadow-gray-300 outline-none"
            />
          </div>
          <div>
            <label htmlFor="">Security Code</label>
            <br />
            <div className="flex items-center">
              <input
                type="text"
                placeholder="CVC"
                className="rounded-lg p-1 border-[1px] border-gray-300 shadow-sm rounded-r-none border-r-0 shadow-gray-300 outline-none"
              />
              <FaExclamation className="bg-white border-[1px] rounded-3xl rounded-l-none border-l-0 border-gray-300 shadow-sm shadow-gray-300 sm:h-10 h-9 w-8 p-[3px]" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="">CardHolder's Name</label>
          <br />
          <input
            type="text"
            placeholder="e.g Victory Akunna"
            className="rounded-lg p-1 border-[1px] border-gray-300 shadow-sm shadow-gray-300 outline-none"
          />
        </div>
      </div>
      <div>and dont worry about subscriptions forever</div>
    </div>
  );
};

export default ServiceMain;
