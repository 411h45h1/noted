export default (state, { type, payload }) => {
  switch (type) {
    case "LOGGED_IN":
      return {
        ...state,
        loggedIn: true,
        userData: payload,
      };

    case "NOT_LOGGED_IN":
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
};
