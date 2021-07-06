import React, { useState } from "react";

const UsestateCounter = () => {
  const [count, setCount] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      setCount((prevState) => {
        return prevState + 1;
      });
    }, 1000);
  };
  return (
    <>
      <h3>Counter</h3>
      <h1>{count}</h1>
      <div className="item">
        <button onClick={() => setCount(count - 1)}>decrease</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <button onClick={complexIncrease}>increase later</button>
      </div>
    </>
  );
};

export default UsestateCounter;
