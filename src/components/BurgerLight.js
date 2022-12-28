import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { COLORS } from "../styles/Colors";
import { BurgerBar, StyledBurger } from "../styles/NavStyles";

import RightNav from "./RightNav";

const BurgerBarLight = styled(BurgerBar)`
  background-color: ${({ scroll }) => scroll ? `${COLORS.gray900}` : "transparent"};
`

const StyledBurgerLight = styled(StyledBurger)`
  div {
    ${({ scroll, open }) => {
      if (!scroll && !open) {
        return `
          background-color: ${COLORS.gray900};
        `
      } else if (scroll && !open) {
        return `
          background-color: ${COLORS.whiteSnow};
        `
      } else {
        return `
          background-color: ${COLORS.whiteSnow};
        `
      }
    }}
  }
`;

const BurgerLight = () => {

  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.pageYOffset);
    }

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <BurgerBarLight scroll={scroll} open={open}>
      <StyledBurgerLight scroll={scroll} open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurgerLight>
      <RightNav open={open}/>
    </BurgerBarLight>
  );
};

export default BurgerLight;