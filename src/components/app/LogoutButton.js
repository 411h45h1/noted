import React, { useContext } from "react";
import { Label } from "semantic-ui-react";
import AppContext from "../../context/appContext";

const LogoutButton = () => {
  const state = useContext(AppContext);
  const { onLogout } = state;
  return (
    <Label
      as="a"
      attached="top right"
      content="Log Out"
      color="black"
      onClick={() => onLogout()}
    />
  );
};

export default LogoutButton;
