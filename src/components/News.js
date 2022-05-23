import React from 'react';
import styled from "styled-components";
import { StaticImage } from 'gatsby-plugin-image';

import { COLORS } from "../styles/Colors";
import { SectionRight } from "../styles/SectionStyles";

const Grid = styled.div`
  display: flex;
  gap: 20px;
  max-width: 100%;
  margin: auto;
  margin-top: 20px; 
  justify-content: right; 
  grid-area: content;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-end; 
  }
`;
const CardWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: left;
  box-shadow: 0 2px 7px 0 ${COLORS.black20}, 0 1px 8px 0 ${COLORS.black20};
  border-radius: 3px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
`;
const CardHead = styled.div`
  margin: 0; 
`;
const CardBody = styled.div`
  margin: 40px;
  text-align: justify; 
  h1 {
    text-align: left;
    padding: 0px 0px 20px 0px;
    font-size: 25pt;
  }
  h3 {
    padding: 10px 0 0 0;
    font-size: 12pt;
    text-align: right;
  }
  h5 {
    font-style: italic;
    color: ${COLORS.black90};
    font-size: 14pt;
  }
  p {
    padding: 0;
    margin: 20px 0;
  }
`;
const CardFooter = styled.div`
  padding: 10px 20px;
  background-color: ${COLORS.gray900};
  color: ${COLORS.white90};
  font-size: 10pt;
  margin-top: auto;
  border-radius: 0px 0px 3px 3px;
`;

const News = () => {
  return (
    <SectionRight>
      <h4>News</h4>

      <Grid>

      <CardWrapper>
          <CardHead>
            <StaticImage 
              alt=''
              src='../images/PhD-art1.webp'
              placeholder="blurred"
              layout="constrained"
              width={600}
              height={350}
            />
          </CardHead>
          <CardBody>
            <h1>As poboacións antigas estiveron expostas a contaminación atmosférica por mercurio en Galicia</h1>

            <h5>Un estudo levado a cabo polo grupo EcoPast e que agora se recolle na prestixiosa publicación, 
            Journal of Archaeological Science, apoia a hipótese de que a maioría das poboacións antigas - igual 
            que na actualidade - tiveron unha exposición crónica a baixos niveis deste metal durante a súa vida.</h5>

            <h5>Este traballo forma parte da tese doutoral da galega Noemi Álvarez Fernández que elevará a Galicia 
            como pioneira no estudo de mercurio en restos óseos arqueolóxicos. </h5>

            <p>A revista Journal of Archaeological Science, líder no campo da arqueoloxía, faise eco no seu último 
            número dun estudo do grupo de investigación da USC, EcoPast, sobre o impacto da exposición crónica ao 
            mercurio en poboacións antigas. Liderado pola investigadora Noemi Álvarez Fernández, en colaboración 
            outros dous membros do grupo EcoPast, Antonio Martínez Cortizas e Olalla López Costas, o artigo avanza 
            entre as súas conclusións que as poboacións romana e tardoantigua que viviron na Lazanda entre os séculos 
            I e VII AD estiveron expostas de forma crónica a niveis relativamente baixos de contaminación atmosférica 
            por mercurio, o cal contrastaría con investigacións previas, centradas no estudo de altas concentracións 
            deste metal relacionadas principalmente con ritos de enterramento, tratamentos médicos ou, mesmo, 
            envelenamento. </p>

            <p>O traballo levado a cabo polas investigadoras de EcoPast a partir da colección de esqueletos da necrópole 
            da Lanzada permitiu estudar a exposición á contaminación atmosférica por mercurio nun lapso de tempo 
            ininterrompido de 700 anos que, ademais, abarca dous períodos moi diferentes no que a contaminación 
            atmosférica refírese: período romano (AD s. I - IV) e tardoantiguo (AD s. V - VII), o que lles permitiu 
            observar como afectan os cambios na interacción humano-ambiente nas propias poboacións humanas.</p>

            <h3>Os esqueletos da Lanzada axúdannos a entender a contaminación hoxe</h3>
            <p>Este traballo profunda en como se transfire o mercurio ao noso esqueleto utilizando restos arqueolóxicos. 
            Vemos por exemplo que todos os ósos están igualmente afectados cando a exposición é crónica, mentres que en 
            contactos puntuais pero graves o esqueleto reflícteo con diferenzas entre os seus ósos: unha costela tería 
            máis mercurio que un fémur. </p>

            <p>Este traballo tamén permite entender cal é o alcance poboacional da exposición a metais tóxicos, xa que os 
            nenos están igualmente afectados que as persoas adultas. Con todo, os nenos son moito máis sensibles a esta 
            exposición podendo desenvolver problemas de saúde graves. As poboacións antigas son unha fonte inesgotable de 
            coñecemento porque nos permiten entender a contaminación por mercurio nunha gran diversidade de escenarios 
            que doutra maneira non sería posible.</p>

            <h3>Explotacións mineiras e contaminación atmosférica</h3>
            <p>Durante o período romano a Península Ibérica foi a gran mina do imperio, sobre todo se falamos de mercurio. 
            Cando o imperio romano cae, cae con el esta intensa explotación de recursos mineiro-metalúrxicos. As 
            consecuencias deste cambio ven reflectidas nos rexistros ambientais, que mostran niveis de contaminación 
            atmosférica moi diferentes para estes dous períodos. Grazas a esta investigación, agora vemos a pegada do 
            impacto da explotación intensiva dun recurso natural nas propias poboacións humanas.</p>

            <p>Esta pegada que quedou rexistrada nos ósos dos seus habitantes, permítenos extraer unha lección do impacto que 
            ten a contaminación ambiental sobre a poboación, especialmente cando falamos dun metal cunha toxicidade tan 
            elevada como a do mercurio. Ademais, durante a antigüidade, este metal tivo diversos usos culturais; entre 
            eles o seu emprego con fins medicinais ou a utilización do cinabrio - un mineral de cor vermella brillante, 
            con alto contido en mercurio - en rituais funerarios ou na elaboración de pigmentos como o vermillón. Outras 
            das aplicacións habituais do mercurio é o seu uso na extracción de ouro ou na fundición doutros metais como a 
            prata, o que seguramente é o detonante do incremento da súa presenza atmosférica na época de maior explotación 
            mineira. </p>

            <h3>A contaminación con metais pesados na actualidade </h3>
            <p>Aínda que a priori podamos pensar que nada temos que ver co mundo antigo, en realidade a contaminación 
            atmosférica ha estado presente ao longo de toda a nosa historia. Estudos como o de EcoPast permítennos 
            asomarnos un pouco máis ás consecuencias directas que tivo a explotación da contorna sobre o conxunto da 
            poboación a través da contaminación atmosférica, unha contaminación do aire que se ha ir incrementando 
            considerablemente ao longo dos séculos.</p>

            <p>“Neste estudo demostramos que a contaminación crónica por mercurio xa era un problema no período romano, 
            como un prezo que tiñan que pagar pola intensa actividade mineira e metalúrxica na Península Ibérica. 
            Hispania era a mina de Roma e como consecuencia os seus habitantes estaban contaminados por mercurio mesmo 
            en áreas tan illadas como A Lanzada”, explica Noemi Álvarez, que aproveita para chamar a atención sobre o 
            impacto da contaminación que observamos nestes momentos de pandemia que estamos a vivir, nos que non debemos 
            esquecer que a contaminación atmosférica xoga un papel importante na gravidade da enfermidade.</p>

          </CardBody>
          <CardFooter>
            <a href="https://ecopast.es/as-poboacions-antigas-estiveron-expostas-a-contaminacion-atmosferica-por-mercurio-en-galicia/">EcoPast</a> | Posted: 19 MAY, 2020
          </CardFooter>
        </CardWrapper>

        <CardWrapper>
          <CardHead>
            <StaticImage 
              alt=''
              src='../images/PhD-art0.webp'
              placeholder="blurred"
              layout="constrained"
              width={600}
              height={350}
            />
          </CardHead>
          <CardBody>
            <h1>A contaminación xa afectaba á poboación en época romana</h1>

            <h5>A través da análise de esqueletos desvelan que toda a poboación do noroeste peninsular estaría contaminada 
            por metais pesados a consecuencia das explotacións mineiras e a metalurgia romanas. </h5>
            
            <h5>A investigadora Ollala López Costas destaca que nalgúns individuos até un 85% do chumbo dos seus ósos 
            procedía da contaminación, nun xacemento afastado dos grandes focos da minería/metalurgia como é a 
            necrópolisis da Lanzada.</h5>

            <p>Nuns momentos nos que a contaminación da nosa contorna é unha realidade cada vez máis palpable para todos 
            nós, investigadores da Universidade de Santiago de Compostela, en colaboración con expertos internacionais, 
            puideron constatar o impacto da acción do ser humano xa desde época romana. A contaminación ambiental leva 
            afectando á vida das persoas durante máis de 2000 anos, tal e como pon de manifesto o estudo de esqueletos 
            de época romana e medieval no noroeste da península, que permitiu a estes expertos trazar o sinal da 
            contaminación que a explotación dos metais en época romana provocou na poboación galega e probablemente de 
            toda a Península Ibérica.</p>

            <p>O estudo, recentemente publicado na revista Science of the Total Enviroment, está liderado por Olalla López 
            Costas, xunto con Noemi Álvarez Fernández e Antonio Martínez Cortizas, investigadores do grupo EcoPast da 
            Universidade de Santiago de Compostela, e un elenco de colaboradores de Suecia, Reino Unido, Alemaña e Bélxica 
            e permitiu descubrir até onde chega a pegada da contaminación en período romano. ?A minería e a metalurgia masivas 
            deses séculos reflíctense á perfección nos ósos das persoas que viviron nese ambiente contaminado?, explica a 
            directora da investigación, Olalla López Costas, que destaca a presenza de chumbo e mercurio nos esqueletos 
            analizados na necrópole da Lanzada.</p>
            
            <p>Os habitantes de época romana tiñan contidos de chumbo e mercurio dúas veces superiores aos da época medieval 
            inmediatamente posterior, con independencia da idade ou o sexo dos individuos?, o que implica que toda a poboación 
            estivo suxeita a esta contaminación e que esta chegaba principalmente por vía aérea, sen relación estreita por 
            tanto cos seus modos de vida ou alimentación. Esta investigación permitiu confirmar, ademais, o que xa revelaron 
            no seu tempo os rexistros de metais tóxicos (como o chumbo) preservados nas turberas do Xistral (Lugo): o período 
            romano representou un clímax na contaminación atmosférica debido á intensa actividade mineira e metalúrxica que tivo 
            lugar no noroeste, como nas Medulas, e outras rexións de España.</p>

            <h3>A contaminación queda nos ósos</h3>
            <p>O estudo destaca que a contaminación por metais pesados como chumbo e mercurio afectaría a toda a poboación. A 
            contaminación, e en especial a dos metais, tan daniña para o noso corpo, é unha consecuencia da actividade humana e 
            leva afectándonos desde os seus inicios. É o prezo que levamos pagando. Hai individuos romanos que presentan até un 
            85% do chumbo dos seus ósos proveniente de contaminación, mentres que en época medieval cando baixa a actividade tamén 
            diminúe o sinal nos esqueletos. Todo isto nun xacemento afastado dos grandes focos da minería como é A Lanzada?, explica
            López Costas.</p>

            <h3>O prezo a pagar desde o inicio dos tempos</h3>
            <p>Este estudo demostra que en calquera tempo pasado sempre houbo un custo a pagar polo que chamamos civilización e este 
            afectaba a todas as persoas. Este traballo, buque insignia dun proxecto sobre o efecto da contaminación por metais no 
            pasado en Europa que dirixe Olalla López Costas da Universidade de Santiago de Compostela, desvela ademais que os ósos 
            arqueolóxicos son un arquivo directo dos cambios ambientais. Na actualidade, no grupo EcoPast, están a realizarse dúas 
            teses doutorais, unha sobre mercurio en ósos humanos e outra sobre chumbo en ósos animais de diversos períodos, para 
            avanzar no coñecemento das repercusións da contaminación atmosférica.</p>

            <h3>A importancia do xacemento da Lanzada</h3>
            <p>Unha vez máis a necrópole da Lanzada, obxecto de numerosos estudos previos, demostra o seu gran peso para explicar o 
            pasado galaicoromano. Nesta ocasión os investigadores valéronse dos restos óseos achados nas dúas áreas de enterramento, 
            unha de época romana e outra medieval, que cobren un período continuo de enterramento de 700 anos, algo único na 
            Península Ibérica. </p>

          </CardBody>
          <CardFooter>
            <a href="https://ecopast.es/a-contaminacion-xa-afectaba-a-poboacion-en-epoca-romana/">EcoPast</a> | Posted: 30 JAN, 2020
          </CardFooter>
        </CardWrapper>

        </Grid>

    </SectionRight>
  );
}

export default News;
