import React from 'react';
import styled from "styled-components";

import Layout from "../../../components/LayoutDark";

import { COLORS } from "../../../styles/Colors";
import { ColorBox, ListProject } from "../../../styles/ProjectStyles";
import { SectionPostC } from "../../../styles/SectionStyles";
import { HeaderSC, SectionPSC, GridSC } from "../../../styles/SCStyles";


import LAC21s from '../../../videos/LAC21-slides.mp4';

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

const LAC21 = () => {
  return (
    <Layout>
      <SectionPostC>
      <HeaderSC>R&amp;D Activities Communication</HeaderSC>

      <h4>LAC 2021</h4>
      <h2>From landscapes modification to population health impact.</h2>
      <h3>Noemi Álvarez Fernández, Antonio Martínez Cortizas, Olalla López Costas</h3>
        <GridSC>
          <VideoWrapper>
            <video controls>
              <source src={LAC21s} type="video/mp4" />
            </video>
          </VideoWrapper>
        </GridSC>

        <h4>Abstract</h4>
        <SectionPSC>
          Mercury is a major environmental pollutant extensively used by humans, whose pollution dates back at least to 
          c. 3250 BCE (South Iberian Peninsula). Today and in the past most populations were affected by low dose chronic 
          mercury exposure with levels that varied with anthropogenic activities, mostly linked to landscape modification, 
          such as mining and metallurgy. Despite its toxic nature, mercury impact in humans themselves has been hardly addressed 
          by Archaeology. The aim of this research is to increase our knowledge on mercury levels in past populations by 1) 
          analysing human bones (cortical) from a NW Iberian necropolis covering contrasting periods of atmospheric pollution: 
          Roman AD 1st to 4th centuries and post-Roman AD 5th to 7th centuries; 2) considering intra-skeletal variability; 3) 
          contextualizing our findings with previous works. Samples from 3 types of bone (n=135) as well as soils/sediments 
          associated to the burials (n=34) were analysed. Mercury concentrations in soil were below 5 ng g-1, while the average 
          in bone was 36 ± 55 ng g-1, making post-depositional incorporation unlikely. We found significant differences between 
          the two periods (Romans: 52 ± 62 ng g-1, post-Romans: 20 ± 23 ng g-1), but no effect of type of bone, sex, age, social 
          status or diet of the individuals. Our results agree with the chronology of mercury pollution reconstructed from a local 
          peatland, which suggests an atmospheric source. This fact contrasts with previous research in which high mercury concentrations 
          were mainly related to post-mortem burial customs and pre-mortem medical treatment and poisoning. Thus, mercury distribution 
          in past communities was possibly more complex than previously thought, with different pre- and post-mortem sources interacting. 
          Furthermore, our research also supports the use of archaeological bones as environmental archive of metal pollution, 
          when metal cultural exposure is low.
        </SectionPSC>

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

export default LAC21;