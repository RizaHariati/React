import React, { useState } from "react";

const Question = ({ id, title, info }) => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const showText = () => {
    setShow(!show);
    setText(show || info);
  };
  return (
    <>
      <div className="question" key={id}>
        <div className="ask">
          <h4 className="title">{title}</h4>
          <button className="expand-btn" onClick={showText}>
            {show ? "-" : "+"}
          </button>
        </div>
        <div className="answer">
          <p className="text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Question;
