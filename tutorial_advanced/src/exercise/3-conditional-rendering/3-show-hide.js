import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <h2>{show && <Item />}</h2>
      <button className="btn" onClick={() => setShow(!show)}>
        button
      </button>
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    return setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize());

    return () => {
      window.removeEventListener("resize", checkSize());
    };
  }, []);

  return (
    <div>
      <h2>Size : {size}px</h2>
    </div>
  );
};
export default ShowHide;
