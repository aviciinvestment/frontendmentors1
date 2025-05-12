import React, { useContext } from "react";
import { MyContext } from "../Context/CustomContext";
import Recordtable from "./Recordtable";
import Info from "../ui/Info";

const Record = () => {
  const { purchased: purchase, balance } = useContext(MyContext);
  localStorage.setItem("purchased", JSON.stringify(purchase));
  const purchased = JSON.parse(localStorage.getItem("purchased"));
  console.log(purchased);

  if (purchased.length === 0)
    return (
      <div className="text-center text-3xl uppercase text-fuchsia-300">
        no history yet
      </div>
    );

  function Onsuccess() {
    if (balance > Number(purchased.plan[0])) return true;
    else return false;
  }
  const status = Onsuccess();
  console.log(purchased, balance, status);
  return (
    <div>
      <Recordtable purchased={purchased} status={status} />
      {console.log(status)}
      {status === false ? (
        <Info state={true} time={2000}>
          insufficient funds
        </Info>
      ) : (
        ""
      )}
    </div>
  );
};

export default Record;
