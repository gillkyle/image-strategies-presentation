/* global graphql */

import React from "react";
import Features from "../components/features";
import MenuItems from "../components/page-blocks/menu-items";
import Nav from "../components/nav";

const MenuPage = props => (
  <main>
    <Nav />
    <MenuItems data={props.data.allDataJson.edges[0].node.menu} />
  </main>
);

export default MenuPage;

export const pageQuery = graphql`
  query MenuQuery {
    allDataJson {
      edges {
        node {
          menu {
            title
            description
            price
            calories
          }
        }
      }
    }
  }
`;
