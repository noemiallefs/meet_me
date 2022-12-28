import React from 'react';
import styled from "styled-components";

import Layout from "../../../components/LayoutDark";

import {COLORS} from "../../../styles/Colors";
import { ColorBox, ListProject } from "../../../styles/ProjectStyles";
import { SectionPostC } from "../../../styles/SectionStyles";
import { HeaderSC, SectionPSC, GridSC } from "../../../styles/SCStyles";


import EAA22s from '../../../videos/EAA22-slides.mp4';

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

const EAA22 = () => {
  return (
    <Layout>
      <SectionPostC>
      <HeaderSC>R&amp;D Activities Communication</HeaderSC>

      <h4>EAA 2022</h4>
      <h2>Modelling Mercury Behaviour in burial's soils.</h2>
      <h3>Noemi Álvarez Fernández, Antonio Martínez Cortizas, Olalla López Costas</h3>
        <GridSC>
          <VideoWrapper>
            <video controls>
              <source src={EAA22s} type="video/mp4" />
            </video>
          </VideoWrapper>
        </GridSC>

        <h4>Abstract</h4>
        <SectionPSC>
          It is well known that occupation soils are usually enriched in chemical elements (e.g., phosphorous), 
          depending on the activities developed on them. Among occupational surfaces, necropolises and other sites 
          with funerary function have been scarcely approached. However, funerary deposits can be enriched with 
          specific elements with an important impact due to their potential toxicity, as mercury and lead. Human 
          activities, such as mining and metallurgy, released metals to the environment which were incorporated 
          into human bodies by different routes (inhalation, intake, etc.). After inhumation, when bodies decompose, 
          the metals are released to the soil. Although the necropolis area may change in function over time, element 
          accumulation may persist. To test this hypothesis, we sampled two post-Roman (AD 5th-6th centuries; n= 46) 
          burials from A Lanzada site (NW Spain), together with a pedo-sedimentary sequence (n= 34) from the occupational 
          area. All samples were analysed by XRF (23 elements) and using a mercury analyser. We aimed to understand if 
          burial soils could be mercury enriched, if this enrichment was higher than in the occupational soil, and how 
          the accumulation happened inside and outside the burials. Samples located inside the burials were 10-fold enriched 
          compared to the occupational soil. In both areas, mercury was found to concentrate in the fine fractions (silt+clay). 
          PLS-Regression modelling allowed to identify three drivers controlling mercury distribution: i) inside/outside burials; ii) 
          differences between the buried individuals; and iii) micro-scale variability - somewhat related to proximity to the individuals' 
          thoracic area. According to our results, soil/sediments inside burials can be significantly enriched in mercury compared 
          to nearby occupational soils at the same necropolis. This fact should be taken into account when former funerary areas 
          underwent new later uses, especially if it was/is agrarian. 
        </SectionPSC>

        <h4>REFERENCES</h4>
        <SectionPSC>
          <ListProject>
            <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Olalla López&ndash;Costas (2022) <strong>Structural equation modelling of mercury intra-skeletal variability on archaeological human remains.</strong> <i>Science of The Total Environment. <a href="https://doi.org/10.1016/j.scitotenv.2022.158015">https://doi.org/10.1016/j.scitotenv.2022.158015</a></i></li>
            <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Zaira García&ndash;López, Olalla López&ndash;Costas (2021) <strong>Approaching mercury distribution in burial environment using PLS-R modelling.</strong> <i>Scientific reports. <a href="https://doi.org/10.1038/s41598-021-00768-8">https://doi.org/10.1038/s41598-021-00768-8</a></i></li>
            <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Olalla López&ndash;Costas (2020) <strong>Atmospheric mercury pollution deciphered through archaeological bones.</strong> <i>Journal of Archaeological Science. <a href="https://doi.org/10.1016/j.jas.2020.105159">https://doi.org/10.1016/j.jas.2020.105159</a></i></li>
            <li>Olalla López&ndash;Costas, Malin Kylander, Nadine Mattielli, <ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Marta Pérez&ndash;Rodríguez, Tim Mighall, Richard Bindler, Antonio Martínez Cortizas (2020) <strong>Human bones tell the story of atmospheric mercury and lead exposure at the edge of Roman World.</strong> <i>Science of The Total Environment. <a href="https://doi.org/10.1016/j.scitotenv.2019.136319">https://doi.org/10.1016/j.scitotenv.2019.136319</a></i></li>
          </ListProject>
        </SectionPSC>

      </SectionPostC>
    </Layout>
  );
}

export default EAA22;