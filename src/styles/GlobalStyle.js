import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset"

import { COLORS } from './Colors';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    margin: 0;
    font-family: "Rajdhani";
    line-height: 1.5;
    letter-spacing: 0;
    background-color: ${COLORS.whiteSnow};
  }
  strong {
    font-weight: bold;
  }
  a {
    color: ${COLORS.primary};
    text-decoration: none;
    &:focus,
    &:hover {
      text-decoration: none;
      color: ${COLORS.primaryDark};
    }
  }
  pre, code {
    color: ${COLORS.primary};
    font-family: "Red Hat Mono";
    font-size: 10pt;
  }
  pre {
    background-color: ${COLORS.gray900};
    display: block;
    padding: 10px;
    margin: 15px 0;
  }
  video {;
    width: 100%;
    max-width: 515px;
    height: auto;
    max-height: 285px;
  }
  p {
    padding: 10px;
    font-size: 17.5px;
  }

  h1, h3, h4, h5 {
    font-family: "Oswald";
  }
  h1, h3, h4 {
    text-transform: uppercase;
  }
  h1 {
    font-weight: 400;
    letter-spacing: 0.01em;
    font-size: 30pt;
    padding: 10px;
  }
  h2 {
    font-family: "Saira Extra Condensed";
    font-weight: 700;
    font-size: 20pt;
  }
  h3 {
    font-size: 9pt;
    letter-spacing: 2px;
    padding-bottom: 10px;
  }
  h4 {
    font-size: 12pt;
    font-weight: 600;
    letter-spacing: 0.5pt;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  h5 {
    font-weight: 200;
    font-size: 13pt;
    margin: 0 0 15px 0;
  }
  h6 {
    font-family: "Rajdhani";
    font-weight: 600;
  }
`

export default GlobalStyle