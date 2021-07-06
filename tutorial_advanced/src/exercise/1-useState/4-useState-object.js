import React, { useState } from "react";

const UsestateObjects = () => {
  const [person, setPerson] = useState({
    name: "Riza",
    age: 45,
    message: "Are you winning?",
  });
  const changePerson = () => {
    setPerson({ ...person, message: "I am winning!!" });
  };
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random Message");
  const changeMessage = () => {
    if (message === "random Message") {
      setMessage("Longer randome message, because you deserve it");
    } else {
      setMessage("random Message");
    }
  };
  return (
    <>
      <div className="modal">
        <h3>{person.name}</h3>
        <p>{person.age}</p>
        <p>{person.message}</p>
        <button className="btn" onClick={changePerson}>
          Change Message
        </button>
      </div>
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{message}</p>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UsestateObjects;
