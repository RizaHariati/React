import React from "react";

const Menu = ({ id, title, category, price, img, desc }) => {
  return (
    <>
      <div className="menu-item" key={id} id={category}>
        <div className="image">
          <img src={img} alt="butter-milk" />
        </div>
        <div className="information">
          <div className="title">
            <h4 className="name">{title}</h4>
            <p className="price">${price}</p>
          </div>
          <p className="text">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
