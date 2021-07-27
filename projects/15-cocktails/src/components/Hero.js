import React from "react";
import CocktailList from "./CocktailList";
import SearchForm from "./SearchForm";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const Hero = () => {
  const { loading } = useGlobalContext();
  return (
    <>
      <SearchForm />
      {loading && <Loading />}
      <CocktailList />
    </>
  );
};

export default Hero;
