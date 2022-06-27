import React from "react";
import axios from "axios";
import classes from "./SingleCocktail.module.css";
import { useGlobalContext } from "../context";
import { useParams, Link } from "react-router-dom";
import { single_cocktail_url as url } from "../utilis";
import Loading from "./Loading";
import { useState } from "react";
import { useEffect } from "react";

const SingleCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [singleCocktail, setCocktail] = useState(null);

  const { id } = useParams();

  const fetchSingleCocktail = async (url) => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setLoading(false);
      const { data } = response;
      console.log(data);
      if (data.drinks) {
        const {
          strAlcoholic: info,
          strDrink: name,
          strCategory: category,
          strDrinkThumb: image,
          strGlass: glass,
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        } = data.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
        ];
        setCocktail({
          name,
          info,
          category,
          image,
          ingredients,
          glass,
          instructions,
        });
      } else {
        setCocktail(null);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleCocktail(`${url}${id}`);
  }, [id]);

  let cocktailContent = "";

  if (singleCocktail) {
    const { name, info, category, image, ingredients, glass, instructions } =
      singleCocktail;

    cocktailContent = (
      <div className="container">
        <div className="u-center u-margin-bottom-large">
          <Link to={"/"} className="link">
            Back Home
          </Link>
        </div>
        <h1 className="heading-primary u-center u-margin-bottom-large">
          {name}
        </h1>
        <div className="grid grid-2--cols">
          <figure className={classes.figure}>
            <img src={image} alt={name} className={classes["cocktail-image"]} />
          </figure>
          <div className={classes["cocktail-content"]}>
            <p className={classes.data}>
              <span>Name:</span>
              {name}
            </p>
            <p className={classes.data}>
              <span>Category:</span>
              {category}
            </p>
            <p className={classes.data}>
              <span>Info:</span>
              {info}
            </p>
            <p className={classes.data}>
              <span>Glass:</span>
              {glass}
            </p>
            <p className={classes.data}>
              <span>Instructions:</span>
              {instructions}
            </p>
            <p className={classes.data}>
              <span>Ingredients:</span>
              {ingredients.map((ing, index) => {
                return ing ? (
                  <span key={index} className="ingredient">
                    {ing}&nbsp;&nbsp;
                  </span>
                ) : null;
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }

  const emptyContent = (
    <div className="container">
      <p className={`u-center ${classes.paragraph}`}>No Cocktail Found!</p>
    </div>
  );

  return (
    <section className={classes["section__cocktail"]}>
      {loading && <Loading />}
      {!singleCocktail && !loading && emptyContent}
      {cocktailContent}
    </section>
  );
};

export default SingleCocktail;
