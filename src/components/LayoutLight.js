import React from "react";

import GlobalStyle from "../styles/GlobalStyle";

import Seo from "./Seo";
import Nav from "./NavLight";
import Footer from "./Footer";


export default function LayoutLight({ children }) {
  return (
    <>
      <Seo />
      <GlobalStyle />
      <Nav />
        {children}
      <Footer />
    </>
  )
}