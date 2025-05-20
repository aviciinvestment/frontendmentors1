import React, { useContext, useState } from "react";
import Menuitem from "./Menuitem";
import data from "../assets/Revealing Data.gif";
import airtime from "../assets/Airtime.jpg";
import bill from "../assets/bill.jpg";
import PurchaseMarkup from "../ui/PurchaseMarkup";
import Products from "../Shop/Products";
import PurchaseForm from "../Shop/PurchaseForm";
import Balance from "../ui/Balance";
import { MyContext } from "../Context/CustomContext";

const services = [
  { img: data, service: "data" },
  { img: airtime, service: "airtime" },
  { img: bill, service: "bill" },
];

const Menu = () => {
  const { purchasemarkup, setPurchasemarkup } = useContext(MyContext);
  const [background, setBackground] = useState(0);
  const [service, setService] = useState(0);

  function handleclick(e) {
    setPurchasemarkup(true);

    setBackground(Number(e.target.dataset.user));
    //balance={balance} setBalance={setBalance}
  }
  return (
    <div>
      <Balance />
      <div className="sm:flex w-[70%] m-auto">
        {services.map((elem, i) => {
          return (
            <Menuitem
              image={elem.img}
              service={elem.service}
              key={i}
              keys={i}
              handleclick={handleclick}
              setBackground={setBackground}
            />
          );
        })}
      </div>

      {purchasemarkup && (
        <PurchaseMarkup
          setPurchasemarkup={setPurchasemarkup}
          image={services[background ? background : 0].img}
        >
          <Products
            background={background}
            service={service}
            setService={setService}
          />
          <PurchaseForm background={background} service={service} />
        </PurchaseMarkup>
      )}
    </div>
  );
};

export default Menu;
