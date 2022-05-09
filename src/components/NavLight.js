import React, { useState, useEffect } from "react";

import BurgerLight from "./BurgerLight";
import TopNavLight from "./TopNavLight";

const NavLight = () => {
  
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

  return width < breakpoint ? <BurgerLight /> : <TopNavLight />;
}

export default NavLight;