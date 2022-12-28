import styled from "styled-components";

import { COLORS } from "./Colors";

export const GridNews = styled.div`
  display: flex;
  gap: 20px;
  max-width: 100%;
  margin: auto;
  margin-top: 20px; 
  justify-content: right; 
  grid-area: content;

  @media (max-width: 1504px) {
    flex-direction: column;
    align-items: flex-end; 
    justify-content: right; 
  }
`;
export const CardWrapperNews = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: left;
  box-shadow: 0 2px 7px 0 ${COLORS.black20}, 0 1px 8px 0 ${COLORS.black20};
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
export const CardHeadNews = styled.div`
  margin: 0; 
`;
export const CardFooterNews = styled.div`
  padding: 10px 20px;
  background-color: ${COLORS.gray900};
  color: ${COLORS.white90};
  font-size: 10pt;
  margin-top: auto;
  border-radius: 0px 0px 3px 3px;
  align-items: stretch;
`;
export const HeaderNews = styled.h1`
  text-align: left;
  padding: 20px 0px 10px 0px;
  margin: 0;
  font-size: 25pt;
`;
export const SubHeaderNews = styled.h3`
  padding: 10px 0 10px 0px;
  font-size: 12pt;
  text-align: left;
  color: ${COLORS.black90};
`;
export const InlineHeaderNews = styled.h3`
  font-style: italic;
  color: ${COLORS.black90};
  text-align: right;
  font-size: 14pt;
`;
export const ParagraphNews = styled.p`
  margin: 0;
  padding: 10px 0;
`;