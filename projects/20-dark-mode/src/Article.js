import moment from "moment";
import React from "react";

const Article = ({ title, date, length, snippet }) => {
  return (
    <div className="article">
      <h2 className="title">{title}</h2>
      <p className="date">
        {moment(date).format("ddd Do, YYY")}, <span>{length} min read</span>
      </p>
      <p className="text">{snippet}</p>
    </div>
  );
};

export default Article;
