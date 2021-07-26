import React from "react";
import { useGlobalContext } from "./context";
const Navbar = () => {
  const { totalAmount } = useGlobalContext();
  return (
    <nav className="navbar">
      <h2 className="logo">
        Azri <span>Coding</span>
      </h2>
      <div className="nav-icon">
        <div className="icon">Tas</div>
        <div className="total-amount">{totalAmount}</div>
      </div>
    </nav>
  );
};

export default Navbar;
