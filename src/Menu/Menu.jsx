import React, { useState } from "react";
import Menuitem from "./Menuitem";
import data from "../assets/Revealing Data.gif";
import airtime from "../assets/Airtime.jpg";
import bill from "../assets/bill.jpg";
import PurchaseMarkup from "../ui/PurchaseMarkup";
import Products from "../Shop/Products";
import PurchaseForm from "../Shop/PurchaseForm";

const services = [
  { img: data, service: "data" },
  { img: airtime, service: "airtime" },
  { img: bill, service: "bill" },
];

const Menu = () => {
  const [purchasemarkup, setPurchasemarkup] = useState(false);
  const [background, setBackground] = useState(0);
  const [service, setService] = useState(0);

  function handleclick(e) {
    setPurchasemarkup(true);

    setBackground(Number(e.target.dataset.user));
  }
  return (
    <div className="sm:flex flex-wrap sm:justify-center sm:gap-10">
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
