import React from "react";
import { useFetch } from "./2-useFetch";

const FetchExample = () => {
  const url = "https://course-api.com/javascript-store-products";
  const { loading, products } = useFetch(url);

  console.log(products);
  return (
    <div>
      <h1>{loading ? "Loading..." : "Data"}</h1>
    </div>
  );
};

export default FetchExample;
