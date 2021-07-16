import React, { useContext } from "react";
import Modal from "./Modal";
import SideBar from "./Sidebar";
import { AppContext } from "./context";
const App = () => {
  const { openSideBar, showModal, openModal } = useContext(AppContext);
  return (
    <div className="container">
      <button className="bar" onClick={openSideBar}>
        <i className="fa fa-bars"></i>
      </button>
      <SideBar />
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
      {showModal && <Modal />}
    </div>
  );
};

export default App;
