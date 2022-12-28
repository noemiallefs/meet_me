import styled from "styled-components";

import { COLORS } from "./Colors";

export const SectionPlain = styled.section`
  text-align: justify;
  padding: 150px 0px 100px 0px;
  margin: auto; 
`;

export const SectionDark = styled.section`
  margin: 50px 0;
  width: 100%;
  text-align: left;
  background-color: ${COLORS.gray900};
  color: ${COLORS.whiteSnow};

  h4{
    text-decoration: overline;
  }
`
export const SectionRight = styled.section`
  text-align: right;

  h4 {
    margin: 0;
    text-decoration: overline;
  }
`
export const SectionLeft = styled.section`
  margin: 0 7%;
  padding: 70px 0 70px 0;
  text-align: left;

  h4 {
    margin: 0 0 20px 0; 
  }
  ul {
    margin-left: 15px;
    line-height: 35px;
  }
`
export const SectionPostL = styled.section`
  text-align: justify;
  margin: auto 20%;
  padding-top: 170px;
  padding-bottom: 170px;

  a {
    color: ${COLORS.primaryIntense};
    &:hover {
      color: ${COLORS.primaryDark};
    }
  }

  @media (max-width: 1200px) {
    margin: auto 15%;
  }

  @media (max-width: 600px) {
    margin: auto 5%;
  }
`;
export const SectionPostC = styled(SectionPostL)`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  padding-top: 170px;
  padding-bottom: 170px;
`;