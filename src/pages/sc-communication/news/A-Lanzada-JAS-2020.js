import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../../../components/LayoutDark";

import { SectionPostC } from "../../../styles/SectionStyles";
import { HeaderSC } from "../../../styles/SCStyles";
import { HeaderNews, SubHeaderNews, InlineHeaderNews, ParagraphNews } from "../../../styles/NewsStyles";

const LZJAS2020 = () => {
  return (
    <Layout>
      <SectionPostC>
        <HeaderSC>News</HeaderSC>

        <StaticImage 
          alt=''
          src='../../../images/A-Lanzada-JAS-2020.webp'
          placeholder="blurred"
          layout="constrained"
          width={600}
          height={350}
        />

        <HeaderNews>As poboacións antigas estiveron expostas a contaminación atmosférica por mercurio en Galicia</HeaderNews>
          
        <SubHeaderNews>
          Un estudo levado a cabo polo grupo EcoPast e que agora se recolle na prestixiosa publicación, 
          Journal of Archaeological Science, apoia a hipótese de que a maioría das poboacións antigas - igual 
          que na actualidade - tiveron unha exposición crónica a baixos niveis deste metal durante a súa vida.
        </SubHeaderNews>
        
        <SubHeaderNews>
          Este traballo forma parte da tese doutoral da galega Noemi Álvarez Fernández que elevará a Galicia 
          como pioneira no estudo de mercurio en restos óseos arqueolóxicos. 
        </SubHeaderNews>

        <ParagraphNews>
          A revista Journal of Archaeological Science, líder no campo da arqueoloxía, faise eco no seu último 
          número dun estudo do grupo de investigación da USC, EcoPast, sobre o impacto da exposición crónica ao 
          mercurio en poboacións antigas. Liderado pola investigadora Noemi Álvarez Fernández, en colaboración 
          outros dous membros do grupo EcoPast, Antonio Martínez Cortizas e Olalla López Costas, o artigo avanza 
          entre as súas conclusións que as poboacións romana e tardoantigua que viviron na Lazanda entre os séculos 
          I e VII AD estiveron expostas de forma crónica a niveis relativamente baixos de contaminación atmosférica 
          por mercurio, o cal contrastaría con investigacións previas, centradas no estudo de altas concentracións 
          deste metal relacionadas principalmente con ritos de enterramento, tratamentos médicos ou, mesmo, 
          envelenamento.
        </ParagraphNews>

        <ParagraphNews>
          O traballo levado a cabo polas investigadoras de EcoPast a partir da colección de esqueletos da necrópole 
          da Lanzada permitiu estudar a exposición á contaminación atmosférica por mercurio nun lapso de tempo 
          ininterrompido de 700 anos que, ademais, abarca dous períodos moi diferentes no que a contaminación 
          atmosférica refírese: período romano (AD s. I - IV) e tardoantiguo (AD s. V - VII), o que lles permitiu 
          observar como afectan os cambios na interacción humano-ambiente nas propias poboacións humanas.
        </ParagraphNews>
        
        <InlineHeaderNews>Os esqueletos da Lanzada axúdannos a entender a contaminación hoxe</InlineHeaderNews>

        <ParagraphNews>
          Este traballo profunda en como se transfire o mercurio ao noso esqueleto utilizando restos arqueolóxicos. 
          Vemos por exemplo que todos os ósos están igualmente afectados cando a exposición é crónica, mentres que en 
          contactos puntuais pero graves o esqueleto reflícteo con diferenzas entre os seus ósos: unha costela tería 
          máis mercurio que un fémur. 
        </ParagraphNews>

        <ParagraphNews>
          Este traballo tamén permite entender cal é o alcance poboacional da exposición a metais tóxicos, xa que os 
          nenos están igualmente afectados que as persoas adultas. Con todo, os nenos son moito máis sensibles a esta 
          exposición podendo desenvolver problemas de saúde graves. As poboacións antigas son unha fonte inesgotable de 
          coñecemento porque nos permiten entender a contaminación por mercurio nunha gran diversidade de escenarios 
          que doutra maneira non sería posible.
        </ParagraphNews>

        <InlineHeaderNews>Explotacións mineiras e contaminación atmosférica</InlineHeaderNews>

        <ParagraphNews>
          Durante o período romano a Península Ibérica foi a gran mina do imperio, sobre todo se falamos de mercurio. 
          Cando o imperio romano cae, cae con el esta intensa explotación de recursos mineiro-metalúrxicos. As 
          consecuencias deste cambio ven reflectidas nos rexistros ambientais, que mostran niveis de contaminación 
          atmosférica moi diferentes para estes dous períodos. Grazas a esta investigación, agora vemos a pegada do 
          impacto da explotación intensiva dun recurso natural nas propias poboacións humanas.
        </ParagraphNews>

        <ParagraphNews>
          Esta pegada que quedou rexistrada nos ósos dos seus habitantes, permítenos extraer unha lección do impacto que 
          ten a contaminación ambiental sobre a poboación, especialmente cando falamos dun metal cunha toxicidade tan 
          elevada como a do mercurio. Ademais, durante a antigüidade, este metal tivo diversos usos culturais; entre 
          eles o seu emprego con fins medicinais ou a utilización do cinabrio - un mineral de cor vermella brillante, 
          con alto contido en mercurio - en rituais funerarios ou na elaboración de pigmentos como o vermillón. Outras 
          das aplicacións habituais do mercurio é o seu uso na extracción de ouro ou na fundición doutros metais como a 
          prata, o que seguramente é o detonante do incremento da súa presenza atmosférica na época de maior explotación 
          mineira. 
        </ParagraphNews>

        <InlineHeaderNews>A contaminación con metais pesados na actualidade</InlineHeaderNews>

        <ParagraphNews>
          Aínda que a priori podamos pensar que nada temos que ver co mundo antigo, en realidade a contaminación 
          atmosférica ha estado presente ao longo de toda a nosa historia. Estudos como o de EcoPast permítennos 
          asomarnos un pouco máis ás consecuencias directas que tivo a explotación da contorna sobre o conxunto da 
          poboación a través da contaminación atmosférica, unha contaminación do aire que se ha ir incrementando 
          considerablemente ao longo dos séculos.
        </ParagraphNews>

        <ParagraphNews>
          “Neste estudo demostramos que a contaminación crónica por mercurio xa era un problema no período romano, 
          como un prezo que tiñan que pagar pola intensa actividade mineira e metalúrxica na Península Ibérica. 
          Hispania era a mina de Roma e como consecuencia os seus habitantes estaban contaminados por mercurio mesmo 
          en áreas tan illadas como A Lanzada”, explica Noemi Álvarez, que aproveita para chamar a atención sobre o 
          impacto da contaminación que observamos nestes momentos de pandemia que estamos a vivir, nos que non debemos 
          esquecer que a contaminación atmosférica xoga un papel importante na gravidade da enfermidade.
        </ParagraphNews>

        <ParagraphNews><a href="https://ecopast.es/as-poboacions-antigas-estiveron-expostas-a-contaminacion-atmosferica-por-mercurio-en-galicia/">EcoPast</a> | Posted: 19 MAY, 2020</ParagraphNews>

      </SectionPostC>
    </Layout> 
  );
}

export default LZJAS2020;