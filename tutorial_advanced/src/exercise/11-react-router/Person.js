import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Person = ({ data }) => {
  const { id } = useParams();
  const index = parseInt(id);
  const [name, setName] = useState("defaultName");
  useEffect(() => {
    const newName = data.filter((item) => {
      return item.id === index;
    });
    setName(newName[0].name);
  }, [data, index]);
  return (
    <div className="modal">
      <h2>{name}</h2>
      <Link to="/">home</Link>
    </div>
  );
};

export default Person;
