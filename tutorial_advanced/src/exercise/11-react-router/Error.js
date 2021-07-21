import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="modal">
      <h1>ERROR..</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
