import React, { useContext } from "react";
import { SiteContext } from "./context";
const Home = () => {
  const { openModal, openSideBar } = useContext(SiteContext);
  return (
    <div className="home">
      <button className="bar" onClick={openSideBar}>
        <i className="fa fa-bars"></i>
      </button>
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
    </div>
  );
};

export default Home;
