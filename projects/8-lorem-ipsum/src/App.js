import React, { useState, useRef } from "react";
import { text } from "./data";

const App = () => {
  const [value, setValue] = useState(0);
  const refText = useRef(null);

  const getNumber = (e) => {
    e.preventDefault();
    const number = refText.current.value;
    if (!number) {
      setValue(0);
      alert("empty value");
    } else if (number < 0) {
      setValue(0);
      alert("Number can't be less than 0");
    } else if (number > 8) {
      setValue(8);
    }
    setValue(number);
    refText.current.value = "";
    refText.current.focus();
  };
  return (
    <>
      <div className="container">
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form
          onSubmit={(e) => {
            getNumber(e);
          }}
          className="form"
        >
          <label htmlFor="paragraph">Paragraph</label>
          <input type="number" name="paragraph" id="paragraph" ref={refText} />
          <button type="submit" className="btn">
            GENERATE
          </button>
        </form>
        <div className="text-container">
          {text.map((paragraph, index) => {
            if (index <= value) {
              return (
                <p key={index} className="text">
                  {paragraph}
                </p>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default App;
