import React from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { newQuery, refInput } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    refInput.current.value = "";
    refInput.current.focus();
  };
  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input
        placeholder="type keywords"
        type="text"
        name="search"
        id="search"
        className="search"
        ref={refInput}
        onChange={(e) => newQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
