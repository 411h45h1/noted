import React, { useReducer, useEffect } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";

const AppState = (props) => {
  const initialState = {};
  const [state, dispatch] = useReducer(appReducer, initialState);
  // const {} = state;

  // useEffect(() => {
  //   return !mostViewed
  //     ? onMostViewed()
  //     : !mostEmailed
  //     ? onMostEmailed()
  //     : !mostSocialMediaShared
  //     ? onMostSocial()
  //     : undefined;
  // }, [mostViewed, mostEmailed, mostSocialMediaShared]);

  return <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>;
};
export default AppState;
