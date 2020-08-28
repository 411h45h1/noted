import React from "react";
import AppState from "./context/AppState";
import "./App.css";

const App = () => (
  <AppState>
    <div className="App">
      <header className="App-header"></header>
    </div>
  </AppState>
);

export default App;
