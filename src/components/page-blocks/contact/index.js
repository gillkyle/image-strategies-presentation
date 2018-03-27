import React from 'react';
import Img from 'gatsby-image';
import './_contact.scss';

class Contact extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <section className="contact page-content" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <Img
                alt="Card image"
                className="card-img"
                sizes={this.props.images.sizes}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
