import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
/*background-color: rgb(253 244 255 / var(--tw-text-opacity, 1));*/
const Headers = styled.header`
  color: ${(props) => props.theme.primaryColor};
`;

const Header = () => {
  return (
    <Headers className="">
      <ul className="flex justify-between sm:w-[50%] m-auto w-[70%]">
        <li>
          <Link className="hover:border-y-[1px] border-orange-700" to="/">
            Home Page
          </Link>
        </li>
        <li>
          <Link
            className="hover:border-y-[1px] border-orange-700"
            to="/purchase"
          >
            Purchase
          </Link>
        </li>
        <li>
          <Link className="hover:border-y-[1px] border-orange-700" to="/record">
            History
          </Link>
        </li>
        <li>
          <Link className="hover:border-y-[1px] border-orange-700">Login</Link>
        </li>
      </ul>
    </Headers>
  );
};

export default Header;
