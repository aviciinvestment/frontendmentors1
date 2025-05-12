import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Headers = styled.header`
  background-color: rgb(253 244 255 / var(--tw-text-opacity, 1));
  color: ${(props) => props.theme.primaryColor};
`;

const Header = () => {
  return (
    <Headers className="p-10">
      <ul className="flex gap-10 justify-end m-10 font-sans font-semibold sm:text-2xl text-lg">
        <li><Link to="/">Home Page</Link></li>
        <li>
          <Link to="/purchase">Purchase</Link>
        </li>
        <li>
          <Link to="/record">History</Link>
        </li>
        <li>Login</li>
      </ul>
    </Headers>
  );
};

export default Header;
