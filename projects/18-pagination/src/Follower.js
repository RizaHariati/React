import React from "react";
import { useFetch } from "./useFetch";

const Follower = ({ start, end }) => {
  const { loading, followers } = useFetch();

  if (loading) {
    return (
      <div style={{ textAlign: "center", height: "250px" }}>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (!followers) {
    return (
      <div style={{ textAlign: "center", height: "250px" }}>
        <h1>Data isn't found</h1>
      </div>
    );
  }
  return (
    <div className="followers">
      {followers
        .map((follower) => {
          const { id, name, img, url } = follower;
          return (
            <div key={id} className="follower">
              <div className="image">
                <img src={img} alt={name} />
              </div>
              <h4>{name}</h4>
              <a href={url} className="btn">
                view profile
              </a>
            </div>
          );
        })
        .filter((follower, index) => index >= start && index < end)}
    </div>
  );
};

export default Follower;
