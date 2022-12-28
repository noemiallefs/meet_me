import React from 'react';
import styled from "styled-components";

import Layout from "../../../components/LayoutDark";

import {COLORS} from "../../../styles/Colors";
import { ColorBox, ListProject } from "../../../styles/ProjectStyles";
import { SectionPostC } from "../../../styles/SectionStyles";
import { HeaderSC, SectionPSC, GridSC } from "../../../styles/SCStyles";


import EAA21s from '../../../videos/EAA21-slides.mp4';

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

const EAA21 = () => {
  return (
    <Layout>
      <SectionPostC>
      <HeaderSC>R&amp;D Activities Communication</HeaderSC>

      <h4>EAA 2021</h4>
      <h2>Pollution's boomerang: the impact of increased atmospheric mercury levels in past populations.</h2>
      <h3>Noemi Álvarez Fernández, Antonio Martínez Cortizas, Olalla López Costas</h3>
        <GridSC>
          <VideoWrapper>
            <video controls>
              <source src={EAA21s} type="video/mp4" />
            </video>
          </VideoWrapper>
        </GridSC>

        <h4>Abstract</h4>
        <SectionPSC>
          Past human societies modified their environment in several ways; however, the extent of these modifications is, 
          in many cases, poorly known. Under the Roman rule, extensive environmental changes took place, in the Western
          Empire in particular. During this historical period, atmospheric levels of several potentially toxic metals, 
          such as mercury, increased substantially due to intense mining and metallurgy. These activities left behind 
          their imprint in both the landscape and humans. <br/><br/>
          
          This research is focused in A Lanzada (NW Iberia) - a rural necropolis placed relatively far away from the 
          neuralgic sources of mercury emissions during Roman period. The aim was to find out variations in mercury levels 
          in human remains. Human (cortical) bone was analysed from skeletons covering contrasting periods of atmospheric p
          ollution (Roman, AD 1st-4th centuries, post-Roman, AD 5th -7th centuries). Samples from 3 types of bone (n=143; ribs, 
          long bones and crania) as well as soils/sediments associated to the burials (n=34) were analysed. Mercury concentrations 
          in soils were below 5 ng g-1, while the average in bone was 36±52 ng g-1, making post-depositional incorporation unlikely. 
          Concentrations were found to be significantly different between the two periods (Roman: 54 ± 60 ng g-1, post-Romans: 21±23 ng g-1), 
          but for type of bone, sex, age, social status or diet of the individuals they were not. Values from Roman times were 
          moderately elevated when compared with other collections of individuals subjected to direct mercury exposition. These 
          results agree well with the chronology of mercury pollution reconstructed from a local peatland, suggesting a predominant 
          atmospheric source. Our study shows that, as it happens today, rural Roman populations were mostly affected by low dose 
          chronic mercury exposure, whose levels varied with the intensity of the anthropogenic activities.
 
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

export default EAA21;