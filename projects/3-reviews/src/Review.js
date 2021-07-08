import React from "react";

const Review = ({ data }) => {
  const { name, job, image, text } = data;
  return (
    <>
      <div className="slide">
        <div className="image">
          <div className="icon">
            <i className={"fa fa-quote-right"}></i>
          </div>
          <img src={image} alt={name} />
          <div className="img-background"></div>
        </div>
        <div className="info">
          <h4>{name}</h4>
          <p className="title">{job}</p>
          <p className="text">{text}</p>
        </div>
      </div>
    </>
  );
};

export default Review;
