import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router class="container">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/singlecocktail/:id">
          <SingleCocktail />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
