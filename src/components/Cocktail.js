import React from "react";
import { Link } from "react-router-dom";
import classes from "./Cocktail.module.css";

const Cocktail = (props) => {
  const { id, name, image, info, glass } = props;

  return (
    <article className={classes.article}>
      <figure className={classes["article-figure"]}>
        <img src={image} alt="" />
      </figure>
      <div className={classes["article-content"]}>
        <span className={classes.name}>{name}</span>
        <span className={classes.glass}>{glass}</span>
        <span className={classes.type}>{info}</span>
        <Link to={`cockteil/${id}`} className={classes.link}>
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
