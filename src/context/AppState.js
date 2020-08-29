import React, { useReducer, useEffect } from "react";

//context
import AppContext from "./appContext";
import appReducer from "./appReducer";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

import { logoutUser } from "../api/auth";

const AppState = (props) => {
  const initialState = {
    loggedIn: null,
    userData: null,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { loggedIn } = state;
  useEffect(() => {
    authCheck();
  }, [loggedIn]);

  const authCheck = () =>
    firebase.auth().onAuthStateChanged((user) =>
      user
        ? dispatch({
            type: "LOGGED_IN",
            payload: {
              uid: user.uid,
              username: firebase.auth().currentUser.displayName,
            },
          })
        : dispatch({ type: "NOT_LOGGED_IN" })
    );

  const onLogout = () => logoutUser() && dispatch({ type: "NOT_LOGGED_IN" });

  return (
    <AppContext.Provider
      value={{
        userData: state.userData,
        loggedIn: state.loggedIn,
        onLogout,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
