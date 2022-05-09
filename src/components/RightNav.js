import React from "react";
import styled from 'styled-components';

import { COLORS } from "../styles/Colors";

import Routes from "./Routes";

const Ul = styled.ul`
  list-style: none;
  display: flex; 
  flex-flow: column nowrap;
  background-color: ${COLORS.gray900};
  position: fixed;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100%;
  width: 100%;
  padding-top: 10%;
  padding-left: 5%;
  transition: transform 0.3s ease-in-out;

  li {
    padding: 18px 30px;
  }
  a {
    color: ${COLORS.white90};
    &:focus,
    &:hover {
      text-decoration: none;
      color: ${COLORS.whiteSnow};
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Routes />
    </Ul>
  )
}

export default RightNav