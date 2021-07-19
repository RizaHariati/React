import React from "react";
// import PropTypes from "prop-types";
import defaultImage from "../../assets/thanksgiving-3811492_1920.jpg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <div className="item">
      <div className="image">
        <img src={url || defaultImage} alt={name || "default"} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <p className={price}>$ {price || 3.99}</p>
      </div>
    </div>
  );
};
// Product.propTypes = {
//   image:PropTypes.object.isRequired,,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

// Product.defaultProps = {
//   image: defaultImage,
//   name: "default name",
//   price: 9999,
// };

export default Product;
