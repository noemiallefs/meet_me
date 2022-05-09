import React from 'react';
import styled from "styled-components";
import { StaticImage } from 'gatsby-plugin-image';

import { COLORS } from "../styles/Colors";
import { SectionRight } from "../styles/SectionStyles";

const Grid = styled.div`
  display: flex;
  gap: 20px;
  max-width: 100%;
  margin: auto;
  margin-top: 20px; 
  justify-content: right; 
  grid-area: content;

  @media (max-width: 548px) {
    flex-direction: column;
    align-items: flex-end; 
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
    <SectionRight>
      <h4>Social Media</h4>

      <Grid>

        <CardWrapper>
          <CardBody>
            <a href="https://www.instagram.com/p/CQIgICDjl6l/?igshid=YmMyMTA2M2Y=">
              <StaticImage 
                alt=''
                src='../images/hg-danish-lager.webp'
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

        <CardWrapper >
          <CardBody>
            <a href="https://www.instagram.com/p/CQIgICDjl6l/?igshid=YmMyMTA2M2Y=">
              <StaticImage 
                alt=''
                src='../images/hg-lets-go.webp'
                placeholder="blurred"
                layout="constrained"
                width={300}
                height={300}
              />
            </a>         
          </CardBody>
          <CardFooter>
            @eco.past | Last post: 11 MAY, 2021
          </CardFooter>
        </CardWrapper>

        </Grid>

    </SectionRight>
  );
}

export default SocialMedia;
