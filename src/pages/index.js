/* global graphql */

import React from "react";
import Nav from "../components/nav";
import Home from "../components/page-blocks/home";

const IndexPage = props => (
  <main>
    <Nav />
    <Home />
  </main>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    dataJson {
      companyInfo {
        name
        slogan
      }
    }
  }
`;
