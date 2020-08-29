import React, { useContext } from "react";
import { Label } from "semantic-ui-react";
import AppContext from "../../context/appContext";

const LabelButtons = () => {
  const state = useContext(AppContext);
  const { onLogout } = state;
  return (
    <>
      <Label
        as="a"
        color="black"
        attached="top right"
        content="Log Out"
        onClick={() => onLogout()}
      />
      <Label
        as="a"
        color="black"
        attached="bottom left"
        content="Click here for the repository"
        href="https://github.com/AhmedAlihashi/noted"
        target="_blank"
        rel="noopener noreferrer"
      />
    </>
  );
};

export default LabelButtons;
