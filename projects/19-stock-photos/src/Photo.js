import React from "react";
const Photo = (item) => {
  const { id, likes, urls } = item;
  const { profile_image, social, first_name: name } = item.user;
  const { regular: image } = urls;
  const { small: profile } = profile_image;
  const { portfolio_url: url } = social;
  return (
    <div className="image">
      <img src={image} alt="thepicture" />
      <div className="info">
        <div className="text-info">
          <h4>{name}</h4>
          <p>{likes}</p>
        </div>
        <div className="image-info">
          <a href={url}>
            <img src={profile} alt={name} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Photo;
