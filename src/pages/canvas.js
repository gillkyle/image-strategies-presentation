/* global graphql */

import React from 'react';
import Nav from '../components/nav';

const AboutPage = props => (
  <main>
    <Nav />
    <div className="container">
      <div className="row">
        <iframe
          height="516"
          scrolling="no"
          title="Confetti Cannon"
          src="//codepen.io/jscottsmith/embed/VjPaLO/?height=516&theme-id=light&default-tab=result&embed-version=2"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          style={{ width: '100%', margin: '60px 0px 0px 0px' }}
        >
          See the Pen{' '}
          <a href="https://codepen.io/jscottsmith/pen/VjPaLO/">
            Confetti Cannon
          </a>{' '}
          by J Scott Smith (<a href="https://codepen.io/jscottsmith">
            @jscottsmith
          </a>) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <iframe
          height="521"
          scrolling="no"
          title="Canvas Particle Animation"
          src="//codepen.io/JulianLaval/embed/KpLXOO/?height=521&theme-id=light&default-tab=result&embed-version=2"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          style={{ width: '100%', margin: '60px 0px 0x 0px' }}
        >
          See the Pen{' '}
          <a href="https://codepen.io/JulianLaval/pen/KpLXOO/">
            Canvas Particle Animation
          </a>{' '}
          by Julian Laval (<a href="https://codepen.io/JulianLaval">
            @JulianLaval
          </a>) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <iframe
          height="547"
          scrolling="no"
          title="Fizzy Sparks"
          src="//codepen.io/waisbren89/embed/gwvVpP/?height=547&theme-id=light&default-tab=result&embed-version=2"
          frameborder="no"
          allowtransparency="true"
          allowfullscreen="true"
          style={{ width: '100%', margin: '0px 0px 60x 0px' }}
        >
          See the Pen{' '}
          <a href="https://codepen.io/waisbren89/pen/gwvVpP/">Fizzy Sparks</a>{' '}
          by Bennett Waisbren (<a href="https://codepen.io/waisbren89">
            @waisbren89
          </a>) on <a href="https://codepen.io">CodePen</a>.
        </iframe>
      </div>
    </div>
  </main>
);

export default AboutPage;

export const pageQuery = graphql`
  query AboutQuery {
    dataJson {
      companyInfo {
        name
        slogan
      }
    }
  }
`;
