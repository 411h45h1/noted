import React from "react";
import "./App.css";

//context
import { AuthState, AppState } from "./context";

const App = () => {
  return (
    <AuthState>
      <AppState>
        <div className="App">
          <header className="App-header">
            <p>App</p>
          </header>
        </div>
      </AppState>
    </AuthState>
  );
};

export default App;
