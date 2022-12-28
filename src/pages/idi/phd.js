import React from "react";

import Layout from "../../components/LayoutDark";

import { SectionPostL } from "../../styles/SectionStyles";
import { HeaderProject, ListProject, ColorBox } from "../../styles/ProjectStyles";

const PhdPage = () => {
  return (
    <Layout>

      <SectionPostL>
        <HeaderProject>PhD &mdash; Humans and Hg: a toxic relationship.</HeaderProject>
        <h3>Noemi Álvarez Fernández</h3>
        <h3>2022</h3>

        <h4>The project</h4>

        Here, we study the relationship between humans and mercury. This element is a worldwide
        distributed pollutant. Furthermore, mercury is considered by the WHO as an element of
        special risk for public health. To understand how mercury affects us we need to know
        its natural cycle. Given the importance of legacy mercury &mdash; the mercury that was 
        released in the past and still affects us in the present &mdash; paleo-pollution studies 
        are crucial. Human activities have been perturbating the  mercury cycle at least since 
        AC 3250 (S Iberian Peninsula). To date, several studies have been carried out on how 
        human activities modify the levels of this metal in different ecosystems. But, how does 
        this perturbation affect humans? and, how can we study this impact? To answer these 
        questions, this research analyses the human archaeological remains of A Lanzada site.

        <h4>Articles</h4>
        <ListProject>
          <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Olalla López&ndash;Costas (2022) <strong>Structural equation modelling of mercury intra-skeletal variability on archaeological human remains.</strong> <i>Science of The Total Environment. <a href="https://doi.org/10.1016/j.scitotenv.2022.158015">https://doi.org/10.1016/j.scitotenv.2022.158015</a></i></li>
          <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Zaira García&ndash;López, Olalla López&ndash;Costas (2021) <strong>Approaching mercury distribution in burial environment using PLS-R modelling.</strong> <i>Scientific reports. <a href="https://doi.org/10.1038/s41598-021-00768-8">https://doi.org/10.1038/s41598-021-00768-8</a></i></li>
          <li><ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Antonio Martínez Cortizas, Olalla López&ndash;Costas (2020) <strong>Atmospheric mercury pollution deciphered through archaeological bones.</strong> <i>Journal of Archaeological Science. <a href="https://doi.org/10.1016/j.jas.2020.105159">https://doi.org/10.1016/j.jas.2020.105159</a></i></li>
          <li>Olalla López&ndash;Costas, Malin Kylander, Nadine Mattielli, <ColorBox>Noemi Álvarez&ndash;Fernández</ColorBox>, Marta Pérez&ndash;Rodríguez, Tim Mighall, Richard Bindler, Antonio Martínez Cortizas (2020) <strong>Human bones tell the story of atmospheric mercury and lead exposure at the edge of Roman World.</strong> <i>Science of The Total Environment. <a href="https://doi.org/10.1016/j.scitotenv.2019.136319">https://doi.org/10.1016/j.scitotenv.2019.136319</a></i></li>
        </ListProject>

        <h4>R&amp;D Activities</h4>
        <ListProject>
          <li>sep/2022 - <strong>Annual Meeting of the EAA.</strong> 'Modelling mercury behaviour in post-Roman inhumations and occupational surfaces.' | <a href="https://www.e-a-a.org/eaa2022">EAA</a></li>
          <li>oct/2021 - <strong>VII Jornadas de Arqueometría en Galicia. Entre lo ritual y lo mundano.</strong> 'Hg e Humanos: unha relación tóxica.' | <a href="https://ecopast.es/iv-v-e-vi-jornadas-de-arqueometria-de-galicia/">EcoPast</a></li>
          <li>sep/2021 - <strong>V Simposium CRETUS.</strong> 'Actividade humana&mdash;ciclo do mercurio&mdash;saúde humana: como afectou a contaminación por mercurio ás poboacións pasadas?' | <a href="https://cretus.usc.es/event/v-simposio/">CRETUS</a></li>
          <li>sep/2021 - <strong>Annual Meeting of the EAA.</strong> 'Pollution's boomerang: the impact of increased atmospheric mercury levels in past populations.' | <a href="https://www.e-a-a.org/EAA2021/Home/EAA2021/Home.aspx">EAA</a></li>
          <li>jun/2021 - <strong>Landscape Archaeology Conference.</strong> 'From landscapes modification to population health impact.' | <a href="https://lac2020-1.csic.es/">IALA</a></li>
          <li>may/2021 - <strong>New approaches in the study of medieval settlement.</strong> 'Mercury in burials: a new methodological approach for understatnding its behavior in soil/sediments from Late Antiquity inhumations.' | <a href="https://medievalsettlementsworkshop.wordpress.com/">SMM</a></li>
          <li>nov/2019 - <strong>Coloquio con Novas Investigadoras. Bioloxía 2019.</strong> 'Unha tese tóxica?' | <a href="https://www.usc.gal/gl/servizos/snl/dinamizacion/bioloxia_coloquios.html">USC</a></li>
          <li>may/2019 - <strong>VII Encontro da Mocidade Investigadora.</strong> 'Os esqueletos como arquivo ambiental e texido biomonitor: estudo da súa relación co mercurio.' | <a href="https://www.usc.gal/libros/es/arte_y_humanidades/843-vii-encontro-da-mocidade-investigadora-332322-.html#/28-transaccion-alquiler/29-formato-pdf">USC</a></li>
          <li>jun/2019 - <strong>XV Congreso Nacional e Internacional de Paleopatología.</strong> 'Mercurio en los huesos: señales de contaminación atmosférica en una necrópolis Romana de Galicia.' | <a href="https://congresos.ugr.es/aep2019/">AEP</a></li>
        </ListProject>

      </SectionPostL>

    </Layout>
  )
}

export default PhdPage