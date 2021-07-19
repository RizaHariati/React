import React from "react";
import Product from "./Product";
import { useFetch } from "../9-custom-hooks/2-useFetch";

const Index = () => {
  const url = "https://course-api.com/react-prop-types-example";
  const { products } = useFetch(url);
  return (
    <>
      <h2>Products</h2>
      <section>
        {products.map((product) => {
          const { id } = product;
          return <Product key={id} {...product} />;
        })}
      </section>
    </>
  );
};

export default Index;
