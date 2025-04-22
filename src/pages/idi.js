import React from "react";
import styled from "styled-components";

import Layout from "../components/LayoutDark";

import { SectionPlain } from "../styles/SectionStyles";
import { Grid, CardWrapper, CardHeader, CardBody, CardFooter, StyledLink } from "../styles/PinkCards.js";

const SectionIdi = styled(SectionPlain)`
  padding-bottom: 200px;
`

const IdiPage = () => {
  return (
    <Layout
      title = "Noemi AF · R&D"
    >
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
              Last update: 21/04/2025
            </CardFooter>
          </CardWrapper>

          <CardWrapper>
            <StyledLink to="/idi/madspec">
              <CardHeader>
                <h3>MADSPEC</h3>
              </CardHeader>
              <CardBody>
                <h4>wood’s physico-mechanical properties and IR spectroscopy.</h4>
                Evaluation of NIR and FTIR spectroscopies as fast, accurate, and portable tools for assessing wood’s physico-mechanical properties.              
                </CardBody>
            </StyledLink>
            <CardFooter>
              Last update: 21/04/2025
            </CardFooter>
          </CardWrapper>

          <CardWrapper>
            <StyledLink to="/idi/carbonirs">
              <CardHeader>
                <h3>CARBONIRS</h3>
              </CardHeader>
              <CardBody>
                <h4>Charcoal quality and IR spectroscopy.</h4>
                Innovative quality control method for charcoal briquettes based on Spectroscopic technology.
              </CardBody>
            </StyledLink>
            <CardFooter>
              Last update: 21/04/2025
            </CardFooter>
          </CardWrapper>

          <CardWrapper>
            <StyledLink to="/idi/tannirs">
              <CardHeader>
                <h3>TANNIRS</h3>
              </CardHeader>
              <CardBody>
                <h4>Wine industry and Vis-NIR.</h4>
                Rapid and effective method based on spectroscopy to ensure the quality of raw materials of forest origin.
              </CardBody>
            </StyledLink>
            <CardFooter>
              Last update: 11/04/2025
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
