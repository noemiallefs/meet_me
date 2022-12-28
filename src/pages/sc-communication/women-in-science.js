import React from 'react';
import styled from "styled-components";

import Layout from "../../components/LayoutDark";

import {COLORS} from "../../styles/Colors";
import { SectionPostL } from "../../styles/SectionStyles";
import { HeaderSC, SectionPSC, GridSC } from "../../styles/SCStyles";

import F112022L from '../../videos/11F2022-lorena.mp4';
import XAP2019Z from '../../videos/XAPI2019-ZigZag.mp4';

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
    <Layout>
      <SectionPostL>
      <HeaderSC>Women in Science</HeaderSC>

      <h4>Día da muller e a nena na ciencia</h4>

      <SectionPSC>
        Collaboration with Lorena Barreiro Silva to diseminate the role of the women in Science.
        Activity associated with the Geography and History subject in a Galician high-school.
      </SectionPSC>
        <GridSC>
          <VideoWrapper>
            <video controls>
              <source src={F112022L} type="video/mp4" />
            </video>
            <p>Lorena Barreiro | 11F, 2022</p>
          </VideoWrapper>
        </GridSC>

        <h4>I Xornadas de Arqueoloxia e Patrimonio de Galicia</h4>
        <h3>ArqFem | 2019</h3>
        <SectionPSC>
          Participation of Celtia Rodríguez González and me in the TV-show ZigZag.
          To to talk about the IXAP.
        </SectionPSC>
        <GridSC>
          <a href="https://www.crtvg.es/tvg/a-carta/zigzag-diario-4187900?t=426">
            <VideoWrapper>
              <video controls>
                <source src={XAP2019Z} type="video/mp4" />
              </video>
              <p>ZigZag (TVG) | 24 Sep, 2019</p>
            </VideoWrapper>
          </a>
        </GridSC>
      </SectionPostL>
    </Layout>
  );
}

export default WomenSTEM;