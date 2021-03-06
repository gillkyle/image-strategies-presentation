import React from 'react';
import SocialIcons from '../social-icons';
import ContactInfo from '../contact-info';
import Img from 'gatsby-image';

import './_header.scss';

const Header = props => (
  <header className="header">
    <Img
      style={{
        position: 'absolute',
        zIndex: -5,
        top: 0,
        width: '100%',
        height: '90vh',
        minHeight: 500,
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-around',
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
									linear-gradient(to bottom, rgba(75, 25, 0, 0.25), rgba(17, 33, 6, 0.5))`,
        backgroundSize: 'cover',
        fontFamily: 'Montserrat',
        fontSize: 96,
        letterSpacing: 5
      }}
      sizes={props.headerImage.sizes}
      alt="Header Greek Food"
    />
    <div
      style={{
        position: 'absolute',
        zIndex: 0,
        top: 0,
        width: '100%',
        height: '90vh',
        minHeight: 500,
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)),
					linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(17, 33, 6, 0.75))`
      }}
    />
    <div className="container hero">
      <div className="row flexCenter" />
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <div className="header-logo">IMAGE STRATEGIES</div>
            <div
              style={{
                borderTop: '1px solid #fff',
                width: '60%',
                marginBottom: 15
              }}
            />
            <div className="header-desc">
              Raster vs Vector | PNG/JPG/GIF/SVG | Lazy Loading
            </div>
          </div>
        </div>
      </div>
      <div className="row flexCenter">
        <ContactInfo />
      </div>
    </div>
  </header>
);

export default Header;
