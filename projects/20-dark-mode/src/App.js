import React, { useState, useEffect } from "react";

import articles from "./data";
import Article from "./Article";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
const App = () => {
  const [theme, setTheme] = useState(getStorageTheme());
  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.classList = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main>
      <nav className="navbar">
        <h2>Over Reacted</h2>
        <button className="btn" onClick={changeTheme}>
          Toggle
        </button>
      </nav>
      <div className="articles">
        {articles.map((article, index) => {
          return <Article key={index} {...article} />;
        })}
      </div>
    </main>
  );
};

export default App;
