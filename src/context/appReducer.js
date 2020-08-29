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

    case "LOG_OUT":
      return {
        ...state,
        loggedIn: false,
        userData: null,
        notes: null,
        notesLoaded: false,
      };

    case "LOAD_NOTES":
      return {
        ...state,
        notes: payload,
        notesLoaded: true,
      };

    default:
      return state;
  }
};
