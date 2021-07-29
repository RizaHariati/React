import { useState, useEffect } from "react";

export const useUtils = (value) => {
  const [end, setEnd] = useState(8);
  const [start, setStart] = useState(0);

  useEffect(() => {
    setEnd(value * 8);
    setStart(value * 8 - 8);
  }, [value]);
  return { start, end };
};
