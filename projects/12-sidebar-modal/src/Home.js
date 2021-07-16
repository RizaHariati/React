import React, { useContext } from "react";
import { AppContext } from "./context";

const Home = () => {
  const { closeSideBar } = useContext(AppContext);
  return (
    <div className="header">
      <div className="logo">
        Azri <span>Coding</span>
      </div>
      <button className="close-btn" onClick={closeSideBar}>
        <i className="fa fa-times"></i>
      </button>
    </div>
  );
};

export default Home;
