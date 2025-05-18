//import React, { useEffect, useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import logo from "../assets/Cloud Airplane Logo.svg";

const Menuitem = ({ image, service, handleclick, keys }) => {
  return (
    <div>
      <div
        onClick={(e) => {
          handleclick(e);
        }}
        data-user={keys}
        className="w-full gap-2 flex sm:flex-row flex-col m-auto shadow-md mb-3 shadow-gray-400 rounded-lg p-2"
      >
        <img
          data-user={keys}
          width="100%"
          className="w-full sm:w-[50%] sm:h-72"
          src={image}
          alt="img"
        />
        <div data-user={keys} className="flex justify-between sm:flex-col mx-3">
          <div data-user={keys} className="flex self-center items-center">
            <h1 data-user={keys} className="font-bold text-xl self-center">
              Clouds
            </h1>
            <img data-user={keys} className="size-6 " src={logo} alt="" />
          </div>

          <div data-user={keys} className="text-right flex flex-col">
            <h1
              data-user={keys}
              className="font-medium text-xs font-sans text-gray-600 uppercase"
            >
              {service}
            </h1>
            <h3 className="font-medium" data-user={keys}>
              Affordable and Lasting
            </h3>
            <p className="font-medium text-gray-500 text-xs" data-user={keys}>
              MTN AIRTEL GLO 9MOBILE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menuitem;
