import React from "react";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";

const App = () => {
  const { loading } = useGlobalContext();

  if (loading) {
    return (
      <div className="container">
        <h1>Loading...</h1>
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
