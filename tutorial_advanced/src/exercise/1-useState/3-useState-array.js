import React, { useState } from "react";
import { data } from "../../data";

export const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    // const newPeople = people.filter((item) => item.id !== id);
    setPeople((prevPeople) => {
      const newPeople = prevPeople.filter((item) => item.id !== id);
      return newPeople;
    });
  };
  return (
    <>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4> {person.name}</h4>
            <button onClick={() => removeItem(person.id)}>clear</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </>
  );
};
export default UseStateArray;
