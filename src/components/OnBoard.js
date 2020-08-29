import React, { useState } from "react";
import { Grid, Header, Button } from "semantic-ui-react";
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
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column floated="left" width={5}>
            <Header as="h2" content="Noted" />
          </Grid.Column>
          <Grid.Column floated="right" width={11}>
            <Button
              toggle
              active={toggleLogin}
              content="Login"
              onClick={() => handleLogin()}
            />
            <Button
              toggle
              active={toggleRegister}
              content="Register"
              onClick={() => handleRegister()}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            {toggleRegister && <Register />}
            {toggleLogin && <Login />}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default OnBoard;
