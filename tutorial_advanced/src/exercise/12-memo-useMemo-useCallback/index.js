import React, { useState, useEffect, useCallback, useMemo } from "react";

const calcHighestPrice = (data) => {
  return data.reduce((total, item) => {
    const price = item.fields.price / 100;
    if (price >= total) {
      total = price;
    }
    return total;
  }, 0);
};
const Index = () => {
  const url = "https://course-api.com/javascript-store-products";
  const [data, setdata] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);
  const expensive = useMemo(() => calcHighestPrice(data), [data]);
  const fetchData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    if (data) {
      setdata(data);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <div>
      <div className="modal">
        <h1>Count : {count} </h1>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Click Me
        </button>
        <h2>Cart : {cart}</h2>
        <h4>Highest Price : ${expensive}</h4>
      </div>

      <BigList data={data} addToCart={addToCart} />
    </div>
  );
};

export default Index;

const BigList = React.memo(({ data, addToCart }) => {
  return (
    <div>
      {data.map((item) => {
        const { id, fields } = item;
        return <Single key={id} fields={fields} addToCart={addToCart} />;
      })}
    </div>
  );
});

export const Single = ({ fields, addToCart }) => {
  const { colors, company, image, name, price } = fields;
  const colorCode = colors[0];

  return (
    <div
      className="modal"
      style={{ backgroundColor: colorCode, color: "white" }}
    >
      <div className="image">
        <img src={image[0].url} alt={company} />
      </div>
      <div className="info">
        <h4 className="name">{name}</h4>
        <p className="price">Price : $ {price / 100}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};
