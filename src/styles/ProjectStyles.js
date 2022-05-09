import styled from "styled-components";
import { COLORS } from "./Colors";

export const SectionProject = styled.section`
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
`;
export const HeaderProject = styled.h1`
  padding: 0;
  font-weight: 600;
  text-align: left;
`;
export const ListProject = styled.ul`
  margin-left: 0;
  padding-left: 7px;
  list-style-type: '· ';
  li {
    margin-bottom: 10px; 
  }
`;
export const ColorBox = styled.span`
  background-color: ${COLORS.primaryLight};
  padding: 2px;
`;

export const Img = styled.img`
  display: block;
  margin-top: 35px;
  width: 310px;
  height: 160px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${COLORS.gray900};
`