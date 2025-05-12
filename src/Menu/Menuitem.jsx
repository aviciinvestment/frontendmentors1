//import React, { useEffect, useState } from "react";
import { FaDotCircle } from "react-icons/fa";
import logo from "../assets/Cloud Airplane Logo.jpg";

const Menuitem = ({ image, service, handleclick, keys }) => {
  return (
    <div>
      <div
        onClick={(e) => {
          handleclick(e);
        }}
        data-user={keys}
        className="w-[80%] cursor-pointer mx-auto sm:w-full h-96 shadow-md hover:drop-shadow-2xl shadow-slate-300 m-10 rounded-md"
      >
        <img
          data-user={keys}
          width="100%"
          className="h-[70%]"
          src={image}
          alt="img"
        />
        <div
          data-user={keys}
          className="bg-fuchsia-100 h-[30%] p-3 flex justify-between"
        >
          <div data-user={keys} className="p-2 font-bold text-xl">
            <h1 data-user={keys}>Clouds</h1>
            <img
              data-user={keys}
              className="mix-blend-darken w-16"
              src={logo}
              alt=""
            />
          </div>

          <div
            data-user={keys}
            className="p-2 text-xl border-l-2 border-white "
          >
            <h1 data-user={keys} className="font-semibold uppercase">
              {service}
            </h1>
            <h3 data-user={keys}>Affordable and Lasting</h3>
            <p data-user={keys}>MTN AIRTEL GLO 9MOBILE</p>
          </div>
          <div data-user={keys}>
            <FaDotCircle className="text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menuitem;
