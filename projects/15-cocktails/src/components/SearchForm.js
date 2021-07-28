import React from "react";

import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { settingKeyword, refInput } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    refInput.current.value = "";
    refInput.current.focus();
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="search">Search your favorite cocktail</label>
      <input
        type="text"
        name="search"
        id="search"
        className="search"
        ref={refInput}
        onChange={() => settingKeyword(refInput.current.value)}
      />
    </form>
  );
};

export default SearchForm;
