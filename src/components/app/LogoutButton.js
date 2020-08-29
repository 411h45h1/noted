import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import AppContext from "../../context/appContext";

const LogoutButton = () => {
  const state = useContext(AppContext);
  const { onLogout } = state;
  return (
    <Button compact color="black" onClick={() => onLogout()}>
      Log Out
    </Button>
  );
};

export default LogoutButton;
