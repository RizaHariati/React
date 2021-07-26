import React from "react";
import CartItem from "./CartItem";
import { useGlobalContext } from "./context";

const CartContainer = () => {
  const { cart, clearList, totalPrice } = useGlobalContext();

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1>Your Bag is Empty</h1>
      </div>
    );
  }
  return (
    <div className="cart-container">
      <h1>Your Bag</h1>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <div className="line"></div>
      <div className="total-price-container">
        <h4>Total</h4>
        <h4 className="total-price">${totalPrice}</h4>
      </div>
      <div className="clear-container">
        <button className="clear-btn" onClick={clearList}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default CartContainer;
