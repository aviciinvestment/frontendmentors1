import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { MyContext } from "../Context/CustomContext";

const Applayout = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [purchased, setPurchased] = useState([]);
  return (
    <div className="">
      <Sidebar />
      <Header />
      <MyContext.Provider
        value={{ purchased, setPurchased, balance, setBalance }}
      >
        <main className="">{children}</main>
      </MyContext.Provider>
    </div>
  );
};

export default Applayout;
