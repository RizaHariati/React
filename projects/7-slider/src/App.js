import React, { useState, useEffect } from "react";
import people from "./data";

const App = () => {
  const [index, setIndex] = useState(1);
  useEffect(() => {
    if (index > people.length) {
      setIndex(1);
    } else if (index < 1) {
      setIndex(people.length);
    }
  }, [index, people]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="container">
        <h1>
          / <span>Reviews</span>
        </h1>
        <div className="slider-container">
          <div className="sliders">
            {people.map((item) => {
              const { id, image, name, quote, title } = item;
              let position = "next";
              if (id === index) {
                position = "current";
              }
              if (index === id - 1 || (id === 1 && index === people.length)) {
                position = "prev";
              }

              console.log(index + " " + id);
              return (
                <div key={id} className={`slide ${position}`}>
                  <div className="image">
                    <img src={image} alt={name} />
                  </div>
                  <div className="info">
                    <h4 className="name">{name}</h4>
                    <p className="title">{title}</p>
                    <p className="text">{quote}</p>
                    <div className="quote">
                      <i className="fa fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            className="btn right"
            onClick={() => {
              setIndex(index + 1);
            }}
          >
            <i className="fa fa-chevron-right"></i>
          </button>
          <button
            className="btn left"
            onClick={() => {
              setIndex(index - 1);
            }}
          >
            <i className="fa fa-chevron-left"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
