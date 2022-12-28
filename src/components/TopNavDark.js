import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Routes from "./Routes"; 

import { COLORS } from "../styles/Colors";
import { TopBar } from "../styles/NavStyles";

const TopBarDark = styled(TopBar)`

  background-color: ${COLORS.gray900};

  a {
    color: ${COLORS.whiteSnow};
    &:hover {
      color: ${COLORS.white90};
    }
  }
}`

export default function TopNavDark() {

  const [size, setSize] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setSize(window.pageYOffset);
    }

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);

  return (
    <TopBarDark size={size}>
      <ul>
        <Routes />
      </ul>
    </TopBarDark>
  );
}