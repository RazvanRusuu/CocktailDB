import React from "react";
import Input from "../components/Input";
import classes from "./Home.module.css";
import CocktailsList from "../components/CocktailsList";

const Home = () => {
  return (
    <>
      <section className={classes.home}>
        <Input type={"text"} />
        <div className="container grid grid-autofit">
          <CocktailsList />
        </div>
      </section>
    </>
  );
};

export default Home;
