import React from 'react';
import styled from "styled-components";

import {COLORS} from "../styles/Colors";
import { SectionRight } from "../styles/SectionStyles";

import F112022L from '../videos/11F2022-lorena.mp4';
import XAP2019Z from '../videos/XAPI2019-ZigZag.mp4';

const Grid = styled.div`
  display: flex;
  gap: 20px;
  max-width: 100%;
  margin: auto;
  margin-top: 20px; 
  justify-content: right; 
  grid-area: content;

  @media (max-width: 1130px) {
    flex-direction: column;
    align-items: flex-end; 
  }
`;

const VideoWrapper = styled.div`
  width: auto;
  text-align: left;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${COLORS.primary};
  color: ${COLORS.blackJet};
  p {
    margin: 0px 0px 0px 9px;
  }
`;

const WomenSTEM = () => {
  return (
    <SectionRight>
      <h4>Women in Science</h4>

      <Grid>

        <VideoWrapper>
          <video controls>
            <source src={F112022L} type="video/mp4" />
          </video>
          <p>Lorena Barreiro | 11F, 2022</p>
        </VideoWrapper>

        <a href="https://www.crtvg.es/tvg/a-carta/zigzag-diario-4187900?t=426">
          <VideoWrapper>
            <video controls>
              <source src={XAP2019Z} type="video/mp4" />
            </video>
            <p>ZigZag (TVG) | 24 Sep, 2019</p>
          </VideoWrapper>
        </a>

        </Grid>

    </SectionRight>
  );
}

export default WomenSTEM;
