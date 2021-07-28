import React from "react";
const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";
const App = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="image">
          <img src={defaultImage} alt="image" />
        </div>
      </div>
      <div className="info">
        <h4 className="term">My password is</h4>
        <h2 className="result">Verbatim</h2>
        <div className="icon-container">
          <button className="icon">
            <i className="fa fa-user"></i>
          </button>
          <button className="icon">
            <i className="fa fa-envelope-open"></i>
          </button>
          <button className="icon">
            <i className="fa fa-calendar"></i>
          </button>
          <button className="icon">
            <i className="fa fa-map"></i>
          </button>
          <button className="icon">
            <i className="fa fa-phone"></i>
          </button>
          <button className="icon">
            <i className="fa fa-lock"></i>
          </button>
        </div>
        <button className="btn">Random User</button>
      </div>
    </div>
  );
};

export default App;
