import React from "react";
import Movies from "./Movies";
import SearchForm from "./SearchForm";
import { useGlobalContext } from "./context";
const Home = () => {
  const { error, toggleTheme, refTheme } = useGlobalContext();

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav-container">
          <SearchForm />
          <div className="mode">
            <div className="mode-container">
              <h4 className="mode-text">dark mode</h4>
              <h4 className="mode-text">light mode</h4>
              <button
                className="mode-btn"
                ref={refTheme}
                onClick={toggleTheme}
              ></button>
            </div>
          </div>
        </div>
      </nav>
      <div className="movies-container">
        <div className="alert">
          <h4 className="alert-text">{error.mgs}</h4>
        </div>
        <Movies />
      </div>
    </div>
  );
};

export default Home;
