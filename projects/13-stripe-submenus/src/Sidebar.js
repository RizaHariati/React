import React, { useContext, useEffect } from "react";
import { AppContext } from "./context";

const Sidebar = () => {
  const { closeSideBar, refSideBar, showSideBar, sublinks } =
    useContext(AppContext);
  useEffect(() => {
    if (showSideBar) {
      refSideBar.current.style.transform = "scale(1)";
      refSideBar.current.style.background = "#eaedfd70";
    } else {
      refSideBar.current.style.transform = "scale(0)";
      refSideBar.current.style.background = "transparent";
    }
  }, [refSideBar, showSideBar]);
  return (
    <div className="sidebar" ref={refSideBar}>
      <div className="side-links">
        <button className="close-btn" onClick={closeSideBar}>
          <i className="fa fa-times"></i>
        </button>
        {sublinks.map((sublink, index) => {
          const { page, links } = sublink;
          return (
            <ul key={index}>
              {page}
              <li className="side-link">
                {links.map((link, idLink) => {
                  const { icon, label, url } = link;
                  return (
                    <div key={idLink} className="linking">
                      <a href={url}>
                        <i className={"fa " + icon}></i>
                        {label}
                      </a>
                    </div>
                  );
                })}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
