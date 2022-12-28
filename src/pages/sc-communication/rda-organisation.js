import React from "react";

import Layout from "../../components/LayoutDark";

import { SectionPostL } from "../../styles/SectionStyles";
import { HeaderSC } from "../../styles/SCStyles";
import { SectionDark, SectionLeft } from "../../styles/SectionStyles";

const RdOrganisation = () => {
  return (
    <Layout>
      <SectionPostL>
        <HeaderSC>R&amp;D Activities Organisation</HeaderSC>

        <SectionDark>
          <SectionLeft>
            <ul>
              <li>2022 - <strong>Volunteer.</strong> EAA Annual Meeting | <a href="https://www.e-a-a.org/eaa2022">EAA</a></li>
              <li>2021 - <strong>Volunteer.</strong> EAA Annual Meeting | <a href="https://www.e-a-a.org/EAA2021/Home/EAA2021/Home.aspx">EAA</a></li>
              <li>2020 - <strong>Organising committee.</strong> Women in Science (WISE) | <a href="https://www.wisecology.net/about-wise/wise-team/">EcoPast</a></li>
              <li>2019 - <strong>Organising committee.</strong> I Xornadas de Xénero, Arqueometría e Patrimonio en Galicia (XAP) | <a href="http://consellodacultura.gal/evento.php?id=200902&fbclid=IwAR3A6Vcx2XuIxJSWr9MS6Y2gD7nn4C6YHfUhCEw_Fxz5Z_xfxXwV3avmiLI">ArqFem</a></li>
              <li>2019 - <strong>Organising committee.</strong> VII Econtro da Mocidade Investigadora (EMI) | <a href="https://www.usc.gal/libros/es/arte_y_humanidades/843-vii-encontro-da-mocidade-investigadora-332322-.html#/28-transaccion-alquiler/29-formato-pdf">USC</a></li>
              <li>2019 - <strong>Organising committee.</strong> As Mulleres dos Mortos | <a href="https://ecopast.es/oshin-a-creative-multipurpose-wordpress-theme/">EcoPast</a></li>
              <li>2019 - <strong>Secretary.</strong> Summer camp Bio-arcaheology | <a href="https://ecopast.es/curso-de-veran-bioarqueologia/">EcoPast</a></li>
            </ul>
          </SectionLeft>
        </SectionDark>
      </SectionPostL>
    </Layout>
  )
}

export default RdOrganisation;