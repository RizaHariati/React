import React, { useState, useRef } from "react";

const SiteContext = React.createContext();
const SiteProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const refModal = useRef(null);
  const refSideBar = useRef(null);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const openSideBar = () => {
    setShowSideBar(true);
  };
  const closeSideBar = () => {
    setShowSideBar(false);
  };
  return (
    <SiteContext.Provider
      value={{
        showModal,
        setShowModal,
        setShowSideBar,
        openModal,
        closeModal,
        refModal,
        showSideBar,
        openSideBar,
        closeSideBar,
        refSideBar,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export { SiteContext, SiteProvider };
