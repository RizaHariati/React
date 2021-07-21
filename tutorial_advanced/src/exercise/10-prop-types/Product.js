import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../assets/thanksgiving-3811492_1920.jpg";

const Product = ({ image, name, price }) => {
  const img = image && image.url;
  return (
    <div className="item">
      <div className="image">
        <img src={img || defaultImage} alt={name} />
      </div>

      <div className="info">
        <h4 className="title">{name}</h4>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  img: defaultImage,
  name: "default-name",
  price: 14.98,
};

export default Product;
