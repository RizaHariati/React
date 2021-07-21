import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="item">
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/about">
        <h4>About</h4>
      </Link>
      <Link to="/people">
        <h4>People</h4>
      </Link>
    </div>
  );
};

export default Navbar;
