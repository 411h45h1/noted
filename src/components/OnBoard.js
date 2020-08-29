import React, { useState } from "react";
import { Grid, Button } from "semantic-ui-react";
import Login from "./onboard/Login";
import Register from "./onboard/Register";

const OnBoard = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleRegister, setToggleRegister] = useState(false);

  const handleLogin = () => {
    if (toggleRegister) {
      setToggleRegister(false);
    }
    return setToggleLogin(!toggleLogin);
  };

  const handleRegister = () => {
    if (toggleLogin) {
      setToggleLogin(false);
    }
    return setToggleRegister(!toggleRegister);
  };

  return (
    <Grid>
      <p id="title">Noted</p>
      <Grid.Column floated="right" width={4}>
        <Button
          toggle
          color="black"
          active={toggleLogin}
          content="Login"
          onClick={() => handleLogin()}
        />
        <Button
          toggle
          color="black"
          active={toggleRegister}
          content="Register"
          onClick={() => handleRegister()}
        />
      </Grid.Column>
      <Grid.Row>
        <Grid.Column width={16}>
          {toggleRegister && <Register />}
          {toggleLogin && <Login />}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default OnBoard;
