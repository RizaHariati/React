import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;
const SingleCocktail = () => {
  const [single, setSingle] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const resp = await fetch(`${url}${id}`);
      const data = await resp.json();
      if (data) {
        const { drinks } = data;
        const {
          strDrinkThumb: img,
          strDrink: name,
          strCategory: category,
          strGlass: glass,
          strAlcoholic: info,
          strInstructions: instruction,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        const singleDrink = {
          img,
          name,
          category,
          glass,
          info,
          instruction,
          ingredients,
        };
        setSingle(singleDrink);
        setLoading(false);
      } else {
        setSingle(null);
      }
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  useEffect(() => {
    fetchData();
  }, [id, fetchData]);
  if (!single) {
    return <Loading />;
  }
  if (loading) {
    return <Loading />;
  }
  const { img, name, category, glass, info, instruction, ingredients } = single;
  return (
    <div className="page">
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
            <span>Category : </span> {category}
          </p>
          <p className="single-cocktail">
            <span>Info : </span> {info}
          </p>
          <p className="single-cocktail">
            <span>Glass : </span> {glass}
          </p>
          <p className="single-cocktail">
            <span>Instructions : </span> {instruction}
          </p>
          <p className="single-cocktail">
            <span>Ingredients : </span>
            {ingredients.map((item) => {
              if (item) {
                return item + ", ";
              }
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCocktail;
