export default function reducer(state, { type, payload }) {
  switch (type) {
    // Load
    case "GET_INDEX":
      return {
        ...state,
        stateItem: payload,
      };

    default:
      return state;
  }
}
