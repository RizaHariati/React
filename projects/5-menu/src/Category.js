import React, { useContext } from "react";

import { MenuContext } from "./App";

const Category = () => {
  const { category, filterItems } = useContext(MenuContext);
  return (
    <>
      <div className="nav-links">
        {category.map((item, index) => {
          return (
            <button
              className="btn"
              type="button"
              onClick={() => {
                filterItems(item.toLowerCase());
              }}
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Category;
