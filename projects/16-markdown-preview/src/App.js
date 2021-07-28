import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [text, setText] = useState("#markdown preview");
  return (
    <div className="container">
      <div className="input">
        <h2>Type in the text area below</h2>
        <textarea
          name="inputtext"
          id="input-text"
          className="input-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <div className="result">
        <h2>Preview</h2>
        <div className="text-result">
          <ReactMarkdown className="big">{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default App;
