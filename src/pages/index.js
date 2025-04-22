import React from 'react';

import Layout from "../components/LayoutLight";
import Masthead from "../components/Masthead";
import InternationalProjection from '../components/InternationalProjection';
import Profile from "../components/Profile";
import Cv from "../components/CV";
import Contact from "../components/Contact";

const IndexPage = () => (
  <Layout
    title = "About"
  >
    <Masthead />
    <InternationalProjection />
    <Profile />
    <Cv />
    <Contact />
  </Layout>
)

export default IndexPage