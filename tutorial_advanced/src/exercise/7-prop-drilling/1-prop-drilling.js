import React, { useState } from "react";
import { data } from "../../data";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newPeople = people.filter((person) => {
      return person.id != id;
    });
    return setPeople(newPeople);
  };
  console.log(people);
  return (
    <>
      <h2>Prop drilling</h2>
      <List people={people} removeItem={removeItem} />
    </>
  );
};

const List = ({ people, removeItem }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} removeItem={removeItem} />;
      })}
    </div>
  );
};

const Item = ({ id, name, removeItem }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button className="remove-btn" onClick={() => removeItem(id)}>
        remove
      </button>
    </div>
  );
};

export default PropDrilling;
