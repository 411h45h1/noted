import React, { useReducer, useEffect } from "react";

//context
import AppContext from "./appContext";
import appReducer from "./appReducer";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

import { logoutUser } from "../api/auth";
import { getNotes } from "../api/notes";
import moment from "moment";

const AppState = (props) => {
  const initialState = {
    loggedIn: null,
    userData: null,
    notes: null,
    notesLoaded: false,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { loggedIn, userData, notes, notesLoaded } = state;

  useEffect(() => {
    authCheck();

    if (!notesLoaded && loggedIn) {
      loadNotes();
    }
  }, [loggedIn, notesLoaded]);

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

  const loadNotes = () =>
    getNotes(userData.uid).then((res) =>
      dispatch({ type: "LOAD_NOTES", payload: res })
    );

  return (
    <AppContext.Provider
      value={{
        userData: state.userData,
        loggedIn: state.loggedIn,
        notes: state.notes,
        notesLoaded: state.notesLoaded,
        onLogout,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
