import React from 'react';
import styled from "styled-components";

import Layout from "../../../components/LayoutDark";

import { COLORS } from "../../../styles/Colors";
import { ColorBox, ListProject } from "../../../styles/ProjectStyles";
import { SectionPostC } from "../../../styles/SectionStyles";
import { HeaderSC, SectionPSC, GridSC } from "../../../styles/SCStyles";


import SMM21s from '../../../videos/CNIBIO19-slides.mp4';

const VideoWrapper = styled.div`
  width: auto;
  text-align: left;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background-color: ${COLORS.primary};
  color: ${COLORS.blackJet};
`;

const SMM21 = () => {
  return (
    <Layout>
      <SectionPostC>
      <HeaderSC>R&amp;D Activities Communication</HeaderSC>

      <h4>Coloquio con Novas Investigadoras. Bioloxía 2019.</h4>
      <h2>Unha tese tóxica?</h2>
      <h3>Noemi Álvarez Fernández</h3>
        <GridSC>
          <VideoWrapper>
            <video controls>
              <source src={SMM21s} type="video/mp4" />
            </video>
          </VideoWrapper>
        </GridSC>
      
      <h4>REFERENCES</h4>
      <SectionPSC>
        <ListProject>
          <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Olalla López&ndash;Costas (2020) <strong>Atmospheric mercury pollution deciphered through archaeological bones.</strong> <i>Journal of Archaeological Science. <a href="https://doi.org/10.1016/j.jas.2020.105159">https://doi.org/10.1016/j.jas.2020.105159</a></i></li>
          <li>A Martínez-Cortizas, X Pontevedra-Pombal, E García-Rodeja, JC Novoa-Munoz, W Shotyk (1999) <strong>Mercury in a Spanish peat bog: archive of climate change and atmospheric metal deposition.</strong> <i>Science. <a href="https://doi.org/10.1126/science.284.5416.939">https://doi.org/10.1126/science.284.5416.939</a></i></li>
        </ListProject>
      </SectionPSC>
      </SectionPostC>
    </Layout>
  );
}

export default SMM21;