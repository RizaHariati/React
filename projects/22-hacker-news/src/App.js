import React from "react";
import Buttons from "./Buttons";
import SearchForm from "./SearchForm";
import Stories from "./Stories";

const App = () => {
  return (
    <div className="container">
      <h1>Search Hacker News</h1>
      <SearchForm />
      <Buttons />
      <Stories />
    </div>
  );
};

export default App;
