import React from "react";
import { ReactComponent as Spinner } from "../assets/Spinner.svg";

const Loading = () => {
  return (
    <div className="container">
      <Spinner />
    </div>
  );
};

export default Loading;
