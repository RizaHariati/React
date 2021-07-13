import React, { useContext } from "react";
import { TabContext } from "./App";
const Menu = () => {
  const { people, findCompany } = useContext(TabContext);
  return (
    <>
      <div className="btn-container">
        {people.map((person) => {
          const { company, id } = person;
          return (
            <button
              key={id}
              className="line-btn"
              onClick={() => findCompany(id)}
            >
              {company}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
