import React, { useContext } from "react";
import { AppContext } from "./context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
const App = () => {
  const { loading } = useContext(AppContext);

  if (loading) {
    return (
      <div className="container">
        <h1>Loading....</h1>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Navbar />
        <CartContainer />
      </div>
    );
  }
};

export default App;
