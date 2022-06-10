import React from "react";
import "./SingleCocktail.module.css";
import { useParams, useNavigate } from "react-router-dom";

const SingleCocktail = () => {
  const id = useParams();
  const navigate = useNavigate();
  return <div>SingleCocktail</div>;
};

export default SingleCocktail;
