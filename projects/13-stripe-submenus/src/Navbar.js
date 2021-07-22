import React, { useContext } from "react";
import Submenu from "./Submenu";
import { AppContext } from "./context";

const Navbar = () => {
  const { openSideBar, openSubmenu, closeSubmenu, sublinks, showSubmenu } =
    useContext(AppContext);

  const handleMouse = (e) => {
    e.preventDefault();
    const linkBtn = e.target.classList.contains("link");

    if (!linkBtn) {
      closeSubmenu();
    }
  };
  const getSublink = (e) => {
    e.preventDefault();
    const id = e.currentTarget.value;
    const position = e.target.getBoundingClientRect();
    const center = (position.left + position.right) / 2;
    openSubmenu(id, center);
  };

  return (
    <nav className="navbar" onMouseOver={handleMouse}>
      <div className="header">
        <h2 className="logo">
          Azri <span>Coding</span>
        </h2>
        <div className="sidebar-btn">
          <button className="btn" onClick={openSideBar}>
            <i className="fa fa-bars"></i>
          </button>
        </div>
      </div>
      <div className="nav-links">
        <ul>
          {sublinks.map((sublink, index) => {
            return (
              <li key={index}>
                <button
                  type="submit"
                  className="link"
                  value={index}
                  onMouseOver={getSublink}
                >
                  {sublink.page}
                </button>
              </li>
            );
          })}
          {showSubmenu && <Submenu />}
        </ul>
      </div>
      <button className="btn sign-in-btn">Sign-in</button>
    </nav>
  );
};

export default Navbar;
