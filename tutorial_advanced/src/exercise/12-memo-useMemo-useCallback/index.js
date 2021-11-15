import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
import useFetch from "../9-custom-hooks/2-useFetch";
const url = "https://course-api.com/javascript-store-products";

const mostExpensive = (data) => {
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price > total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const memoExpensive = useMemo(() => {
    return mostExpensive(products);
  }, [products]);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  return (
    <div className="modal ">
      <div className="header flex">
        <h1>count : {count}</h1>
        <h1>cart : {cart}</h1>
        <h3>most expensive collection : ${memoExpensive} </h3>
        <button className="btn" onClick={() => setCount(count + 1)}>
          count
        </button>
      </div>
      <BigData products={products} addToCart={addToCart} />
    </div>
  );
};

export default Index;

const BigData = memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("this is the big data");
  });
  return (
    <div>
      {products.map((product) => {
        return (
          <SingleProduct key={product.id} {...product} addToCart={addToCart} />
        );
      })}
    </div>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  const { image, name, company } = fields;
  useEffect(() => {
    console.count("single data ");
  });
  return (
    <div className="flex">
      <h3>
        {name} <span>by {company}</span>{" "}
      </h3>
      <img src={image[0].url} alt={company} className="image" />
      <button className="btn" onClick={addToCart}>
        add to cart
      </button>
    </div>
  );
};
