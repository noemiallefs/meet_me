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
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
