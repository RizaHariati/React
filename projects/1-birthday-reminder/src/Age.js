import React from "react";

const Age = (props) => {
  const { id, name, age, image } = props.person;
  return (
    <div key={id} className="item">
      <img src={image} alt="{name}" />
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default Age;
