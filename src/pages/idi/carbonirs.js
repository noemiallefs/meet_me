import React from "react";

import Layout from "../../components/LayoutDark";

import { SectionPostL } from "../../styles/SectionStyles";
import { HeaderProject, ListProject, ColorBox } from "../../styles/ProjectStyles";

const PhdPage = () => {
  return (
    <Layout>

      <SectionPostL>
        <HeaderProject>CARBONIRS</HeaderProject>
        <h3>Noemi Álvarez Fernández</h3>
        <h3>2023</h3>

        Boscalia Technologies S.L., in collaboration with Carbones la Dehesa, has developed the project. 

        <h4>The project</h4>
        The objective of the project is to develop an innovative quality control method that replaces traditional approaches, 
        which are often slow and costly. This will be achieved by creating predictive models capable of rapidly and economically 
        estimating key physical and chemical parameters of interest, based on the analysis of charcoal briquettes using Vis-NIR and 
        FTIR spectroscopies.
        
        <br/><br/>

        Further information at: <a href="https://boscalia.org/en/carbonirs-eng/">Boscalia Technologies - CARBONIRS</a>

      </SectionPostL>

    </Layout>
  )
}

export default PhdPage