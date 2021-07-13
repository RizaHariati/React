import React from "react";

const Detail = ({ duties }) => {
  return (
    <>
      <ul>
        {duties.map((duty, index) => {
          return (
            <li key={index}>
              <div className="icon">
                <i className="fa fa-angle-double-right"></i>
              </div>
              <p className="text">{duty}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Detail;
