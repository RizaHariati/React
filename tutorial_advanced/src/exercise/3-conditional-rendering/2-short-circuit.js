import React, { useState } from "react";

const ShortCircuit = () => {
  // const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const handleClick = () => {
    return setIsError(!isError);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>{isError && "I need help"}</h1>
      <h1>{isError || "I need help"}</h1>
      <button className="btn" onClick={handleClick}>
        toggle Error
      </button>
    </>
  );
};

export default ShortCircuit;
