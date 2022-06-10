import React, { forwardRef } from "react";
import classes from "./Input.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { useGlobalContext } from "../context";
const Input = (props) => {
  const { setSearchTerm } = useGlobalContext();

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form className={classes.form}>
      <div className={classes["form-controls"]}>
        <input
          // ref={inputRef}
          type={props.type}
          className={`${props?.className ?? ""} ${classes.input}`}
          onChange={handleInput}
        />
        <button type="submit">
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );
};

export default Input;
