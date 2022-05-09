import React from "react";

import GlobalStyle from "../styles/GlobalStyle";

import Seo from "./Seo";
import Nav from "./NavDark";
import Footer from "./Footer";


export default function LayoutDark({ children }) {
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