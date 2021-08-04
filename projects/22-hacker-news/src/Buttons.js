import React from "react";
import { useGlobalContext } from "./context";
const Buttons = () => {
  const { page, nbPages, togglePage } = useGlobalContext();
  return (
    <div className="btn-container">
      <button className="btn" onClick={() => togglePage("decrease")}>
        prev
      </button>
      <h4>
        {page + 1} of {nbPages}
      </h4>
      <button className="btn" onClick={() => togglePage("increase")}>
        next
      </button>
    </div>
  );
};

export default Buttons;
