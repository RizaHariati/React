import React, { useState } from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeItem }) => {
  return (
    <div className="container">
      {tours.map((tour) => {
        const { id } = tour;
        return (
          <div key={id} className="modal">
            <Tour key={id} {...tour} removeItem={removeItem} />
          </div>
        );
      })}
    </div>
  );
};

export default Tours;
