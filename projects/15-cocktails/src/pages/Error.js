import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Error = () => {
  const { setSearchTerm } = useGlobalContext();
  return (
    <div className="page">
      <h1>Error</h1>
      <h4 style={{ margin: "auto" }}>Can't find the item you're looking for</h4>
      <Link to="/" className="btn" onClick={() => setSearchTerm("a")}>
        Back Home
      </Link>
    </div>
  );
};

export default Error;
