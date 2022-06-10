import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.nav__list}>
        <li className="nav__list">
          <Link to={"/"} className={classes.link}>
            Home
          </Link>
        </li>
        <li className={classes.nav__list}>
          <Link to={"/about"} className={classes.link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
