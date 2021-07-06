import React, { useState } from "react";

function UseStateBasics() {
  const [text, setText] = useState("You can change me");
  const handleClick = () => {
    if (text === "You can change me") {
      setText("Change me back!");
    } else {
      setText("You can change me");
    }
  };
  return (
    <>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Me
      </button>
    </>
  );
}

export default UseStateBasics;
