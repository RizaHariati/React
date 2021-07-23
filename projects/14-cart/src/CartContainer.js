import React, { useContext } from "react";
import { AppContext } from "./context";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cart, total, clearCart } = useContext(AppContext);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1>Your List is Empty</h1>
      </div>
    );
  }
  return (
    <div className="cart-container">
      <h1>Your Bag</h1>
      {cart.map((product) => {
        return <CartItem key={product.id} {...product} />;
      })}
      <div className="line"></div>
      <div className="total-price-container">
        <h4>Total</h4>
        <h4 className="total-price">${total}</h4>
      </div>
      <div className="clear-container">
        <button className="clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </div>
    </div>
  );
};

export default CartContainer;
