import React, { useEffect } from "react";

import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm, refInput } = useGlobalContext();
  const searchCocktail = () => {
    setSearchTerm(refInput.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    refInput.current.focus();
  }, [refInput]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label htmlFor="search">Search your favorite cocktail</label>
      <input
        type="text"
        name="search"
        id="search"
        className="search"
        ref={refInput}
        onChange={searchCocktail}
      />
    </form>
  );
};

export default SearchForm;
