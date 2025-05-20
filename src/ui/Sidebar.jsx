import React from "react";
import styled from "styled-components";
import logo from "../assets/Cloud Airplane Logo.svg";
import name from "../assets/NAME.svg";
import Footer from "./Footer";
import Balance from "./Balance";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";

const Aside = styled.aside`
  background-color: --tw-bg-opacity: 1;
    background-color:  rgb(249 250 251 / var(--tw-bg-opacity, 1));
 
  color: ${(props) => props.theme.primaryColor};
`;
const Sidebar = () => {
  return (
    <Aside className="flex items-center justify-between text-xs">
      <Link to="/">
        <div className="flex gap">
          <img className="size-7 self-center" src={logo} alt="" />
          <img src={name} alt="name" className="size-16 sm:size-24" />
        </div>
      </Link>

      <div className="flex gap-3 mr-2 text-xs font-medium">
        <div className="flex items-center gap-[2px]">
          <FaUser className="size-4" />
          <span className="self-center">username</span>
        </div>
        <div className="flex items-center gap-1">
          <Link className="flex gap-[2px]" to="/about">
            <AiOutlineInfoCircle className="size-4" />{" "}
            <span className="self-center">About</span>
          </Link>
        </div>
        <div className="flex items-center gap-[2px]">
          <AiFillSetting className="size-4" />
          <span className="self-center">Settings</span>
        </div>
      </div>
    </Aside>
  );
};

export default Sidebar;
