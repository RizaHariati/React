import React from "react";
import { useGlobalContext } from "./context";
import defaultImage from "./g0R9.gif";
const Stories = () => {
  const { hits, noData, loading, removeItem } = useGlobalContext();

  if (loading) {
    return (
      <div className="stories-container">
        <div className="image">
          <img src={defaultImage} alt="loading" />
        </div>
      </div>
    );
  }
  if ((!loading && noData) || hits.length === 0) {
    return (
      <div className="stories-container">
        <h1>Empty Value</h1>
      </div>
    );
  }
  return (
    <div className="stories-container">
      <div className="stories">
        {hits.map((hit) => {
          const { objectID: id, title, url, num_comments, points } = hit;
          return (
            <div key={id} className="story">
              <h4 className="title">{title}</h4>
              <p className="point">
                {points} points by dowewll | {num_comments} comments
              </p>
              <div className="action-container">
                <a href={url}>
                  <button className="text-btn read-more">Read More</button>
                </a>
                <button
                  className="text-btn remove"
                  onClick={() => removeItem(id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
