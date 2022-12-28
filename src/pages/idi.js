import React from "react";
import styled from "styled-components";

import Layout from "../components/LayoutDark";
import Seo from "../components/Seo";

import { SectionPlain } from "../styles/SectionStyles";
import { Grid, CardWrapper, CardHeader, CardBody, CardFooter, StyledLink } from "../styles/PinkCards.js";

const SectionIdi = styled(SectionPlain)`
  padding-bottom: 200px;
`

const IdiPage = () => {
  return (
    <Layout>
      <Seo title="I+D+i" />
      <SectionIdi>
        <Grid>

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

        </Grid>
      </SectionIdi>
    </Layout>
  )
}

export default IdiPage;
