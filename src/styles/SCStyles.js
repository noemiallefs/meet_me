import styled from "styled-components";

export const HeaderSC = styled.h1`
  padding: 0 0 15px 0;
  font-weight: 600;
  text-align: left;
  text-decoration: overline;
`;
export const SectionPSC = styled.p`
  padding: 0;
  max-width: 510px;
  font-size: 16px;
`;
export const GridSC = styled.div`
  display: flex;
  gap: 20px;
  max-width: 100%;
  margin: auto;
  margin-top: 20px; 
  margin-bottom: 70px;
  justify-content: left; 
  grid-area: content;

  @media (max-width: 1450px) {
    flex-direction: column;
    max-width: 500px;
    margin-left: 0px; 
  }
`;