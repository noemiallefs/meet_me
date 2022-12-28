import React from 'react';
import styled from "styled-components";

import Layout from "../../../components/LayoutDark";

import {COLORS} from "../../../styles/Colors";
import { ColorBox, ListProject } from "../../../styles/ProjectStyles";
import { SectionPostC } from "../../../styles/SectionStyles";
import { HeaderSC, SectionPSC, GridSC } from "../../../styles/SCStyles";


import VSCRETUS2021s from '../../../videos/VSCRETUS2021-slides.mp4';

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

const VSCRETUS2021 = () => {
  return (
    <Layout>
      <SectionPostC>
      <HeaderSC>R&amp;D Activities Communication</HeaderSC>

      <h4>V Simposium CRETUS.</h4>
      <h2>Actividade humana - ciclo do mercurio - saúde humana: como afectou o mercurio as poboacións pasadas?</h2>
      <h3>Noemi Álvarez Fernández</h3>
        <GridSC>
          <VideoWrapper>
            <video controls>
              <source src={VSCRETUS2021s} type="video/mp4" />
            </video>
          </VideoWrapper>
        </GridSC>

        <h4>RESUMO</h4>
        <SectionPSC>
          O mercurio é un metal contaminante distribuído por todo o planeta. Este elemento está considerado de especial 
          risco para a saúde humana 1. Para entender como nos afecta temos que coñecer o seu ciclo natural. Dada a 
          importancia do “mercurio herdado” os estudos de paleo-contaminación son fundamentais. As actividades humanas 
          levan perturbando o seu ciclo polo menos dende o AC 3250 (S Península Ibérica) 2. Ata o momento leváronse a cabo 
          diversos estudos sobre como as actividades humanas modificaron os niveis deste metal en distintos ecosistemas. 
          Pero, como afectaron estas perturbacións as propias poboación humanas? E, como podemos estudar este impacto? Para 
          contestar estas preguntas, neste proxecto de investigación propuxemos estudar os restos arqueolóxicos humanos de 
          poboacións antigas. Nunha primeira fase, estudamos dúas poboacións que viviron no mesmo lugar (A Lanzada, Sanxenxo) 
          en dous períodos históricos con variacións significativas dos niveis atmosféricos de Hg (Romano e Tardo-antigo) 3. 
          Os nosos resultados indicaron unha incorporación pre-mortem, exposición homoxénea e sen relación ca dieta. Pero, sí 
          observamos diferencias significativas entre os dous períodos estudados: maiores contidos en periodo Romano que no 
          Tardo-Antigo. Polo que a fonte de Hg máis probable foi a contaminación atmosférica por actividades minero-metalúrxicas. 
          Este estudo apoia a utilidade dos restos óseos arqueolóxicos como arquivos naturais de contaminación por metais pesados, 
          incluso cando a exposición é baixa 4,5. O segundo paso foi estudar cales son os procesos que controlan a distribución do 
          mercurio nos enterramentos. Para iso analizáronse mostras de solo/sedimento de dous transectos (lonxitudinal e horizontal) 
          en dúas tumbas tardo-antigas. Mediante modelado estatístico (PLS-R) identificamos tres procesos que explican ata o 72% da 
          variabilidade do Hg 6. En derradeiro lugar, seguiuse o mesmo diseño de amostraxe e modelado estatítico pero empregando mostras 
          de óso arqueolóxico, ca intención de entender como se distribúe o mercurio no esqueleto (variabilidade intraesquelética) e cales 
          son os procesos que inflúen na sua distribución.     
        </SectionPSC>

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

export default VSCRETUS2021;