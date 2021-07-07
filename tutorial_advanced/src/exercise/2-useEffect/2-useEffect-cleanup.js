import React, { useState, useEffect } from "react";

const useEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log(window.innerWidth);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <>
      <h2>screen width {size}px</h2>
    </>
  );
};

export default useEffectCleanup;
