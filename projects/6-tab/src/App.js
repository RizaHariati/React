import React, { useState, useEffect } from "react";
import Description from "./Description";
import Menu from "./Menu";
const url = "https://course-api.com/react-tabs-project";
const TabContext = React.createContext();

const App = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState("");
  const [show, setShow] = useState(false);
  const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setPeople(data);
    setCompanies(data[0]);
    setLoading(true);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const findCompany = (id) => {
    const newCompany = people.find((person) => person.id === id);
    return setCompanies(newCompany);
  };

  if (!loading) {
    return (
      <div className="container">
        <h2 style={{ textAlign: "center", margin: "50px auto" }}>Loading...</h2>
      </div>
    );
  } else {
    return (
      <TabContext.Provider value={{ people, findCompany, companies, show }}>
        <div className="container">
          <header>
            <h1>Experience</h1>
            <div className="line"></div>
          </header>
          <div className="main">
            <Menu />
            <Description />
          </div>
          <button className="btn" onClick={() => setShow(!show)}>
            {show ? "Show Less" : "Read More"}
          </button>
        </div>
      </TabContext.Provider>
    );
  }
};
export { TabContext };
export default App;
