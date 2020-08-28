import React, { useReducer, useEffect } from "react";

//context
import AppContext from "./appContext";
import appReducer from "./appReducer";

//firebase
import firebase from "../firebase";
import "firebase/auth";

const AppState = (props) => {
  const initialState = {
    loggedIn: null,
    userData: null,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { loggedIn } = state;
  useEffect(() => {
    if (!loggedIn) {
      return authCheck();
    }
  }, [loggedIn]);

  const authCheck = () =>
    firebase
      .auth()
      .onAuthStateChanged((user) =>
        user
          ? dispatch({ type: "LOGGED_IN", payload: user })
          : dispatch({ type: "NOT_LOGGED_IN" })
      );

  // useEffect(() => {
  //   return !mostViewed
  //     ? onMostViewed()
  //     : !mostEmailed
  //     ? onMostEmailed()
  //     : !mostSocialMediaShared
  //     ? onMostSocial()
  //     : undefined;
  // }, [mostViewed, mostEmailed, mostSocialMediaShared]);

  return (
    <AppContext.Provider
      value={{
        loggedIn: state.loggedIn,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
