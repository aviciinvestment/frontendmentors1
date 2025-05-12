import React from "react";
import styled from "styled-components";
import logo from "../assets/Cloud Airplane Logo.jpg";
import Footer from "./Footer";
import Balance from "./Balance";

const Aside = styled.aside`
  background-color: rgb(253 244 255 / var(--tw-text-opacity, 1));
  color: ${(props) => props.theme.primaryColor};
`;
const Sidebar = ({ balance, setBalance }) => {
  return (
    <Aside className="h-lvh row-span-2 p-10 flex flex-col justify-between text-blue-50 relative">
      <div className="flex flex-col">
        <img className="mix-blend-darken w-52 self-center" src={logo} alt="" />
        <h1 className="text-center text-3xl font-sans font-bold">
          CLOUDS BANKING
        </h1>
      </div>
      <div className="text-2xl font-semibold uppercase">
        <ul className="divide-y-2 divide-fuchsia-100">
          <li className="p-4 shadow-lg shadow-fuchsia-200 rounded-lg mb-3">
            profile
          </li>
          <li className="p-4 shadow-lg shadow-fuchsia-200 rounded-lg mb-3">
            About
          </li>
          <li className="p-4 shadow-lg shadow-fuchsia-200 rounded-lg mb-3">
            settings
          </li>
        </ul>
      </div>
      <Balance balance={balance} setBalance={setBalance} />
    </Aside>
  );
};

export default Sidebar;
