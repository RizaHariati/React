import React, { useContext } from "react";
import { AppContext } from "./context";

const Navbar = () => {
  const { amount } = useContext(AppContext);
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">
          Azri <span>Coding</span>
        </h2>
        <div className="nav-icon">
          <div className="icon">
            <i className="fa fa-shopping-cart"></i>
          </div>
          <div className="total-amount">{amount}</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
