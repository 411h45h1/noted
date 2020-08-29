import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import "./App.css";
import { Segment } from "semantic-ui-react";
import AppContext from "./context/appContext";

import MainEvent from "./components/MainEvent";
import OnBoard from "./components/OnBoard";

const App = () => {
  const state = useContext(AppContext);
  const { loggedIn } = state;
  const onboardColors = "#E8ECFF";
  const mainColor = "#FDD543";

  return (
    <Router>
      <div className="App">
        <div className="App-background">
          <Segment
            className="MainCard"
            inverted
            style={{ backgroundColor: loggedIn ? mainColor : onboardColors }}
          >
            <Switch>
              <Route exact path="/">
                {loggedIn ? <MainEvent /> : <Redirect to="/login" />}
              </Route>
              <Route path="/login" component={OnBoard}>
                {loggedIn ? <Redirect to="/" /> : <OnBoard />}
              </Route>
            </Switch>
          </Segment>
        </div>
      </div>
    </Router>
  );
};

export default App;
