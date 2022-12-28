import React from "react";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";

import { COLORS } from "../styles/Colors";

const SectionIntProj = styled.section`
  text-align: center;
  padding-top: 150px;
  background: ${COLORS.gray900};
  color: ${COLORS.whiteSnow};
  padding: 30px 10px 50px 30px;
`
const HeaderIntProj = styled.h1`
  font-family: 'Saira Extra Condensed';
  font-weight: 700;
  font-size: 2.5rem;
  padding: 30px;
`
const InternationalProjection = () => {
  return (
    <SectionIntProj id="IntProj">
      <HeaderIntProj>International Projection</HeaderIntProj>
      <StaticImage 
        alt=''
        src='../images/international-projection.webp'
        placeholder="blurred"
        layout="constrained"
        width={900}
        height={500}
      />
    </SectionIntProj>
  );
}

export default InternationalProjection;