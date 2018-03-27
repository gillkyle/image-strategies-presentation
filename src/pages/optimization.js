import React from 'react';
import Nav from '../components/nav';
import Img from 'gatsby-image';
import mtn2 from '../img/mtn2.jpg';

const ContactPage = props => (
  <main>
    <Nav />
    <section className="contact page-content" id="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h2>Optimized Loading</h2>
            <Img alt="mountain scene" sizes={props.data.imageSharp.sizes} />
          </div>
          <div className="col-md-6 col-sm-12">
            <h2>Traditional Loading</h2>
            <img
              alt="mountain scene"
              src={mtn2}
              style={{ maxWidth: 1280, width: '100%' }}
            />
          </div>
          <div className="col-md-12">
            <iframe
              height="567"
              scrolling="no"
              title="Image loading with Delaunay triangulation based placeholder"
              src="//codepen.io/jmperez/embed/BmaWmQ/?height=567&theme-id=light&default-tab=result&embed-version=2"
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
              style={{ width: '100%' }}
            />
            <iframe
              height="641"
              scrolling="no"
              title="Contour"
              src="//codepen.io/jmperez/embed/oogqdp/?height=641&theme-id=light&default-tab=result&embed-version=2"
              frameborder="no"
              allowtransparency="true"
              allowfullscreen="true"
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default ContactPage;

export const pageQuery = graphql`
  query ContactsQuery {
    dataJson {
      companyInfo {
        name
        slogan
      }
    }
    imageSharp(id: { regex: "/mtn2/" }) {
      sizes(maxWidth: 1280) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;

/* 
GatsbyImageSharpSizes
GatsbyImageSharpSizes_noBase64
GatsbyImageSharpSizes_tracedSVG
GatsbyImageSharpSizes_withWebp
GatsbyImageSharpSizes_withWebp_noBase64
GatsbyImageSharpSizes_withWebp_tracedSVG
*/
