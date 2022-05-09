import React from "react";

import Layout from "../../components/LayoutDark";

import AndurinhaLogo from "../../images/andurinha-logo.webp";

import { SectionProject, HeaderProject, ListProject, ColorBox, Img } from "../../styles/ProjectStyles";

const AndurinhaPage = () => {
  return (
    <Layout>

      <SectionProject>
        <HeaderProject>andurinha</HeaderProject>
        <h3>Noemi Álvarez Fernández &amp; Antonio Martínez Cortizas</h3>
        <h3>2020/08/07</h3>
        <br />
        <h5>This is andurinha!</h5>

        A R package that provides tools to make spectroscopic data processing easier and faster. 
        It allows to find and select peaks based on the second derivative or absorbance sum spectrum. 
        Furthermore, it supplies functions for graphic support, which makes the workflow more user 
        friendly.

        <pre>
          <code>
            library(andurinha)
          </code>
        </pre>

        For further information check the package <a href="https://cran.r-project.org/web/packages/andurinha/vignettes/andurinha.html">vignettes</a>.

        <h4>Cite it:</h4>
        Noemi Alvarez Fernandez and Antonio Martinez Cortizas (2020). andurinha: Make Spectroscopic Data Processing Easier. R package version 0.0.2. <a href="https://CRAN.R-project.org/package=andurinha">https://CRAN.R-project.org/package=andurinha</a>

        <h4>Who use andurinha?</h4>
        <ListProject>
          <li>Antonio Martínez Cortizas, Jenny K Sjöström, Eleonor E Ryberg, Malin E Kylander, Joeri Kaal, Olalla López&ndash;Costas, <ColorBox>Noemi Álvarez Fernández</ColorBox>, Richard Bindler (2021) <strong>9000 years of changes in peat organic matter composition in Store Mosse (Sweden) traced using FTIR&ndash;ATR.</strong> <i>Boreas. <a href="https://doi.org/10.1111/bor.12527">https://doi.org/10.1111/bor.12527</a></i></li>
          <li>Antonio Martínez Cortizas, Lourdes López&ndash;Merino, Noemí Silva&ndash;Sánchez, Jenny K Sjöström, Malin E Kylander (2021) <strong>Investigating the Mineral Composition of Peat by Combining FTIR-ATR and Multivariate Analysis.</strong> <i>Minerals. <a href="https://doi.org/10.3390/min11101084">https://doi.org/10.3390/min11101084</a></i></li>
        </ListProject>

        <Img 
          alt=''
          src={AndurinhaLogo}
        />

      </SectionProject>

    </Layout>
  )
}

export default AndurinhaPage
