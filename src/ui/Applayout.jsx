import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { MyContext } from "../Context/CustomContext";

const Applayout = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [purchased, setPurchased] = useState([]);
  return (
    <div className="grid grid-cols-[1fr,2fr] sm:grid-cols-[1fr,3fr] grid-rows-[0.2fr,0.8fr] ">
      <Sidebar balance={balance} setBalance={setBalance} />
      <Header />
      <MyContext.Provider value={{ purchased, setPurchased, balance }}>
        <main className="overflow-y-scroll h-lvh">{children}</main>
      </MyContext.Provider>
    </div>
  );
};

export default Applayout;
