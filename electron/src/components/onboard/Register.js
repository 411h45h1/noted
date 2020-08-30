import React, { useState } from "react";
import { Grid, Header, Button, Segment } from "semantic-ui-react";
import { signInUser } from "../../api/auth";
import Input from "../reusable/Input";
import { emailValidator, passwordValidator } from "../../core/utils";

const Register = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const handleSignUp = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
    }

    setLoading(true);

    const response = await signInUser({
      email: email.value,
      password: password.value,
    });

    if (response.error) {
      setError(response.error);
      setLoading(false);
    }
  };

  const clearInputs = () => {
    setEmail({ value: "", error: "" });
    setPassword({ value: "", error: "" });
    setTimeout(() => setError(null), 500);
  };

  if (error && email.value !== "" && password.value !== "") {
    clearInputs();
  }

  return (
    <Segment>
      <Header as="h2" content="Register" />
      <Grid>
        <Grid.Row>
          <Grid.Column>
            {error && <p>{error}</p>}

            <Input
              type="email"
              placeholder="Email"
              value={email.value}
              onChange={(e, { value }) => setEmail({ value: value, error: "" })}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Input
              type="password"
              placeholder="Password"
              value={password.value}
              onChange={(e, { value }) =>
                setPassword({ value: value, error: "" })
              }
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button
              loading={loading}
              mode="contained"
              onClick={() => {
                handleSignUp();
              }}
            >
              Sign Up
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Register;
