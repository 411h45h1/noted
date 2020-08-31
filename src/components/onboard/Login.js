import React, { useState } from "react";
import { Grid, Header, Button, Segment } from "semantic-ui-react";
import { emailValidator, passwordValidator } from "../../core/utils";
import { loginUser } from "../../api/auth";
import Input from "../reusable/Input";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [setError] = useState("");

  let history = useHistory();

  const handleLogin = async () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
    }

    setLoading(true);

    const response = await loginUser({
      email: email.value,
      password: password.value,
    });

    if (response.error) {
      setError(response.error);
      setLoading(false);
    }
    history.push("/");
  };
  return (
    <Grid centered>
      <Segment style={{ textAlign: "center" }}>
        <Header as="h2" content="Login" />
        <Grid.Column>
          <Input
            type="email"
            placeholder="Email"
            onChange={(e, { value }) => setEmail({ value: value, error: "" })}
          />
        </Grid.Column>
        <Grid.Column>
          <Input
            type="password"
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
            onClick={() => handleLogin()}
            style={{ marginTop: 10 }}
            color="black"
          >
            Login
          </Button>
        </Grid.Column>
      </Segment>
    </Grid>
  );
};

export default Login;
