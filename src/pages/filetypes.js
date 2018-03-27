/* global graphql */

import React from 'react';
import Nav from '../components/nav';
import thumb_svg from '../img/thumb.svg';
import thumb_png from '../img/thumb.png';

class MenuPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <main>
        <Nav />
        <div style={{ height: 70 }} />
        <div className="container">
          <div className="row" style={{ margin: '0 auto' }}>
            <div className="col-md-6">
              <h1>Raster (PNG)</h1>
              <img src={thumb_png} style={{ width: '100%' }} />
            </div>
            <div className="col-md-6">
              <h1>Vector (SVG)</h1>
              <img src={thumb_svg} style={{ width: '100%' }} />
            </div>
          </div>
        </div>
        <div style={{ height: 70 }} />
      </main>
    );
  }
}

export default MenuPage;

// used with the first commented out line of Menu Items
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
