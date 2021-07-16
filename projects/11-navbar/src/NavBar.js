import React from "react";

const NavBar = ({ links, refLinks, refContainerLinks }) => {
  return (
    <div className="links-container" ref={refContainerLinks}>
      <ul className="links" ref={refLinks}>
        {links.map((link, index) => {
          const { url, text } = link;
          return (
            <li key={index}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
