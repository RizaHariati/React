import React, { useState, useRef } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const refModal = useRef(null);
  const refSideBar = useRef(null);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const openSideBar = () => {
    setSideBar(true);
  };
  const closeSideBar = () => {
    setSideBar(false);
  };
  return (
    <AppContext.Provider
      value={{
        showModal,
        openModal,
        closeModal,
        refModal,
        openSideBar,
        closeSideBar,
        sideBar,
        refSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
