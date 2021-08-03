import React, { useRef } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const refForm = useRef(null);
  const { setQuery, query } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    refForm.current.value = "";
    refForm.current.focus();
  };
  return (
    <div className="search-container">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="movie-title"
          ref={refForm}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label htmlFor="search">Search Movie</label>
      </form>
    </div>
  );
};

export default SearchForm;
