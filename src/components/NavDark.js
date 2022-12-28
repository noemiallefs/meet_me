import React, { useState, useEffect } from "react";

import BurgerDark from "./BurgerDark";
import TopNavDark from "./TopNavDark";

const NavDark = () => {

  const [width, setWidth] = useState(0);
  const breakpoint = 1265;

  useEffect(() => {
    const handleWindowResize = () => { 
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <BurgerDark /> : <TopNavDark />;
}

export default NavDark;