import React from 'react';
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../../components/LayoutDark";

import { SectionPostL } from "../../styles/SectionStyles";
import { HeaderSC, GridSC } from "../../styles/SCStyles";
import { CardWrapperNews, CardHeadNews, CardFooterNews } from "../../styles/NewsStyles";

const News = () => {
  return (
    <Layout>
    <SectionPostL>
      <HeaderSC>News</HeaderSC>
        <GridSC>

          <CardWrapperNews>
            <Link to="/sc-communication/news/A-Lanzada-JAS-2020">
              <CardHeadNews>
                <StaticImage 
                  alt=''
                  src='../../images/A-Lanzada-JAS-2020_card.webp'
                  placeholder="blurred"
                  layout="constrained"
                  width={600}
                  height={350}
                />
              </CardHeadNews>
            </Link>
              <CardFooterNews>
                <a href="https://ecopast.es/as-poboacions-antigas-estiveron-expostas-a-contaminacion-atmosferica-por-mercurio-en-galicia/">EcoPast</a> | Posted: 19 MAY, 2020
              </CardFooterNews>
            </CardWrapperNews>

            <CardWrapperNews>
              <Link to="/sc-communication/news/A-Lanzada-STOTEN-2020">
                <CardHeadNews>
                  <StaticImage 
                    alt=''
                    src='../../images/A-Lanzada-STOTEN-2020_card.webp'
                    placeholder="blurred"
                    layout="constrained"
                    width={600}
                    height={350}
                  />
                </CardHeadNews>
                <CardFooterNews>
                  <a href="https://ecopast.es/a-contaminacion-xa-afectaba-a-poboacion-en-epoca-romana/">EcoPast</a> | Posted: 30 JAN, 2020
                </CardFooterNews>
              </Link>
            </CardWrapperNews>

          </GridSC>
      </SectionPostL>
    </Layout> 
  );
}

export default News;