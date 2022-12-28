import React from 'react';
import styled from "styled-components";

import Layout from "../../../components/LayoutDark";

import { COLORS } from "../../../styles/Colors";
import { ColorBox, ListProject } from "../../../styles/ProjectStyles";
import { SectionPostC } from "../../../styles/SectionStyles";
import { HeaderSC, SectionPSC, GridSC } from "../../../styles/SCStyles";


import SMM21s from '../../../videos/SMM21-slides.mp4';

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

      <h4>SMM 2021: New approaches in the study of medieval settlement.</h4>
      <h2>Mercury in burials: a new methodological approach for understanding its behaviour in soils/sediments from Late Antiquity inhumations.</h2>
      <h3>Noemi Álvarez Fernández, Antonio Martínez Cortizas, Olalla López Costas</h3>
        <GridSC>
          <VideoWrapper>
            <video controls>
              <source src={SMM21s} type="video/mp4" />
            </video>
          </VideoWrapper>
        </GridSC>

        <h4>Abstract</h4>
        <SectionPSC>
          Mercury is a major environmental pollutant that given its toxicity is considered of global public health concern. 
          The study of mercury concentrations on human archaeological remains shows that this element had an impact even on 
          past-populations with low mining-metallurgical activity, as it happened during the Late Antiquity in SW Europe. 
          Mercury target organs are soft tissues (mainly kidney, liver and nervous system) not bones, which drives to the 
          question of how this element behaves in the inhumations? and is it possible to detect its signal in soil associated 
          to low polluted individuals? and which are the factors that affects its distribution or accumulation? <br/><br/>

          In this study we analysed elemental composition (23 elements) and mercury concentrations in 46 soil/sediment samples 
          from two Late Antiquity tombs of A Lanzada site (Galicia, NW Spain) (AD 5th-6th centuries) and then model its behaviour 
          using PLS-regression. Three processes modelling mercury distribution have been identify: i) inside/outside burial, i.e. 
          mercury comes from the individuals not from soil; ii) inter-individuals differences, since one burial contained the remains 
          of an elder woman and the other one is a coetaneous burial with two men (one juvenile and one mature adult); and iii) micro-scale 
          processes variability that in some cases could be related with thoracic area proximity. As a conclusion we can said that: i) 
          human bodies act as source of mercury and as they provided organic matter also contributes to mercury fixation; ii) the burial 
          context seems to affect its distribution; iii) thoracic area could have a role in mercury distribution. Finally, this study 
          remarks the importance of analysing soil/sediments associated to the burials. They could also be used as an indirect approximation 
          of mercury skeletons content. In addition, Early Medieval is confirmed as low mercury pollution period with less impact in human 
          remains, especially when comparing with Roman times. 
        </SectionPSC>

        <h4>REFERENCES</h4>
        <SectionPSC>
          <ListProject>
            <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Zaira García&ndash;López, Olalla López&ndash;Costas (2021) <strong>Approaching mercury distribution in burial environment using PLS-R modelling.</strong> <i>Scientific reports. <a href="https://doi.org/10.1038/s41598-021-00768-8">https://doi.org/10.1038/s41598-021-00768-8</a></i></li>
          </ListProject>
        </SectionPSC>

      </SectionPostC>
    </Layout>
  );
}

export default SMM21;