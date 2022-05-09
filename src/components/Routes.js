import React from "react";
import { Link } from "gatsby";

const Routes = () => {
  return (
    <ul>
      <li><Link to="/">About</Link></li>
      <li><Link to="/idi">I+D+i</Link></li>
      <li><Link to="/sc-communication">Sc. Communication</Link></li>
    </ul>
  )
}

export default Routes;