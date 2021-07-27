import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, alc, name, glass, img }) => {
  return (
    <div className="cocktail">
      <div className="image">
        <img src={img} alt={name} />
      </div>
      <div className="info">
        <h4 className="name">{name}</h4>
        <p className="glass">{glass}</p>
        <p className="type">{alc}</p>
        <Link to={`/singlecocktail/${id}`} className="btn">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
