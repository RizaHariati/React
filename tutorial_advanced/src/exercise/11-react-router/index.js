import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { data } from "../../data";

import Home from "./Home";
import About from "./About";
import People from "./People";
import Navbar from "./Navbar";
import Error from "./Error";
import Person from "./Person";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People data={data} />
        </Route>
        <Route path="/person/:id">
          <Person data={data} />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
