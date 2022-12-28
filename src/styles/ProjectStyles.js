import styled from "styled-components";
import { COLORS } from "./Colors";

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
  margin-top: 85px;
  margin-bottom: -60px;
  width: 310px;
  height: 160px;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${COLORS.gray900};
`