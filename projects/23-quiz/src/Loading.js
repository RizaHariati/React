import React from "react";
import defaultImage from "./Spinner-1s-200px.gif";
const Loading = () => {
  return (
    <div className="quiz">
      <div className="quiz-container">
        <img src={defaultImage} alt="spinning" />
      </div>
    </div>
  );
};

export default Loading;
