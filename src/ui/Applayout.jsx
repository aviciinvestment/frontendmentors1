import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { MyContext } from "../Context/CustomContext";

const Applayout = ({ children }) => {
  const [purchasemarkup, setPurchasemarkup] = useState(false);
  const [balance, setBalance] = useState(0);
  const [purchased, setPurchased] = useState([]);
  return (
    <div className={`${purchasemarkup ? "" : ""}`}>
      <Sidebar />
      <Header />
      <MyContext.Provider
        value={{
          purchased,
          setPurchased,
          balance,
          setBalance,
          purchasemarkup,
          setPurchasemarkup,
        }}
      >
        <main className="">{children}</main>
      </MyContext.Provider>
    </div>
  );
};

export default Applayout;
