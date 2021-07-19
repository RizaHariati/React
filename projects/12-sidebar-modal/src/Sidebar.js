import React, { useContext, useEffect } from "react";
import { links, social } from "./data";
import { SiteContext } from "./context";

const Sidebar = () => {
  const { closeSideBar, showSideBar, refSideBar } = useContext(SiteContext);
  useEffect(() => {
    if (showSideBar) {
      refSideBar.current.style.transform = "translateX(0)";
    } else {
      refSideBar.current.style.transform = "translateX(-100%)";
    }
  }, [refSideBar, showSideBar]);
  return (
    <div className="sidebar" ref={refSideBar}>
      <div className="header">
        <div className="logo">
          Azri <span>Coding</span>
        </div>
        <button className="close-btn" onClick={closeSideBar}>
          <i className="fa fa-times"></i>
        </button>
      </div>
      <div className="links-container">
        <ul className="links">
          {links.map((item) => {
            const { id, url, text } = item;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="icons-container">
        {social.map((item) => {
          const { id, icon } = item;
          return (
            <button className="icon-btn" key={id}>
              <i className={"fa " + icon}></i>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
