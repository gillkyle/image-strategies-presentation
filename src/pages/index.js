/* global graphql */

import React from 'react';
import Nav from '../components/nav';
import Home from '../components/page-blocks/home';

const IndexPage = props => (
  <main>
    <Nav />
    <div className="container">
      <div className="row" style={{ padding: '60px 0px' }}>
        <h2>
          "…optimizing images can often yield some of the largest byte savings
          and performance improvements" -Google PageSpeed Docs
        </h2>
      </div>
    </div>
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
    imageSharp(id: { regex: "/lemonade/" }) {
      sizes(maxWidth: 630) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
