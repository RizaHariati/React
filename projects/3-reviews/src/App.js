import React, { useState } from "react";
import Review from "./Review";
import { reviews } from "./data.js";

function App() {
  const [count, setCount] = useState(0);
  let data = reviews[count];
  const increase = () => {
    if (count >= reviews.length - 1) {
      return setCount(0);
    } else {
      return setCount((prevCount) => prevCount + 1);
    }
  };
  const decrease = () => {
    if (count === 0) {
      return setCount(reviews.length - 1);
    } else {
      return setCount((prevCount) => prevCount - 1);
    }
  };

  const randomNumber = () => {
    const newNumber = Math.floor(Math.random() * reviews.length);
    if (newNumber === count) {
      increase();
    } else {
      setCount(newNumber);
    }
  };

  return (
    <div className="container">
      <h1>Our reviews</h1>
      <div className="line"></div>
      <div className="modal">
        <div className="slide-container">
          <Review data={data} />
        </div>

        <div className="btn-container">
          <button className="arrow left" onClick={decrease}>
            <i className={"fa fa-chevron-left"}></i>
          </button>
          <button className="arrow right" onClick={increase}>
            <i className={"fa fa-chevron-right"}></i>
          </button>
        </div>
        <button className="btn" onClick={randomNumber}>
          Surprise Me
        </button>
      </div>
    </div>
  );
}

export default App;
