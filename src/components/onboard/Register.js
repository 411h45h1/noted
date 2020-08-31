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

  const [setError] = useState("");

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
    <Grid centered>
      <Segment style={{ textAlign: "center" }}>
        <Header as="h2" content="Register" />
        <Grid.Column>
          <Input
            type="text"
            placeholder="Name"
            onChange={(e, { value }) => setName({ value: value, error: "" })}
          />
        </Grid.Column>
        <Grid.Column>
          <Input
            type="text"
            placeholder="Email"
            onChange={(e, { value }) => setEmail({ value: value, error: "" })}
            style={{ marginTop: 10 }}
          />
        </Grid.Column>

        <Grid.Column>
          <Input
            type="text"
            placeholder="Password"
            onChange={(e, { value }) =>
              setPassword({ value: value, error: "" })
            }
            style={{ marginTop: 10 }}
          />
        </Grid.Column>
        <Grid.Column>
          <Button
            loading={loading}
            mode="contained"
            onClick={() => handleSignUp()}
            style={{ marginTop: 10 }}
            color="black"
          >
            Sign Up
          </Button>
        </Grid.Column>
      </Segment>
    </Grid>
  );
};

export default Register;
