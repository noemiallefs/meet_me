import React from "react";
import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image";

import { COLORS } from "../styles/Colors";

const SectionProfile = styled.section`
  text-align: center;
  padding-top: 150px;
  background: linear-gradient(${COLORS.black}, ${COLORS.blackJet});
  color: ${COLORS.whiteSnow};
`
const HeaderProfile = styled.h1`
  margin: 0px;
  text-transform: none;
`

const ParagraphProfile = styled.p`
  color: ${COLORS.white90};
  padding-top: 0.5rem;
`

const VerticalLine = styled.div`
  border-left: 2px solid ${COLORS.primary};
  margin-left: 50%;
  height: 240px;
`
const Profile = () => {
  return (
    <SectionProfile id="cv">
      <HeaderProfile>Noemi Álvarez Fernández | MSc. BSc.</HeaderProfile>
      <ParagraphProfile>
        Project Technician, <a href="http://boscalia.org/en/home">Boscalia Tachnologies</a><br/>
        PhD-student, CRETUS-EcoPast <a href="https://ecopast.es/">(GI-1553)</a>, USC <br/>
        ORCID: <a href="https://orcid.org/0000-0003-2690-4051">0000-0003-2690-4051</a> <br/>
      </ParagraphProfile>
      <StaticImage 
        alt=''
        src='../images/profile.webp'
        placeholder="blurred"
        layout="constrained"
        width={250}
        height={250}
        style={{ border: `2px solid ${COLORS.primary}`, 
                  borderRadius: 200, width: 250, height: 250                
                }}
      />
      <VerticalLine />
    </SectionProfile>
  );
}

export default Profile;
