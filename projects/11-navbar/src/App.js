import React, { useState, useEffect, useRef } from "react";
import { links, social } from "./data";
import NavBar from "./NavBar";
const App = () => {
  const refLinks = useRef(null);
  const refContainerLinks = useRef(null);
  const [show, setShow] = useState(false);

  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const checkWindow = () => {
  //   setWindowWidth(window.innerWidth);
  // };
  useEffect(() => {
    const checkHeight = refLinks.current.getBoundingClientRect().height;
    if (show) {
      refContainerLinks.current.style.height = `${checkHeight + 10}px`;
    } else {
      refContainerLinks.current.style.height = `0px`;
    }
  }, [show]);
  const showNavbar = () => {
    setShow((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <div className="header">
            <div className="logo">
              Azri <span>Coding</span>
            </div>
            <div className="bar" onClick={showNavbar}>
              <i className="fa fa-bars"></i>
            </div>
          </div>
          {
            <NavBar
              links={links}
              refLinks={refLinks}
              refContainerLinks={refContainerLinks}
            />
          }
          <div className="icons-container">
            {social.map((links, index) => {
              const { url, icon } = links;
              return (
                <div key={index} className="icon-btn">
                  <a href={url}>
                    <i className={"fa " + icon}></i>
                  </a>
                </div>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
};

export default App;
//  if (show) {
//    refContainerLinks.current.style.height = `${heightLinks + 20}px`;
//  } else {
//    window.addEventListener("resize", checkWindow);
//    console.log(windowWidth);
//  }
