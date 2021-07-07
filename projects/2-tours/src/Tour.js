import React, { useState } from "react";

export const Tour = ({ id, name, info, price, image, removeItem }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <div className="title">
          <h4>{name}</h4>
          <p className="price">{price}</p>
        </div>
        <p className="text">
          {show || info.substring(0, 100) + "..."}
          {show && info}
          <button className="readmore-btn" onClick={() => setShow(!show)}>
            {show ? "Show Less" : "Read More"}
          </button>
        </p>
      </div>
      <button
        className="btn"
        onClick={() => {
          removeItem(id);
        }}
      >
        Not interested
      </button>
    </>
  );
};
export default Tour;
