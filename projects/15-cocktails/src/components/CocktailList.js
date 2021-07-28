import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import Error from "../pages/Error";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length === 0) {
    return <Error />;
  }
  const newDrinks = cocktails.map((drink) => {
    const { idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb } = drink;
    return {
      id: idDrink,
      name: strDrink,
      glass: strGlass,
      alcohol: strAlcoholic,
      img: strDrinkThumb,
    };
  });

  return (
    <div className="cocktail-list">
      <h2>Cocktails</h2>
      <div className="cocktails">
        {newDrinks.map((drink) => {
          const { id } = drink;
          return <Cocktail key={id} {...drink} />;
        })}
      </div>
    </div>
  );
};

export default CocktailList;
