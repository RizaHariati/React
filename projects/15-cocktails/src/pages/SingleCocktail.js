import React, { useState, useEffect, useCallback } from "react";
import Loading from "../components/Loading";
import { Link, useParams } from "react-router-dom";

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;
const SingleCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();

  const fetchCocktail = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${url}${id}`);
      const data = await resp.json();
      const { drinks } = data;
      if (drinks) {
        const {
          strAlcoholic: alc,
          strCategory: category,
          strGlass: glass,
          strDrinkThumb: img,
          strDrink: name,
          strInstructions: instr,
          strIngredient1: ingre1,
          strIngredient2: ingre2,
          strIngredient3: ingre3,
          strIngredient4: ingre4,
        } = drinks[0];
        const ingredients = [ingre1, ingre2, ingre3, ingre4];
        const newCocktail = {
          alc,
          category,
          glass,
          img,
          ingredients,
          instr,
          name,
        };
        setCocktail(newCocktail);
        setLoading(false);
      } else {
        setCocktail(null);
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  useEffect(() => {
    fetchCocktail();
  }, [id, fetchCocktail]);

  if (loading) {
    return <Loading />;
  }
  if (!cocktail) {
    return <h2>No Cocktail detail to display</h2>;
  }
  const { alc, category, glass, img, ingredients, instr, name } = cocktail;
  return (
    <div className="page">
      <h1>Cocktail</h1>
      <Link to="/" className="btn">
        Back Home
      </Link>
      <h2>{name}</h2>
      <div className="single-cocktails">
        <div className="image-cocktail">
          <img src={img} alt={name} />
        </div>
        <div className="info-cocktail">
          <p className="single-cocktail">
            <span>Name : </span> {name}
          </p>
          <p className="single-cocktail">
            <span>Category : </span> {category}
          </p>
          <p className="single-cocktail">
            <span>Info : </span> {alc}
          </p>
          <p className="single-cocktail">
            <span>Glass : </span> {glass}
          </p>
          <p className="single-cocktail">
            <span>Instructions : </span> {instr}
          </p>
          <p className="single-cocktail">
            <span>Ingredients : </span>{" "}
            {ingredients.map((ingre) => ingre + ", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
