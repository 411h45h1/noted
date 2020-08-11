import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;
  //following code block is for flagging invalid credentials
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    //in large scale production use an err id system
    if (error === "Invalid Credentials") {
      // setAlert(error, "danger");
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  //this line takes data entered by the user and stores them within state
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      // setAlert("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div>
      <h1>Account Login</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password </label>
          <input
            type="current-password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
