import React from 'react';
import Link from 'gatsby-link';

import './_nav.scss';

const Menu = props => (
  <section className="nav" id="nav">
    <div className="container">
      <div className="row nav-items">
        <div>
          <Link to="/filetypes#nav" className="link">
            FILE TYPES
          </Link>
        </div>
        <div>
          <Link to="/icon#nav" className="link">
            ICONS
          </Link>
        </div>
        <div>
          <Link to="/#nav" className="link nav-logo">
            HOME
          </Link>
        </div>
        <div>
          <Link to="/canvas#nav" className="link">
            CANVAS
          </Link>
        </div>
        <div>
          <Link to="/optimization#nav" className="link">
            OPTIMIZATION
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Menu;
