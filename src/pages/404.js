import React from "react";
import { Link } from "gatsby";

import GlobalStyle from "../styles/GlobalStyle";

const NotFoundPage = () => {
  return (
    <>
      <GlobalStyle />
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry{" "} <span role="img" aria-label="Pensive emoji">😔</span>{" "} we couldn't find what you were looking for. <br />
        <Link to="/">Go home</Link>.
      </p>
    </>
  )
}

export default NotFoundPage