import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Routes from "./Routes"; 

import { COLORS } from "../styles/Colors";
import { TopBar } from "../styles/NavStyles";

const TopBarLight = styled(TopBar)`
  background-color: ${({ color }) => color ? `${COLORS.gray900}` : "transparent"};

  a {
    color: ${({ color }) => color ? `${COLORS.whiteSnow}` : `${COLORS.gray900}`};
    &:hover {
      color: ${({ color }) => color ? `${COLORS.white90}` : `${COLORS.whiteSnow}`};
    }
  }
}`

export default function TopNavLight() {

  const [color, setColor] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setColor(window.pageYOffset);
      setSize(window.pageYOffset);
    }

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);

  return (
    <TopBarLight color={color} size={size}>
      <ul>
        <Routes />
      </ul>
    </TopBarLight>
  );
}