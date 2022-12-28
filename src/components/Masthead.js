import React from "react";
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { COLORS } from "../styles/Colors";

const SectionMasthead = styled.section`
  display: block;
  width: 100vw;
  min-height: 100vh;
  background: ${COLORS.primary}; 
  align-items: center; 
  text-align: center;
  padding-bottom: 20px;
`
const HeaderMasthead = styled.h1`
  color: ${COLORS.gray900};
  font-family: "Zilla Slab Highlight";
  text-transform: uppercase;
  font-size: 40px;
  letter-spacing: 1px;
  position: relative;
  top: 7%;

  @media (max-width: 441px) {
    font-size: 30px;
    letter-spacing: 0.7px;
  }
`
const Button = styled.button`
  color: ${COLORS.whiteSnow};
  text-align: center;
  padding: 1.25rem 1.5rem;
  background-color: ${COLORS.black20};
  border: 0;
  border-radius: 2px;
  font-family: "Red Hat Mono";
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0px 1px 02px ${COLORS.black30};
  &:hover {
    background-color: ${COLORS.black30}
  }
  position: relative;
  margin-top: 7px;
`
const VerticalLineTop = styled.div`
  border-left: 0.5px solid ${COLORS.black};
  position: relative;
  height: 35vh;
  margin-bottom: 40px;
  margin-left: 50%;

  @media (max-width: 441px) {
    height: 30vh;
  }

`
const VerticalLineBottom = styled.div`
  border-left: 0.5px solid ${COLORS.black};
  position: relative;
  margin-top: 50px;
  height: 29vh;
  margin-left: 50%;

  @media (max-width: 441px) {
    height: 25vh;
  }
`

export default function Masthead() {
  return (      
      <SectionMasthead> 
        <VerticalLineTop />
        <HeaderMasthead>Noemi <br /> Álvarez Fernández</HeaderMasthead>
        <VerticalLineBottom />
        <Button onClick={() => scrollTo('#IntProj')}>meet_me</Button>
      </SectionMasthead>
  );
}