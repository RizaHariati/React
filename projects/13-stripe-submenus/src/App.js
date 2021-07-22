import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Sidebar />
    </div>
  );
};

export default App;
