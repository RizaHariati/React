import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleMovie from "./SingleMovie";
import Home from "./Home";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/singlemovie/:id">
          <SingleMovie />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
