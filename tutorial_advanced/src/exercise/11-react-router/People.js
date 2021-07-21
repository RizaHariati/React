import React from "react";
import { Link } from "react-router-dom";

const People = ({ data }) => {
  return (
    <div>
      {data.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4 className="name">{person.name}</h4>
            <Link to={`/person/${person.id}`}>Learn More</Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;
