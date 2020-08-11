import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
//context
import { AuthState, AppState } from "./context";

import { Onboard, Notes, Login, Register } from "./components";
import Core from "./Core";

const App = () => {
  return (
    <AuthState>
      <AppState>
        <Router>
          <>
            <Core />

            <Route Path="/" component={Onboard} />
            <Route path="/Notes" component={Notes} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
          </>
        </Router>
      </AppState>
    </AuthState>
  );
};

export default App;
