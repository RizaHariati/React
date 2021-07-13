import React, { useContext } from "react";
import { TabContext } from "./App";
import Detail from "./Detail";

const Description = () => {
  const { companies, show } = useContext(TabContext);
  const { company, dates, duties, title } = companies;
  return (
    <div className="info">
      <h3 className="title">{title}</h3>
      <h4 className="name">{company}</h4>
      <p className="date">{dates}</p>
      {show && <Detail duties={duties} />}
    </div>
  );
};

export default Description;
