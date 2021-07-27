import { Link } from "react-router-dom";
import React from "react";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          The<span>Cocktail</span>DB
        </Link>
        <ul>
          <li>
            <Link to="/" onClick={() => setSearchTerm("a")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
