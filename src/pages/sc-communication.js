import React from "react";

import Layout from "../components/LayoutDark";
import Seo from "../components/Seo";

import { SectionPlain } from "../styles/SectionStyles";
import { Grid, CardWrapper, CardHeader, CardBody, CardFooter, StyledLink } from "../styles/PinkCards.js";

const ScCommunicationPage = () => {
  return (
    <Layout>
      <Seo title="Sc.Communication" />
      <SectionPlain>
        <Grid>

          <CardWrapper >
            <StyledLink to="/sc-communication/rda-communication">
              <CardHeader>
                <h3>R&amp;D Activities Communications</h3>
              </CardHeader>
              <CardBody>
                <h4>I promisse they are not borring.</h4>
                Check out where I've been talking and some of my best slides.           
              </CardBody>
            </StyledLink>
            <CardFooter>
              Last update: 01/08/2022
            </CardFooter>
          </CardWrapper>

          <CardWrapper >
            <StyledLink to="/sc-communication/rda-organisation">
              <CardHeader>
                <h3>R&amp;D Activities Organisation</h3>
              </CardHeader>
              <CardBody>
                <h4>Wanna see what I've been organising?</h4>
                Check out which scientific events had me in their organisation.           
              </CardBody>
            </StyledLink>
            <CardFooter>
              Last update: 05/08/2022
            </CardFooter>
          </CardWrapper>

          <CardWrapper>
            <StyledLink to="/sc-communication/social-media"> 
              <CardHeader>
                <h3>Social Media</h3>
              </CardHeader>
              <CardBody>
                <h4>Have Fun!</h4>
                Pils of scientific curiosities.
              </CardBody>
            </StyledLink>
            <CardFooter>
              Last update: 15/06/2021
            </CardFooter>
          </CardWrapper>

          <CardWrapper >
            <StyledLink to="/sc-communication/news">
              <CardHeader>
                <h3>News</h3>
              </CardHeader>
              <CardBody>
                <h4>Hot headlines, in todays edition!</h4>
                Press reports about my work.           
              </CardBody>
            </StyledLink>
            <CardFooter>
              Last update: 19/05/2020
            </CardFooter>
          </CardWrapper>

          <CardWrapper >
            <StyledLink to="/sc-communication/women-in-science">
              <CardHeader>
                <h3>Women in science</h3>
              </CardHeader>
              <CardBody>
                <h4>Giving visibility to women scientists &#9660;</h4>
                Throwing a bit of light about our work, and science.           
              </CardBody>
            </StyledLink>
            <CardFooter>
              Last update: 11/02/2022
            </CardFooter>
          </CardWrapper>

        </Grid>
        
      </SectionPlain>
    </Layout>
  )
}

export default ScCommunicationPage;