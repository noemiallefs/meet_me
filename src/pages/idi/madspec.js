import React from "react";

import Layout from "../../components/LayoutDark";

import { SectionPostL } from "../../styles/SectionStyles";
import { HeaderProject } from "../../styles/ProjectStyles";

const PhdPage = () => {
  return (
    <Layout>

      <SectionPostL>
        <HeaderProject>MADSPEC</HeaderProject>
        <h3>Noemi Álvarez Fernández and Luís de Luque Ripoll</h3>
        <h3>2024</h3>

        Project co-financed by the Junta de Castilla y León, the Institute for Business Competitiveness, and the European Union through the European Regional Development Fund (ERDF).
        
        <h4>The project</h4>
        MADSPEC is an industrial research project focused on evaluating the potential of vibrational spectrometry — specifically near-infrared (NIR) and 
        FTIR-ATR (Fourier Transform Infrared with Attenuated Total Reflectance) — to determine the physico-mechanical properties of industrial wood. 
        If successful, the project could enable wood manufacturers and users to adopt these rapid, simple, and cost-effective techniques as practical alternatives 
        to complex and expensive laboratory procedures.
        
        <br/><br/>

        Further information at: <a href="https://boscalia.org/en/madspec-eng/">Boscalia Technologies - MADSPEC</a>

      </SectionPostL>

    </Layout>
  )
}

export default PhdPage