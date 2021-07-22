import React, { useState, useRef } from "react";
import sublinks from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const refSideBar = useRef(null);
  const refSubmenu = useRef(null);
  const [showSideBar, setShowSideBar] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [submenuContent, setSubmenuContent] = useState([]);
  const [location, setLocation] = useState(0);
  const openSideBar = () => {
    setShowSideBar(true);
  };
  const closeSideBar = () => {
    setShowSideBar(false);
  };
  const openSubmenu = (id, position) => {
    setShowSubmenu(true);
    setSubmenuContent(sublinks[id]);
    setLocation(position);
  };
  const closeSubmenu = () => {
    setShowSubmenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        sublinks,
        openSideBar,
        closeSideBar,
        showSideBar,
        refSideBar,
        showSubmenu,
        openSubmenu,
        closeSubmenu,
        submenuContent,
        location,
        refSubmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
