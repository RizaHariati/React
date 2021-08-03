import React, { useState, useContext, useEffect, useRef } from "react";
import { useFetch } from "./useFetch";

const themeStorage = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("lord");
  const [theme, setTheme] = useState(themeStorage());
  const { loading, error, movies } = useFetch(`&s=${query}`);
  const refTheme = useRef(null);
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      refTheme.current.style.right = "0";
    } else {
      setTheme("light-theme");
      refTheme.current.style.right = "50%";
    }
  };
  useEffect(() => {
    document.documentElement.classList = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <AppContext.Provider
      value={{
        toggleTheme,
        query,
        setQuery,
        movies,
        error,
        loading,
        refTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
