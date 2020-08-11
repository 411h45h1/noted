import React from "react";
import "./App.css";

//context
import AuthState from "./context/auth/AuthState";
import AppState from "./context/app/AppState";

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
