import React from 'react';
import styled from "styled-components";

import Layout from "../../../components/LayoutDark";

import {COLORS} from "../../../styles/Colors";
import { ColorBox, ListProject } from "../../../styles/ProjectStyles";
import { SectionPostC } from "../../../styles/SectionStyles";
import { HeaderSC, SectionPSC, GridSC } from "../../../styles/SCStyles";


import Arqueometria2021s from '../../../videos/Arqueometria2021-slides.mp4';

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

const Arqueometria2021 = () => {
  return (
    <Layout>
      <SectionPostC>
      <HeaderSC>R&amp;D Activities Communication</HeaderSC>

      <h4>VII Xornadas de Arqueometría en Galicia: Entre o ritual e o mundano.</h4>
      <h2>Hg e Humanos: unha relación tóxica.</h2>
      <h3>Noemi Álvarez Fernández</h3>
        <GridSC>
          <VideoWrapper>
            <video controls>
              <source src={Arqueometria2021s} type="video/mp4" />
            </video>
          </VideoWrapper>
        </GridSC>

        <h4>REFERENCIAS</h4>
        <SectionPSC>
          <ListProject>
            <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Zaira García&ndash;López, Olalla López&ndash;Costas (2021) <strong>Approaching mercury distribution in burial environment using PLS-R modelling.</strong> <i>Scientific reports. <a href="https://doi.org/10.1038/s41598-021-00768-8">https://doi.org/10.1038/s41598-021-00768-8</a></i></li>
            <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Olalla López&ndash;Costas (2020) <strong>Atmospheric mercury pollution deciphered through archaeological bones.</strong> <i>Journal of Archaeological Science. <a href="https://doi.org/10.1016/j.jas.2020.105159">https://doi.org/10.1016/j.jas.2020.105159</a></i></li>
            <li>A Martínez-Cortizas, X Pontevedra-Pombal, E García-Rodeja, JC Novoa-Munoz, W Shotyk (1999) <strong>Mercury in a Spanish peat bog: archive of climate change and atmospheric metal deposition.</strong> <i>Science. <a href="https://doi.org/10.1126/science.284.5416.939">https://doi.org/10.1126/science.284.5416.939</a></i></li>
          </ListProject>
        </SectionPSC>

      </SectionPostC>
    </Layout>
  );
}

export default Arqueometria2021;