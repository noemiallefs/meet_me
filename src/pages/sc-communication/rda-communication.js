import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../../components/LayoutDark";

import { SectionPostL } from "../../styles/SectionStyles";
import { HeaderSC, GridSC } from "../../styles/SCStyles";
import { CardWrapperNews, CardHeadNews, CardFooterNews } from "../../styles/NewsStyles";
import { SectionDark, SectionLeft } from "../../styles/SectionStyles";

const GridRDC = styled(GridSC)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 100%;
  margin-bottom: 20px;

  @media (max-width: 742px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

const RdCommunications = () => {
  return (
    <Layout>
    <SectionPostL>
      <HeaderSC>R&amp;D Activities Communication</HeaderSC>

      <h2>2022</h2>
        <GridRDC>

          <CardWrapperNews>
            <Link to="/sc-communication/rda-communication/EAA22">
              <CardHeadNews>
                <StaticImage 
                  alt=''
                  src='../../images/EAA22-main.webp'
                  placeholder="blurred"
                  layout="constrained"
                  width={620}
                  height={350}
                />
              </CardHeadNews>
            </Link>
              <CardFooterNews>
                EAA'22 | 1 SEP, 2022
              </CardFooterNews>
            </CardWrapperNews>
          </GridRDC>

        <h2>2021</h2>
          <GridRDC>
            <CardWrapperNews>
              <Link to="/sc-communication/rda-communication/Arqueometria2021">
                <CardHeadNews>
                  <StaticImage 
                    alt=''
                    src='../../images/Arqueometria2021-main.webp'
                    placeholder="blurred"
                    layout="constrained"
                    width={620}
                    height={350}
                  />
                </CardHeadNews>
              </Link>
                <CardFooterNews>
                  VII Xornadas de Arqueometría | 20 OCT, 2021
                </CardFooterNews>
            </CardWrapperNews>

            <CardWrapperNews>
              <Link to="/sc-communication/rda-communication/VSCRETUS2021">
                <CardHeadNews>
                  <StaticImage 
                    alt=''
                    src='../../images/VSCRETUS2021-main.webp'
                    placeholder="blurred"
                    layout="constrained"
                    width={620}
                    height={350}
                  />
                </CardHeadNews>
              </Link>
                <CardFooterNews>
                V Simposium CRETUS. | 23 SEP, 2021
                </CardFooterNews>
            </CardWrapperNews>

            <CardWrapperNews>
              <Link to="/sc-communication/rda-communication/EAA21">
                <CardHeadNews>
                  <StaticImage 
                    alt=''
                    src='../../images/EAA21-main.webp'
                    placeholder="blurred"
                    layout="constrained"
                    width={620}
                    height={350}
                  />
                </CardHeadNews>
              </Link>
                <CardFooterNews>
                EAA'21 | 10 SEP, 2021
                </CardFooterNews>
            </CardWrapperNews>

            <CardWrapperNews>
              <Link to="/sc-communication/rda-communication/LAC21">
                <CardHeadNews>
                  <StaticImage 
                    alt=''
                    src='../../images/LAC21-main.webp'
                    placeholder="blurred"
                    layout="constrained"
                    width={620}
                    height={350}
                  />
                </CardHeadNews>
              </Link>
                <CardFooterNews>
                  LAC'21 | 9 JUN, 2021
                </CardFooterNews>
            </CardWrapperNews>

            <CardWrapperNews>
              <Link to="/sc-communication/rda-communication/SMM21">
                <CardHeadNews>
                  <StaticImage 
                    alt=''
                    src='../../images/SMM21-main.webp'
                    placeholder="blurred"
                    layout="constrained"
                    width={620}
                    height={350}
                  />
                </CardHeadNews>
              </Link>
                <CardFooterNews>
                  SMM'21 | 20 MAY, 2021
                </CardFooterNews>
            </CardWrapperNews>
          </GridRDC>

          <h2>2019</h2>
        <GridRDC>

        <CardWrapperNews>
          <Link to="/sc-communication/rda-communication/CNIBIO19">
            <CardHeadNews>
              <StaticImage 
                alt=''
                src='../../images/CNIBIO19-main.webp'
                placeholder="blurred"
                layout="constrained"
                width={620}
                height={350}
              />
            </CardHeadNews>
          </Link>
            <CardFooterNews>
              CNIBIO'19 | 13 NOV, 2019
            </CardFooterNews>
          </CardWrapperNews>
        </GridRDC>

        <SectionDark>
          <SectionLeft>
            <ul>
              <li>27 MAY, 2019 - <strong>VII Encontro da Mocidade Investigadora.</strong> 'Os esqueletos como arquivo ambiental e texido biomonitor: estudo da súa relación co mercurio.' | <a href="https://www.usc.gal/libros/es/arte_y_humanidades/843-vii-encontro-da-mocidade-investigadora-332322-.html#/28-transaccion-alquiler/29-formato-pdf">USC</a></li>
              <li>27 JUN, 2019 - <strong>XV Congreso Nacional e Internacional de Paleopatología.</strong> 'Mercurio en los huesos: señales de contaminación atmosférica en una necrópolis Romana de Galicia.' | <a href="https://congresos.ugr.es/aep2019/">AEP</a></li>
            </ul>
          </SectionLeft>
        </SectionDark>

      </SectionPostL>
    </Layout> 
  );
}

export default RdCommunications;
