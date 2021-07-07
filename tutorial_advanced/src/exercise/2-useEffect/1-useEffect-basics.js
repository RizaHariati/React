import React, { useState, useEffect } from "react";

const useEffectBasic = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("calling useEffect");

    if (count === 0) {
      document.title = `new message `;
    } else {
      document.title = `new message ${count}`;
    }
  }, [count]);
  const increase = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("rendering component");
  };

  return (
    <>
      <div className="modal">
        <h1>{count}</h1>
        <div className="row col-2">
          <button className="btn" onClick={() => setCount(0)}>
            reset
          </button>
          <button className="btn" onClick={increase}>
            increase
          </button>
        </div>
      </div>
    </>
  );
};

export default useEffectBasic;
