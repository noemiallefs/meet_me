import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from "../../../components/LayoutDark";

import { SectionPostC } from "../../../styles/SectionStyles";
import { HeaderSC } from "../../../styles/SCStyles";
import { HeaderNews, SubHeaderNews, InlineHeaderNews, ParagraphNews } from "../../../styles/NewsStyles";

const LZSTOTEN2020 = () => {
  return (
    <Layout>
      <SectionPostC>
        <HeaderSC>News</HeaderSC>

        <StaticImage 
          alt=''
          src='../../../images/A-Lanzada-STOTEN-2020.webp'
          placeholder="blurred"
          layout="constrained"
          width={600}
          height={350}
        />

        <HeaderNews>A contaminación xa afectaba á poboación en época romana</HeaderNews>
          
        <SubHeaderNews>A través da análise de esqueletos desvelan que toda a poboación do noroeste peninsular estaría contaminada 
        por metais pesados a consecuencia das explotacións mineiras e a metalurgia romanas. </SubHeaderNews>
        
        <SubHeaderNews>A investigadora Ollala López Costas destaca que nalgúns individuos até un 85% do chumbo dos seus ósos 
        procedía da contaminación, nun xacemento afastado dos grandes focos da minería/metalurgia como é a 
        necrópolisis da Lanzada.</SubHeaderNews>

        <ParagraphNews>Nuns momentos nos que a contaminación da nosa contorna é unha realidade cada vez máis palpable para todos 
        nós, investigadores da Universidade de Santiago de Compostela, en colaboración con expertos internacionais, 
        puideron constatar o impacto da acción do ser humano xa desde época romana. A contaminación ambiental leva 
        afectando á vida das persoas durante máis de 2000 anos, tal e como pon de manifesto o estudo de esqueletos 
        de época romana e medieval no noroeste da península, que permitiu a estes expertos trazar o sinal da 
        contaminación que a explotación dos metais en época romana provocou na poboación galega e probablemente de 
        toda a Península Ibérica.</ParagraphNews>

        <ParagraphNews>O estudo, recentemente publicado na revista Science of the Total Enviroment, está liderado por Olalla López 
        Costas, xunto con Noemi Álvarez Fernández e Antonio Martínez Cortizas, investigadores do grupo EcoPast da 
        Universidade de Santiago de Compostela, e un elenco de colaboradores de Suecia, Reino Unido, Alemaña e Bélxica 
        e permitiu descubrir até onde chega a pegada da contaminación en período romano. A minería e a metalurgia masivas 
        deses séculos reflíctense á perfección nos ósos das persoas que viviron nese ambiente contaminado?, explica a 
        directora da investigación, Olalla López Costas, que destaca a presenza de chumbo e mercurio nos esqueletos 
        analizados na necrópole da Lanzada.</ParagraphNews>
        
        <ParagraphNews>Os habitantes de época romana tiñan contidos de chumbo e mercurio dúas veces superiores aos da época medieval 
        inmediatamente posterior, con independencia da idade ou o sexo dos individuos?, o que implica que toda a poboación 
        estivo suxeita a esta contaminación e que esta chegaba principalmente por vía aérea, sen relación estreita por 
        tanto cos seus modos de vida ou alimentación. Esta investigación permitiu confirmar, ademais, o que xa revelaron 
        no seu tempo os rexistros de metais tóxicos (como o chumbo) preservados nas turberas do Xistral (Lugo): o período 
        romano representou un clímax na contaminación atmosférica debido á intensa actividade mineira e metalúrxica que tivo 
        lugar no noroeste, como nas Medulas, e outras rexións de España.</ParagraphNews>

        <InlineHeaderNews>A contaminación queda nos ósos</InlineHeaderNews>
        <ParagraphNews>O estudo destaca que a contaminación por metais pesados como chumbo e mercurio afectaría a toda a poboación. A 
        contaminación, e en especial a dos metais, tan daniña para o noso corpo, é unha consecuencia da actividade humana e 
        leva afectándonos desde os seus inicios. É o prezo que levamos pagando. Hai individuos romanos que presentan até un 
        85% do chumbo dos seus ósos proveniente de contaminación, mentres que en época medieval cando baixa a actividade tamén 
        diminúe o sinal nos esqueletos. Todo isto nun xacemento afastado dos grandes focos da minería como é A Lanzada?, explica
        López Costas.</ParagraphNews>

        <InlineHeaderNews>O prezo a pagar desde o inicio dos tempos</InlineHeaderNews>
        <ParagraphNews>Este estudo demostra que en calquera tempo pasado sempre houbo un custo a pagar polo que chamamos civilización e este 
        afectaba a todas as persoas. Este traballo, buque insignia dun proxecto sobre o efecto da contaminación por metais no 
        pasado en Europa que dirixe Olalla López Costas da Universidade de Santiago de Compostela, desvela ademais que os ósos 
        arqueolóxicos son un arquivo directo dos cambios ambientais. Na actualidade, no grupo EcoPast, están a realizarse dúas 
        teses doutorais, unha sobre mercurio en ósos humanos e outra sobre chumbo en ósos animais de diversos períodos, para 
        avanzar no coñecemento das repercusións da contaminación atmosférica.</ParagraphNews>

        <InlineHeaderNews>A importancia do xacemento da Lanzada</InlineHeaderNews>
        <ParagraphNews>Unha vez máis a necrópole da Lanzada, obxecto de numerosos estudos previos, demostra o seu gran peso para explicar o 
        pasado galaicoromano. Nesta ocasión os investigadores valéronse dos restos óseos achados nas dúas áreas de enterramento, 
        unha de época romana e outra medieval, que cobren un período continuo de enterramento de 700 anos, algo único na 
        Península Ibérica. </ParagraphNews>

        <ParagraphNews><a href="https://ecopast.es/a-contaminacion-xa-afectaba-a-poboacion-en-epoca-romana/">EcoPast</a> | Posted: 30 JAN, 2020</ParagraphNews>

      </SectionPostC>
    </Layout> 
  );
}

export default LZSTOTEN2020;
