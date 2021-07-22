import React, { useContext, useEffect } from "react";
import { AppContext } from "./context";

const Submenu = () => {
  const { submenuContent, location, refSubmenu } = useContext(AppContext);

  const { links } = submenuContent;
  let length = "col-3";
  if (links.length === 2) {
    length = "col-2";
  } else if (links.length === 4) {
    length = "col-4";
  }
  useEffect(() => {
    refSubmenu.current.style.left = `${location}px`;
  }, [refSubmenu, location]);
  return (
    <div className="submenu" ref={refSubmenu}>
      <h4>{submenuContent.page}</h4>
      <div className={"sub-links " + length}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <div key={index} className="sub-link">
              <a href={url}>
                <i className={"fa " + icon}></i> {label}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
<Submenu />;
