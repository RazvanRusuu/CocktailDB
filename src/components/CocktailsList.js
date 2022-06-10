import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";
const CocktailsList = () => {
  const { loading, cocktails } = useGlobalContext();

  const emptyContent = <p>No cocktails found</p>;

  return (
    <>
      {loading && <Loading />}
      {!loading && cocktails.length < 1 && emptyContent}
      {cocktails.map((cocktail, index) => {
        const { id, name, image, info, glass } = cocktail;
        return (
          <Cocktail
            key={id}
            id={id}
            name={name}
            info={info}
            image={image}
            glass={glass}
          />
        );
      })}
    </>
  );
};

export default CocktailsList;
