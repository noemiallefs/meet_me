import React from "react";

import Layout from "../../components/LayoutDark";

import { SectionPostL } from "../../styles/SectionStyles";
import { HeaderProject } from "../../styles/ProjectStyles";

const PhdPage = () => {
  return (
    <Layout>

      <SectionPostL>
        <HeaderProject>TANNIRS</HeaderProject>
        <h3>Noemi Álvarez Fernández</h3>
        <h3>2022</h3>

        Boscalia Technologies S.L., in collaboration with the Government of Extremadura (Department of Economy, 
        Science, and Digital Agenda) and the European Regional Development Fund (ERDF), has developed the project. 

        <h4>The project</h4>

        The objective of the project is to provide the wine sector with a rapid and effective method 
        based on Vis-NIR spectroscopy to ensure the quality of raw materials of forest origin and to 
        ensure or improve the organoleptic quality of wines. This opens up the possibility of revaluing 
        woods present in the forests of Spain, and specifically in Extremadura, as well as their by-products 
        without commercial use, improving their profitability and the proper management of forest spaces. 
        
        <br/><br/>

        Available at: <a href="https://github.com/BoscaliaTechnologies/TANNIRS">Boscalia Technologies - TANNIRS</a>

      </SectionPostL>

    </Layout>
  )
}

export default PhdPage