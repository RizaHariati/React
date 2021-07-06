import React, { useState } from "react";
import Age from "./Age";
import { data } from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <>
      <div className="container">
        <h2>{people.length} birthdays today</h2>
        {people.map((person) => {
          return <Age person={person} />;
        })}
        <button className="btn" onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </>
  );
};

export default App;
