import React, { useContext } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import AuthContext from "./context/auth/authContext";

const Core = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <>
      <p
        style={{
          marginTop: 8,
          color: "black",
          fontSize: 20,
        }}
      >
        Welcome Back! {user && user.name}{" "}
      </p>
      <Button>
        <Link
          onClick={onLogout}
          to="/Onboard"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: 20,
          }}
        >
          Logout
        </Link>
      </Button>
    </>
  );

  const guestLinks = (
    <>
      <Button>
        <Link
          to="/Register"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: 20,
          }}
        >
          Register
        </Link>
      </Button>
      <Button>
        <Link
          to="/Login"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: 20,
          }}
        >
          Login
        </Link>
      </Button>
    </>
  );
  return (
    <div className="title">
      <header>{isAuthenticated ? authLinks : guestLinks}</header>
    </div>
  );
};

export default Core;
