import styled from "styled-components";
import { Link } from "gatsby";

import { COLORS } from "./Colors";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  max-width: 90%;
  margin: auto;
  gap: 20px;
  grid-area: content;

  align-items: stretch;
  justify-content: stretch; 

  @media (max-width: 1504px) {
    display: flex;
    flex-direction: column;
  }
`;
export const CardWrapper = styled.div`
  background-color: ${COLORS.primaryPale};
  width: 100%;
  text-align: left;
  box-shadow: 0 2px 7px 0 ${COLORS.black20}, 0 1px 8px 0 ${COLORS.black20};
  border-radius: 3px;
  &:hover {
    background-color: ${COLORS.primaryFade};
  }

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
export const CardHeader = styled.header`
  margin: 20px 150px 0px 20px;
  border-bottom: 2px solid ${COLORS.gray900};
`;
export const CardBody = styled.div`
  margin: 10px 20px 40px 20px;
  text-align:justify;
  
  h4 {
    margin-top: 0;
  }
`;
export const CardFooter = styled.div`
  padding: 10px 20px;
  background-color: ${COLORS.gray900};
  color: ${COLORS.white90};
  font-size: 10pt;
  margin-top: auto;
  border-radius: 0px 0px 3px 3px;
`;

export const StyledLink = styled(Link)`
  color: ${COLORS.black};
  &:hover {
    color: ${COLORS.black90};
  }
`