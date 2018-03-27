/* global graphql */

import React from 'react';
import Nav from '../components/nav';
import * as FontAwesome from 'react-icons/lib/fa';

const LocationsPage = props => (
  <main>
    <Nav />
    <div className="container">
      <div className="row" style={{ padding: '60px 0px' }}>
        <div className="col-md-12">
          <h2>Including an Icon Font</h2>
          <p>Add a script tag to your head (this example using Font Awesome)</p>
          <code
            style={{
              backgroundColor: '#cdcdcd',
              padding: 10
            }}
          >
            {`<script
            defer
            src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"
            crossorigin="anonymous"
          />`}
          </code>
          <hr />
          <p>
            Then you can put predefined clases from the icon library on icon
            tags:{' '}
          </p>
          <code style={{ backgroundColor: '#cdcdcd', padding: 10 }}>
            {`<i class="fas fa-chevron-right"></i>`}
          </code>
          <hr />
          <div>
            <FontAwesome.FaChevronRight />
            <FontAwesome.FaChevronLeft />
            <FontAwesome.FaChevronDown />
            <FontAwesome.FaChevronUp />
            <FontAwesome.FaChild />
            <FontAwesome.FaChrome />
            <FontAwesome.FaCode />
            <FontAwesome.FaCog />
            <FontAwesome.FaCutlery />
          </div>
          {/* <div>
            <i class="fas fa-user" />
          </div> */}
          <div>
            <FontAwesome.FaChevronRight size={50} />
            <FontAwesome.FaChevronLeft size={50} />
            <FontAwesome.FaChevronDown size={50} />
            <FontAwesome.FaChevronUp size={50} />
            <FontAwesome.FaChild size={50} />
            <FontAwesome.FaChrome size={50} />
            <FontAwesome.FaCode size={50} />
            <FontAwesome.FaCog size={50} />
            <FontAwesome.FaCutlery size={50} />
          </div>
          <div>
            <FontAwesome.FaGithub size={500} color="gray" />
          </div>
          <div>
            <a href="https://fontawesome.com/icons?d=gallery" target="_blank">
              See Icon Gallery
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default LocationsPage;

export const pageQuery = graphql`
  query LocationsQuery {
    dataJson {
      locations {
        title
        image
        description
        address {
          street
          statecity
          zip
        }
        phone
        email
      }
    }
  }
`;
