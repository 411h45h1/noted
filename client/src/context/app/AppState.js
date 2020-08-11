import React, { useReducer } from "react";
import appContext from "./appContext";
import appReducer from "./appReducer";

const AppState = (props) => {
  const initialState = {};
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <appContext.Provider value={{}}>{props.children}</appContext.Provider>;
};
export default AppState;
