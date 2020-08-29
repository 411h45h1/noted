import React, { useState } from "react";
import { Grid, Header, Button, Segment } from "semantic-ui-react";
import { signInUser } from "../../api/auth";
import Input from "../reusable/Input";
import {
  nameValidator,
  emailValidator,
  passwordValidator,
} from "../../core/utils";

const Register = () => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    if (loading) return;

    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const response = await signInUser({
      name: name.value,
      email: email.value,
      password: password.value,
    });

    if (response.error) {
      setError(response.error);
      setLoading(false);
    }
  };

  return (
    <Segment>
      <Header as="h2" content="Register" />
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Input
              type="text"
              placeholder="Name"
              onChange={(e, { value }) => setName({ value: value, error: "" })}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Input
              type="text"
              placeholder="Email"
              onChange={(e, { value }) => setEmail({ value: value, error: "" })}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Input
              type="text"
              placeholder="Password"
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
              onClick={() => handleSignUp()}
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
