import React from "react";
import { Link } from "react-router-dom";
import classes from "./ErrorPage.module.css";
const ErrorPage = () => {
  return (
    <section>
      <div className="container">
        <h2>Sorry! We can't find your page</h2>
        <Link to={"/"} className={classes.link}>
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
