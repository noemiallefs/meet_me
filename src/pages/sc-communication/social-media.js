import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/LayoutDark";

import { COLORS } from "../../styles/Colors";
import { SectionPostL } from "../../styles/SectionStyles";
import { HeaderSC } from "../../styles/SCStyles";

const Grid = styled.div`
  display: flex;
  gap: 20px;
  max-width: 100%;
  margin: auto;
  margin-top: 20px; 
  margin-bottom: 70px;
  justify-content: left; 
  grid-area: content;

  @media (max-width: 1130px) {
    flex-direction: column;
    max-width: 500px;
    margin-left: 0px; 
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: left;
  box-shadow: 0 2px 7px 0 ${COLORS.black20}, 0 1px 8px 0 ${COLORS.black20};
  border-radius: 3px;
`;
const CardBody = styled.div`
  margin: 0; 
`;
const CardFooter = styled.div`
  padding: 10px 20px;
  background-color: ${COLORS.gray900};
  color: ${COLORS.white90};
  font-size: 10pt;
  margin-top: auto;
  border-radius: 0px 0px 3px 3px;
`;

const SocialMedia = () => {
  return (
    <Layout>
      <SectionPostL>
        <HeaderSC>Social Media</HeaderSC>
          <Grid>
            
            <CardWrapper>
              <CardBody>
                <a href="https://www.instagram.com/p/CQIgICDjl6l/?igshid=YmMyMTA2M2Y=">
                  <StaticImage 
                    alt='Hg Danish Lager'
                    src='../../images/Hg-danish-lager.webp'
                    placeholder="blurred"
                    layout="constrained"
                    width={300}
                    height={300}
                  />
                </a>         
              </CardBody>
              <CardFooter>
                @eco.past | Posted: 15 JUN, 2021
              </CardFooter>
            </CardWrapper>

            <CardWrapper>
              <CardBody>
                <a href="https://www.instagram.com/stories/highlights/17952178103096891/">
                  <StaticImage 
                    alt='Hg mad hatter'
                    src='../../images/Hg-mad-hatter.webp'
                    placeholder="blurred"
                    layout="constrained"
                    width={300}
                    height={300}
                  />
                </a>         
              </CardBody>
              <CardFooter>
                @eco.past | Posted: 11 MAY, 2021
              </CardFooter>
            </CardWrapper>

            <CardWrapper>
              <CardBody>
                <a href="https://www.instagram.com/stories/highlights/17888230010084871/">
                  <StaticImage 
                    alt='Hg lets go'
                    src='../../images/Hg-lets-go.webp'
                    placeholder="blurred"
                    layout="constrained"
                    width={300}
                    height={300}
                  />
                </a>         
              </CardBody>
              <CardFooter>
                @eco.past | Posted: 21 APR, 2021
              </CardFooter>
            </CardWrapper>
            
          </Grid>
      </SectionPostL>
    </Layout>
  );
}

export default SocialMedia;