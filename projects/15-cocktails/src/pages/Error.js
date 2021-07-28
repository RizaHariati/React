import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Error = () => {
  const { settingKeyword } = useGlobalContext();
  return (
    <div className="page">
      <h1>Error</h1>
      <h3>Can't find the cocktail with that keyword</h3>
      <Link to="/" className="btn" onClick={() => settingKeyword("a")}>
        Go Back
      </Link>
    </div>
  );
};

export default Error;
