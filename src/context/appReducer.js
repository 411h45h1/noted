export default (state, { type, payload }) => {
  switch (type) {
    case "":
      return {
        ...state,
        state: payload,
      };

    default:
      return state;
  }
};
