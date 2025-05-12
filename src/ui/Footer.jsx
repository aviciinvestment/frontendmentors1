import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";
import { FaHouseDamage } from "react-icons/fa";
import { FaBuysellads } from "react-icons/fa";

const Footers = styled.footer`
  background-color: rgb(253 244 255 / var(--tw-text-opacity, 1));
  color: ${(props) => props.theme.primaryColor};
`;

const Footer = () => {
  return (
    <Footers className="text-fuchsia-500 w-full text-center">
      copyright@2025
    </Footers>
  );
};

export default Footer;
