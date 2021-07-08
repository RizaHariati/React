import React, { useState } from "react";

const MultipleInputs = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, age } = person;
    if (firstName && email && age) {
      const id = new Date().getTime();
      const newPerson = { id, firstName, email, age };
      setPeople((prevPeople) => {
        return [...prevPeople, newPerson];
      });
    } else {
      alert("Empty Value");
    }
    setPerson({ firstName: "", email: "", age: "" });
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              autoFocus
              type="text"
              name="firstName"
              id="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              name="email"
              id="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="age">Age :</label>
            <input
              type="text"
              name="age"
              id="age"
              value={person.age}
              onChange={handleChange}
            ></input>
          </div>

          <button className="btn">Add Person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs;
