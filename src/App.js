import React, { useContext } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { MediaContextProvider } from "./core/media";

import { Segment } from "semantic-ui-react";
import AppContext from "./context/appContext";
import LabelButtons from "./components/app/LabelButtons";

import MainEvent from "./components/MainEvent";
import OnBoard from "./components/OnBoard";

const App = () => {
  const state = useContext(AppContext);
  const { loggedIn } = state;
  const onboardColors = "#E8ECFF";
  const mainColor = "#FDD543";

  return (
    <Router basename="/">
      <MediaContextProvider>
        <div className="App">
          <div className="App-background">
            <Segment
              className="MainCard"
              inverted
              style={{ backgroundColor: loggedIn ? mainColor : onboardColors }}
            >
              {loggedIn && <LabelButtons />}

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
      </MediaContextProvider>
    </Router>
  );
};

export default App;
