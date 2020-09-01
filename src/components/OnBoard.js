import React, { useState } from "react";
import { Grid, Card, Button } from "semantic-ui-react";
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
      <Grid.Row>
        <Grid.Column width={16}>
          <Button.Group floated="right">
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
          </Button.Group>
        </Grid.Column>
        <p id="title">Noted</p>

        <Grid.Column width={16}>
          {!toggleLogin && !toggleRegister && (
            <Grid centered>
              <Card
                link
                href="https://github.com/AhmedAlihashi/noted"
                target="blank_"
                header="Welcome Noted!"
                meta="By Ahmed Ali"
                description="Powered by React, Google Firebase & Semantic Ui"
                style={{ textAlign: "center", fontsize: "rem" }}
              />
            </Grid>
          )}
          {toggleRegister && <Register />}
          {toggleLogin && <Login />}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default OnBoard;
