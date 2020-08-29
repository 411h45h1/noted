import React, { useReducer, useCallback, useEffect } from "react";

//context
import AppContext from "./appContext";
import appReducer from "./appReducer";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

import { logoutUser } from "../api/auth";
import { getNotes } from "../api/notes";

const AppState = (props) => {
  const initialState = {
    loggedIn: null,
    userData: null,
    notes: null,
    notesLoaded: false,
  };
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { loggedIn, userData, notesLoaded } = state;

  const loadNotes = useCallback(() => {
    getNotes(userData.uid).then((res) =>
      dispatch({ type: "LOAD_NOTES", payload: res })
    );
  }, [userData.uid]);

  useEffect(() => {
    authCheck();

    if (!notesLoaded && loggedIn) {
      loadNotes();
    }
  }, [loggedIn, loadNotes, notesLoaded]);

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

  const onLogout = () => {
    logoutUser();
    dispatch({ type: "LOG_OUT" });
  };

  return (
    <AppContext.Provider
      value={{
        loggedIn: state.loggedIn,
        userData: state.userData,
        notes: state.notes,
        notesLoaded: state.notesLoaded,
        loadNotes,
        onLogout,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
