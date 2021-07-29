import React, { useState, useEffect } from "react";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
const App = () => {
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState("My Name is");
  const [statement, setStatement] = useState("Default User");
  const [contact, setContact] = useState("s");

  const fetchData = async () => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const result = data.results[0];
      const { first, last } = result.name;
      const user = first + " " + last;
      const { age } = result.dob;
      const { email, phone } = result;
      const { large } = result.picture;
      const { street, country } = result.location;
      const { number, name } = street;
      const address = name + " " + number + ", " + country;
      const { password } = result.login;
      const newData = {
        user,
        age,
        email,
        address,
        phone,
        password,
        picture: large,
      };
      setTerm("My Name is");
      setStatement(name);
      setContact(newData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMouse = (e) => {
    setTerm(e.currentTarget.name);
    setStatement(e.currentTarget.value);
  };
  const { user, age, email, address, phone, password, picture } = contact;
  return (
    <div className="container">
      <div className="header">
        <div className="image">
          <img src={picture || defaultImage} alt="person" />
        </div>
      </div>
      <div className="info">
        <h4 className="term">{term}</h4>
        <h2 className="result">{statement}</h2>
        <div className="icon-container">
          <button
            className="icon"
            value={user}
            name={"My name is"}
            onMouseOver={handleMouse}
          >
            <i className="fa fa-user"></i>
          </button>
          <button
            className="icon"
            value={email}
            name={"My email is"}
            onMouseOver={handleMouse}
          >
            <i className="fa fa-envelope-open"></i>
          </button>
          <button
            className="icon"
            value={age}
            name={"My age is"}
            onMouseOver={handleMouse}
          >
            <i className="fa fa-calendar"></i>
          </button>
          <button
            className="icon"
            value={address}
            name={"My address is"}
            onMouseOver={handleMouse}
          >
            <i className="fa fa-map"></i>
          </button>
          <button
            className="icon"
            value={phone}
            name={"My phone is"}
            onMouseOver={handleMouse}
          >
            <i className="fa fa-phone"></i>
          </button>
          <button
            className="icon"
            value={password}
            name={"My password is"}
            onMouseOver={handleMouse}
          >
            <i className="fa fa-lock"></i>
          </button>
        </div>
        <button className="btn" onClick={() => fetchData()}>
          {loading ? "Loading.." : " Random User"}
        </button>
      </div>
    </div>
  );
};

export default App;
