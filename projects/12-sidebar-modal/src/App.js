import React, { useContext } from "react";
import Home from "./Home";
import SideBar from "./Sidebar";
import Modal from "./Modal";
import { SiteContext } from "./context";

const App = () => {
  const { showModal } = useContext(SiteContext);
  return (
    <div className="container">
      <Home />
      <SideBar />
      {showModal && <Modal />}
    </div>
  );
};

export default App;
