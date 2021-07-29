import React, { useState } from "react";
import Follower from "./Follower";
import { useUtils } from "./utils";
const App = () => {
  const [value, setValue] = useState(1);
  const { start, end } = useUtils(value);

  const changeValue = (e) => {
    const temp = e.target.classList;
    if (temp.contains("prev")) {
      setValue(check(value - 1));
    } else if (temp.contains("next")) {
      setValue(check(value + 1));
    }
  };

  const check = (value) => {
    if (value > 10) {
      return 10;
    } else if (value < 1) {
      return 1;
    } else {
      return value;
    }
  };
  return (
    <div className="container">
      <div className="header">
        <h1 className="title">Pagination</h1>
        <div className="line"></div>
      </div>
      <div className="followers-container">
        <Follower start={start} end={end} />
      </div>
      <div className="btn-container">
        <button className="change-btn prev" onClick={(e) => changeValue(e)}>
          prev
        </button>
        {Array.from({ length: 10 }, (v, k) => k + 1).map((item) => {
          return (
            <button
              key={item}
              className="number-btn"
              value={item}
              onClick={() => setValue(item)}
            >
              {item}
            </button>
          );
        })}
        <button className="change-btn next" onClick={(e) => changeValue(e)}>
          next
        </button>
      </div>
    </div>
  );
};

export default App;
