import React from "react";
import styled from 'styled-components';

import { Github } from "@styled-icons/boxicons-logos";
import { Linkedin } from "@styled-icons/boxicons-logos";
import { Twitter } from "@styled-icons/boxicons-logos";
import { Instagram } from "@styled-icons/boxicons-logos";

import { COLORS } from '../styles/Colors';

const SectionFooter = styled.section`
  text-align: center;
  padding: 70px 0px;
  background: ${COLORS.black};
  color: ${COLORS.whiteSnow};
`

const FooterText = styled.p`
  margin: 0;
  font-size: 10pt;
  color: ${COLORS.white90};
`

const GithubIcon = styled(Github)`
  color: ${COLORS.primary};
  width: 20px;
  height: 20px;
  margin: 0 5px 15px 5px;
  &:focus,
  &:hover {
    color: ${COLORS.primaryDark};
  }
`
const LinkedinIcon = styled(Linkedin)`
  color: ${COLORS.primary};
  width: 20px;
  height: 20px;
  margin: 0 7px 15px 7px;
  &:focus,
  &:hover {
    color: ${COLORS.primaryDark};
  }
`
const TwitterIcon = styled(Twitter)`
  color: ${COLORS.primary};
  width: 20px;
  height: 20px;
  margin: 0 7px 15px 7px;
  &:focus,
  &:hover {
    color: ${COLORS.primaryDark};
  }
`
const InstagramIcon = styled(Instagram)`
  color: ${COLORS.primary};
  width: 20px;
  height: 20px;
  margin: 0 7px 15px 7px;
  &:focus,
  &:hover {
    color: ${COLORS.primaryDark};
  }
`

const Footer = () => {
  return (
    <SectionFooter >
      <a href="https://github.com/noemiallefs"><GithubIcon /></a>
      <a href="https://www.linkedin.com/in/noemi-%C3%A1lvarez-fern%C3%A1dez-173b59136/"><LinkedinIcon /></a>
      <a href="https://twitter.com/noemiAllefs"><TwitterIcon /></a>
      <a href="https://www.instagram.com/eco.past/"><InstagramIcon /></a>
      <FooterText>Web Developer - Noemi Álvarez Fernández</FooterText>
    </SectionFooter>
  );
}

export default Footer;