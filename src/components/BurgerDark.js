import React, { useState } from "react";
import styled from "styled-components";

import { COLORS } from "../styles/Colors";
import { BurgerBar, StyledBurger } from "../styles/NavStyles";

import RightNav from "./RightNav";

const BurgerBarDark = styled(BurgerBar)`
  background-color: ${COLORS.gray900};
`

const StyledBurgerDark = styled(StyledBurger)`
  div {
    background-color: ${COLORS.whiteSnow};

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const BurgerDark = () => {

  const [open, setOpen] = useState(false);

  return (
    <BurgerBarDark>
      <StyledBurgerDark open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurgerDark>
      <RightNav open={open}/>
    </BurgerBarDark>
  );
};

export default BurgerDark;