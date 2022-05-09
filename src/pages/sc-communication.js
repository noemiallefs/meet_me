import React from "react";

import { SectionPlain } from "../styles/SectionStyles";

import Layout from "../components/LayoutDark";
import SocialMedia from "../components/SocialMedia";
import RdOrganisation from "../components/RdOrganisation";
import WomenSTEM from "../components/WomenSTEM";

const ScCommunicationPage = () => {
  return (
    <Layout>
      <SectionPlain>
        <SocialMedia />
        <RdOrganisation />
        <WomenSTEM />
      </SectionPlain>
    </Layout>
  )
}

export default ScCommunicationPage;
