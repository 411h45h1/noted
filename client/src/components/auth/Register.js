import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const Register = (props) => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  //following code block is for flagging that a user already exists
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    //in large scale production use an err id system
    if (error === "User already exists") {
      // setAlert(error, "danger");
      clearErrors();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = user;

  //this line takes data entered by the user and stores them within state
  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      // setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      //  setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }

    console.log("Register Submit");
  };

  return (
    <div>
      <h1>Account Register</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Name </label>
          <input
            required
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address </label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <div>
          <label htmlFor="password2">Confirm Password </label>
          <input
            required
            type="password2"
            name="password2"
            value={password2}
            onChange={onChange}
            minLength="6"
          />
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
