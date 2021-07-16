import React, { useContext, useEffect } from "react";
import Home from "./Home";
import { links, social } from "./data";
import { AppContext } from "./context";

const Sidebar = () => {
  const { sideBar, refSideBar } = useContext(AppContext);
  useEffect(() => {
    if (sideBar) {
      refSideBar.current.style.left = "0px";
    } else {
      refSideBar.current.style.left = "-300px";
    }
  }, [sideBar, refSideBar]);
  return (
    <nav className="navbar" ref={refSideBar}>
      <Home />
      <div className="links-container">
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="icons-container">
        {social.map((link) => {
          const { id, icon } = link;
          return (
            <button key={id} className="icon-btn">
              <i className={"fa " + icon}></i>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;
