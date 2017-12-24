import React from "react";

import "./_menu-items.scss";

const MenuItems = props => (
  <section className="menu-items" id="menu-items">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h4 className="title menu-items-title">{props.title}</h4>
          <h5>{props.description}</h5>
        </div>
      </div>
      <div className="row">
        {props.data.map((item, i) => (
          <div className="col-md-6 col-sm-12 menu-items-list" key={i}>
            <div className="menu-items-list-item">
              <div className="menu-items-list-item-title">{item.title}</div>
              <div className="menu-items-list-item-info">
                {item.price} - ({item.calories} cal.)
              </div>
              <div className="menu-items-list-item-desc">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuItems;
