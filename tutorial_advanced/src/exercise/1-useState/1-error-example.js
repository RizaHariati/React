import React from "react";
import { useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("Random Title");
  const handleClick = () => {
    setTitle("Title changed");
  };
  return (
    <React.Fragment>
      <div>
        <h2>{title}</h2>
        <button className="btn" onClick={handleClick}>
          Change Title
        </button>
      </div>
    </React.Fragment>
  );
};

export default ErrorExample;
