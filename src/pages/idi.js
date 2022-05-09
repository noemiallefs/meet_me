import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/LayoutDark";

import { COLORS } from "../styles/Colors";
import { SectionPlain } from "../styles/SectionStyles";

const SectionIdi = styled(SectionPlain)`
  padding-bottom: 700px;
`

const Grid = styled.div`
  display: flex;
  gap: 20px;
  max-width: 90%;
  margin: auto;
  grid-area: content;

  @media (max-width: 1504px) {
    flex-direction: column;
  }
`;
const CardWrapper = styled.div`
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
const CardHeader = styled.header`
  margin: 20px 150px 0px 20px;
  border-bottom: 2px solid ${COLORS.gray900};
`;
const CardBody = styled.div`
  margin: 10px 20px 40px 20px;
  text-align:justify;
  
  h4 {
    margin-top: 0;
  }
`;
const CardFooter = styled.div`
  padding: 10px 20px;
  background-color: ${COLORS.gray900};
  color: ${COLORS.white90};
  font-size: 10pt;
  margin-top: auto;
  border-radius: 0px 0px 3px 3px;
`;

const StyledLink = styled(Link)`
  color: ${COLORS.black};
  &:hover {
    color: ${COLORS.black90};
  }
`

const IdiPage = () => {
  return (
    <Layout>
      <SectionIdi>
        <Grid>

          <CardWrapper>
            <StyledLink to="/idi/phd">
              <CardHeader>
                <h3>PhD</h3>
              </CardHeader>
              <CardBody>
                <h4>Humans and Hg: a toxic relationship.</h4>
                Study of the conection between mercury cycle, human activities, and human health; through the analysis of mercury content in archaeological human remains.
              </CardBody>
            </StyledLink>
            <CardFooter>
              Last update: 11/04/2022
            </CardFooter>
          </CardWrapper>

          <CardWrapper >
            <StyledLink to="/idi/andurinha">
              <CardHeader>
                <h3>Andurinha</h3>
              </CardHeader>
              <CardBody>
                <h4>Make Spectroscopic Data Processing Easier.</h4>
                Available at CRAN.           
              </CardBody>
            </StyledLink>
            <CardFooter>
              Last version released: 13/08/2020
            </CardFooter>
          </CardWrapper>

          <CardWrapper>
            <CardHeader>
              <h3>...</h3>
            </CardHeader>
            <CardBody>
              <h4>Soon!</h4>
              work in progress.
            </CardBody>
            <CardFooter>
              Last update: 05/04/2022
            </CardFooter>
          </CardWrapper>

        </Grid>
      </SectionIdi>
    </Layout>
  )
}

export default IdiPage;
