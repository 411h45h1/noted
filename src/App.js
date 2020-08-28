import React, { useContext } from "react";
import "./App.css";
import { Segment } from "semantic-ui-react";
import AppContext from "./context/appContext";

import MainEvent from "./components/MainEvent";
import OnBoard from "./components/OnBoard";

const App = () => {
  const state = useContext(AppContext);
  const { loggedIn } = state;
  console.log(state);

  return (
    <div className="App">
      <div className="App-background">
        <Segment className="MainCard">
          {loggedIn ? <MainEvent /> : <OnBoard />}
        </Segment>
      </div>
    </div>
  );
};

export default App;
