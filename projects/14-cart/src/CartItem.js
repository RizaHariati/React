import React, { useContext } from "react";
import { AppContext } from "./context";

const CartItem = ({ id, title, price, img, amount }) => {
  const { removeItem, increase, decrease } = useContext(AppContext);

  return (
    <div className="cart-item">
      <div className="item">
        <div className="image">
          <img src={img} alt={title} />
        </div>
        <div className="info">
          <h4 className="info-brand">{title}</h4>
          <p className="info-price">${price}</p>
          <button
            className="info-remove"
            onClick={() => {
              removeItem(id);
            }}
          >
            remove
          </button>
        </div>
      </div>
      <div className="btn-container">
        <button className="arrow up" onClick={() => increase(id)}>
          <i className="fa fa-chevron-up"></i>
        </button>
        <h3 className="amount">{amount}</h3>
        <button className="arrow down" onClick={() => decrease(id)}>
          <i className="fa fa-chevron-down"></i>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
