import React, { useState } from "react";
import { questions } from "./data";
import Question from "./Question";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="main-title">Questions and Answer about login</h2>
        <div className="questions">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
