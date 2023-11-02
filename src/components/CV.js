import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

import { COLORS } from "../styles/Colors";

const SectionCV = styled.section`
  text-align: center;
  background: ${COLORS.blackJet};
  color: ${COLORS.whiteSnow};
`;
const ContainerCV = styled.div`  
  max-width: 700px;
  margin: auto;
  padding: 0px 25px 0px 25px;
`;
const EventWrap = styled.div`
  border-left: 1px solid ${COLORS.primary}; 
  margin-left: 39px;
  margin-bottom: 10px;
`;

const HeaderCV = styled.h1`
  font-family: 'Saira Extra Condensed';
  font-weight: 700;
  font-size: 2.5rem;
`;
const Date = styled.p`
  color: ${COLORS.primary};
  padding-bottom: 0;
`;
const Event = styled.p`
  text-align: left;
`;
const List = styled.ul`
  list-style-type: '· ';
  text-align: left;
  line-height: 30px;
  font-size: 11.5pt;
  margin-left: 20px;
  postiion: absolute;
`;

const Grid = styled.div`
  display: flex;
  gap: 10px;
  max-width: 90%;
  margin: 30px auto;
  align-items: stretch;
  grid-area: content;
  justify-content: center;
  padding-bottom: 20px;

  @media (max-width: 1504px) {
    flex-direction: column;
  }
  @media (min-width: 698px) {
    max-width: 57%;
  }
  @media (min-width: 1504px) {
    max-width: 79%;
  }
`;
const CardWrapper = styled.div`
  background-color: ${COLORS.gray900};
  width: 100%;
  height: auto;
  text-align: left;
`;
const CardHeader = styled.header`
  margin: 20px 150px 20px 20px;
  border-bottom: 2px solid ${COLORS.primary};
  h3 {
    font-size: 13.5px;
  }
`;
const CardBody = styled.div`
  margin: 20px;
  line-height: 30px;
  font-size: 11.5pt;
`;

const VerticalLineHeader = styled.div`
  border-left: 2px solid ${COLORS.primary};
  margin-left: 50%;
  height: 70px;
`;
const VerticalLineDate = styled.div`
  border-left: 2px solid ${COLORS.primary};
  margin-left: 50%;
  height: 30px;
`;

const HorizontalLine = styled.div`
  border-top: 2px solid ${COLORS.primary};
  margin: 0px 0 0px 0;
`;

const ColorBox = styled.span`
  background-color: ${COLORS.primaryDark};
  padding: 2px;
`;

const Cv = () => {
  return (
    <SectionCV>
      <ContainerCV>
        <HeaderCV>Education</HeaderCV>
        <VerticalLineDate />
        <Date>2018 - 2023</Date>
        <Event><strong>PhD</strong> - Environmental and Natural Resources | CRETUS - EcoPast (USC)</Event>
        <EventWrap>
          <List>
            <li>International PhD. <i>Cum Laude</i>.</li>
            <li>Study of the relation between mercury and human populations through skeleton remains.</li>
            <li><strong>Key words:</strong> mercury, pollution, paleoenvironment, human health, osteoarchaeology.</li>
            <li><strong>Laboratory Techniques:</strong> DMA, XRF, FTIR-ATR, Core-Scanner, bone bioapatite and collagen extraction.</li>
            <li><strong>Supervirsors:</strong> Olalla López Costas and Antonio Martínez Cortizas.</li>
            <li><strong>Research stay:</strong> Malin Kylander (Stockholms Universitet).</li>
            <li><Link to="/idi/phd">Read more about the project.</Link></li>
          </List>
        </EventWrap>
        <VerticalLineDate />
        <Date>2017 - 2018</Date>
        <Event><strong>MSc</strong> - Bioinformatics and Biostatistics (UOC/UB)</Event>
        <EventWrap>
          <List>
            <li><strong>MSc thesis:</strong> Machine Learning and predictive models in forensic anthropology.<br/>
                <strong>Supervisors:</strong> Xavier Jordana Comin and David Merino Arraz.<br/>
                (Available at: <a href='http://openaccess.uoc.edu/webapps/o2/handle/10609/82140'>UOC</a>)
            </li>
            <li><strong>Practicum:</strong> Spectroscopic data pre-processing software - Web prototype.<br/>
                <strong>Supervisors:</strong> Antonio Martínez Cortizas and David Merino Arranz.
            </li>
          </List>
        </EventWrap>
        <VerticalLineDate />
        <Date>2013 - 2017</Date>
        <Event><strong>BSc</strong> - Biology (USC)</Event>
        <EventWrap>
          <List>
            <li>BSc alumni committee.</li>
            <li>SICUE (UB).</li>
            <li><strong>BSc thesis:</strong> Spectroscopic characterisation (FTIR-ATR) of <i>Posidonia sp.</i> mat sediments from Garden Island (Australia).<br/>
                <strong>Supervisor:</strong> Antonio Martínez Cortizas.
            </li>
            <li><strong>Curricular Practicum:</strong> Human remains study.<br/>
                <strong>Supervisors:</strong> Maria Eulàlia Surbirà i de Galdàcano (UAB).
            </li>
            <li><strong>Extra-curricular Practicum:</strong> Archaeological sediment characterisation.<br/>
                <strong>Supervisors:</strong> Olalla López Costas and Antonio Martínez Cortizas (EcoPast).
            </li>
          </List>
        </EventWrap>
        <VerticalLineHeader />
        <HeaderCV>Expertise</HeaderCV>
        <VerticalLineDate />
        <Date>2022 - now</Date>
        <Event><strong>Project Technician</strong> | Boscalia Technoligies</Event>
        <EventWrap>
          <List>
            <li><strong>COSE</strong><br/>
                         LaTeX template design <br/>
                         Autofill LaTeX template from dataset | Python <br/>
                         Database development and handle | MySQL <br/>
            </li>
            <li><strong>TANNIRS</strong> | <a href="http://boscalia.org/en/tannirs-project">About the Project</a><br/>
                         Statistical Modelling and Coding | R <br/>
                         Analitical Methods: Vis-NIR + FTIR-ATR <br/>
            </li>
            <li><strong>SATree</strong> | <a href="http://boscalia.org/en/satree-project">About the Project</a><br/>
                        Statistical Modelling and Coding | Python<br/>
                        Supervisor of the collaborating entity: external academic practices (URJC)
            </li>
            <li><strong>IoFT</strong><br/>
                        HORIZONT2022 Project propousal: draft and final version.
            </li>
          </List>
        </EventWrap>
        <Event><strong>Reviewer</strong></Event>
        <EventWrap>
          <List>
            <li>Scientific Reports</li>
            <li>Journal of Chemometrics</li>
            <li>Journal of Archaeological Method and Theory</li>
          </List>
        </EventWrap>
        <VerticalLineDate />
        <Date>2021</Date>
        <p><strong>Web Managment</strong> | <a href="https://ecopast.es/">EcoPast</a></p>
        <VerticalLineDate />
        <Date>2020 - 2021</Date>
        <Event><strong>Pre-doctoral researcher</strong> | EcoPast (USC)</Event>
        <EventWrap> 
          <List>
            <li>Archaeological bone and soil/sediments chemical characterisation and statistical data analysis.</li>
            <li>Olalla López Costas.</li>
            <h6> -- PUBLICATIONS --</h6>
            <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Zaira García&ndash;López, Olalla López&ndash;Costas (2021) <strong>Approaching mercury distribution in burial environment using PLS-R modelling.</strong> <i>Scientific reports. <a href="https://doi.org/10.1038/s41598-021-00768-8">https://doi.org/10.1038/s41598-021-00768-8</a></i></li>
            <li>Zaira García-López, Antonio Martínez Cortizas, <ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Olalla López-Costas (2022) <strong>Understanding Necrosol pedogenetical processes in post-Roman burials developed on dunes sands.</strong> <i>Scientifc reports. <a href="https://doi-org.ezbusc.usc.gal/10.1038/s41598-022-14750-5">https://doi-org.ezbusc.usc.gal/10.1038/s41598-022-14750-5</a></i></li>
            <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Olalla López&ndash;Costas (2022) <strong>Structural equation modelling of mercury intra-skeletal variability on archaeological human remains.</strong> <i>Science of The Total Environment. <a href="https://doi.org/10.1016/j.scitotenv.2022.158015">https://doi.org/10.1016/j.scitotenv.2022.158015</a></i></li>
          </List>
        </EventWrap>
        <Event><strong>Article Colab.</strong> | EcoPast (USC)</Event>
        <EventWrap>
          <List>
            <li>Antonio Martínez Cortizas, Jenny K Sjöström, Eleonor E Ryberg, Malin E Kylander, Joeri Kaal, Olalla López-Costas, <ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Richard Bindler (2021) <strong>9000 years of changes in peat organic matter composition in Store Mosse (Sweden) traced using FTIR-ATR.</strong> <i>Boreas. <a href="https://doi-org/10.1111/bor.12527">https://doi-org/10.1111/bor.12527</a></i></li>
          </List>
        </EventWrap>
        <Event><strong>Co-Supervisor BSc thesis</strong> | EcoPast (USC)</Event>
        <EventWrap>
          <List>
            <li>Spectroscopic study of mummified human remains.</li>
            <li>Co-supervising with Olalla López Costas and Antonio Martínez Cortizas.</li>
          </List>
        </EventWrap>
        <VerticalLineDate />
        <Date>2018 - 2020</Date>
        <Event><strong>Pre-doctoral researcher</strong> | EcoPast (USC)</Event>
        <EventWrap>
          <List>
            <li>Archaeological bone chemical characterisation: (i) metal content, (ii) elemental composition, (iii) isotopic characterisation</li>
            <li>Olalla López Costas.</li>
            <h6> -- PUBLICATIONS --</h6>
            <li>Olalla López&ndash;Costas, Malin Kylander, Nadine Mattielli, <ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Marta Pérez&ndash;Rodríguez, Tim Mighall, Richard Bindler, Antonio Martínez Cortizas (2020) <strong>Human bones tell the story of atmospheric mercury and lead exposure at the edge of Roman World.</strong> <i>Science of The Total Environment. <a href="https://doi.org/10.1016/j.scitotenv.2019.136319">https://doi.org/10.1016/j.scitotenv.2019.136319</a></i></li>
            <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Olalla López&ndash;Costas (2020) <strong>Atmospheric mercury pollution deciphered through archaeological bones.</strong> <i>Journal of Archaeological Science. <a href="https://doi.org/10.1016/j.jas.2020.105159">https://doi.org/10.1016/j.jas.2020.105159</a></i></li>
          </List>
        </EventWrap>
        <Event><strong>Laboratory teaching assistance</strong> | (USC)</Event>
        <EventWrap>
          <List>
            <li>Necropolis and Human Remains.</li>
            <li>Olalla López Costas in "Máster en Arqueoloxía e Ciencias da Antigüedade".</li>
          </List>
        </EventWrap>
        <Event><strong>Supervisor of the collaborating entity</strong> | EcoPast (USC)</Event>
        <EventWrap>
          <List>
            <li>External Academic Practices.</li>
            <li>Archaeological human bones study.</li>
          </List>
        </EventWrap>
        <Event><strong>Laboratory teaching assistance</strong> | EcoPast (USC)</Event>
        <EventWrap>
          <List>
            <li>Summer camp Bio-archaeology.</li>
            <li>Archaeological human bones study.</li>
          </List>
        </EventWrap>
        <Event><strong>R package: <Link to="/idi/andurinha">andurinha</Link></strong> | EcoPast Colab.</Event>
        <VerticalLineDate />
        <Date>2018</Date>
        <Event><strong>Technical Research Support</strong> | EcoPast (USC)</Event>
        <EventWrap>
          <List>
            <li>Archaeological human bones and associated sediments study and treatment.</li>
            <li>Olalla López Costas, project "Galicien Paleodiet".</li>
            <li>Olalla López Costas and Anta de Moura, S.L., project "Estudo dos sedimentos asociados ós recipientes globulares atopados no castro de Toralla".</li>
          </List>
        </EventWrap>
        <VerticalLineDate />
        <Date>2016 - 2017</Date>
        <Event><strong>Co-author</strong> | Rizzoli Libri S.P.A.</Event>
        <EventWrap>
          <List>
            <li>Trinidad Fernández González, <strong>Noemi Álvarez Fernández</strong>, Elena Zanon (2018) ¡Y ahora en ESPAÑOL 1! Rizzolli libri S.p.A.</li>
            <li>Trinidad Fernández González, <strong>Noemi Álvarez Fernández</strong>, Elena Zanon (2018) ¡Y ahora en ESPAÑOL 2! Rizzolli libri S.p.A.</li>
            <li>Trinidad Fernández González, <strong>Noemi Álvarez Fernández</strong>, Elena Zanon (2018) ¡Y ahora en ESPAÑOL 3! Rizzolli libri S.p.A.</li>
          </List>
        </EventWrap>
        <VerticalLineDate />
        <Date>2015</Date>
        <Event><strong>Co-author</strong> | Zanichelli editore S.P.A.</Event>
        <EventWrap>
          <List>
            <li>Trinidad Fernández González, Laura Carolo Fonte, <strong>Noemi Álvarez Fernández</strong> (2016) ¡Consigue el DELE! B2-Avanzado. Zanichelli editore S.p.A.</li>
          </List>
        </EventWrap>
        <VerticalLineHeader />
        <HeaderCV>Courses</HeaderCV>
        <VerticalLineDate />
        <Date>2022</Date>
        <Event><strong>QGIS: intermediate.</strong> (Imasgal - FUNDAE)</Event>
        <EventWrap>
          <List>
            <li>Advanced edition tools.</li>
            <li>Spatial information georeferenciation.</li>
            <li>Digital elevation model analysis.</li>
            <li>SAGA tools.</li>
            <li>Raster calculator.</li>
            <li>LASTools: working with LIDAR.</li>
            <li>The modeler: automation of geoprocesses.</li>
            <li>Graphics: symbolisation by diagrams and the complement 'dataploty'.</li>
            <li>Creation of dynamic atlases.</li>
            <li>Publish geographic information on the web QGIS CLOUD.</li>
          </List>
        </EventWrap>
        <Event><strong>QGIS: beginner.</strong> (Imasgal - FUNDAE)</Event>
        <EventWrap>
          <List>
            <li>Introduction to geographical information systems (GIS).</li>
            <li>Introduction to QGIS.</li>
            <li>Data and geographical information.</li>
            <li>Geographical information managment.</li>
            <li>Create and edit geographical information.</li>
            <li>Create and edit alphanumeric information.</li>
            <li>The toolbox: geographical data processing.</li>
            <li>Generate cartography.</li>
          </List>
        </EventWrap>
        <Event><strong>Analysis and visualisation of spatial data with R.</strong> (EDIUS - USC)</Event>
        <VerticalLineDate />
        <Date>2021 - 2022</Date>
        <Event><strong>Innovation and Artificial Iteligence.</strong> (Akademia - Fundación Innova Bankinter)</Event>
        <VerticalLineDate />
        <Date>2021</Date>
        <Event><strong>Google IT Support.</strong> (Google - Coursera)</Event>
        <EventWrap>
          <List>
            <li>Basic aspects of technical assistance.</li>
            <li>The bits and bytes of informatics networks.</li>
            <li>Operative Systems and you: become and advanced user.</li>
            <li>Systems administration and infraestructure services in IT.</li>
            <li>Informatic security: defense against digital dark arts.</li>
          </List>
        </EventWrap>
        <VerticalLineDate />
        <Date>2020</Date>
        <Event><strong>Data Science and Machine Learning: from regression to neural networks.</strong> (EDIUS - USC)</Event>
        <Event><strong>Si te dedicas a la Ciencia ¡Divulgala!.</strong> (Universidad de Oviedo)</Event>
        <VerticalLineDate />
        <Date>2019</Date>
          <Event><strong>Data Bases Use and Managment.</strong> (EDIUS - USC)</Event>
          <Event><strong>Geographic Information Systems (GIS/QUANTUM).</strong> (EDIUS - USC)</Event>
          <Event><strong>Patents as element of strategic value.</strong> (EDIUS - USC)</Event>
          <Event><strong>Stress and time managment during the PhD.</strong> (EDIUS - USC)</Event>
          <Event><strong>Scientific writing in Forensic Sciences.</strong> (EDIUS - USC)</Event>
        <VerticalLineDate />
        <Date>2017</Date>
        <Event><strong>X-ray Fluorescence (XRF).</strong> (Unidade de raios X - Fluorescencia de Raios X, RIAIDT - USC)</Event>
        <VerticalLineHeader />
        <HeaderCV>Grants and Awards</HeaderCV>
        <VerticalLineDate />
        <Date>2020 - 2021</Date>
        <p><strong>ERASMUS+</strong> | Research stay (4 months) in the Stockholms Universitet (Sweden).</p>
        <VerticalLineDate />
        <Date>2014</Date>
        <p><strong>Compostela Debate Club (USC)</strong> | 1<sup>st</sup> prize of the III Internal League.</p>
        <VerticalLineDate />
        <Date>2012 - 2014</Date>
        <p><strong>MEC</strong> | Becas y ayudas a alumnos de niveles postobligatorios. Universitarios.</p>
        <VerticalLineHeader />
      </ContainerCV>
      <HorizontalLine />
      <HeaderCV>Skills</HeaderCV>
      <Grid>
        <CardWrapper>
          <CardHeader>
            <h3>Languages</h3>
          </CardHeader>
          <CardBody>
            Galician | Native <br />
            Spanish | Native <br />
            English &nbsp;&nbsp;| C1
          </CardBody>
        </CardWrapper>
        <CardWrapper>
          <CardHeader>
            <h3>Laboratory + Field Techniques</h3>
          </CardHeader>
          <CardBody>
            FTIR-ATR spectroscopy <br />
            X-ray fluorescence (XRF) <br />
            Direct Mercury Analyser (DMA) <br />
            Core-Scanner <br />
            Russian corer (peat sampling) <br />
            Soil/sediment characterisation <br />
            Bone bioapatite and collagen extraction <br />
            Archaeological excavation indoors <br />
          </CardBody>
        </CardWrapper>
        <CardWrapper>
          <CardHeader>
            <h3>Computer Sciences</h3>
          </CardHeader>
          <CardBody>
            <strong>Statistics:</strong> R, Python <br />
            <strong>Programming:</strong> R, Python <br />
            <strong>Web development:</strong> HTML, CSS, JavaScript, PHP <br />
            <strong>Text editors:</strong> LaTex, Markdown <br />
            <strong>Maps:</strong> R, Python, QGIS <br />
            <strong>DDBB:</strong> MySQL, No SQL <br />
            <strong>Repositories:</strong> Git <br />
            <strong>S.O.:</strong> Unix <br />
          </CardBody>
        </CardWrapper>
      </Grid>
      <HorizontalLine />
    </SectionCV>
  );
}

export default Cv;