import types from "./types";

const initState = {
  items: [],
  pending: false,
  error: null
};

export default function tracksReducer(state = initState, action) {
  switch (action.type) {
    case types.FETCH_PENDING:
      return {
        ...state,
        pending: true
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        items: action.payload,
        pending: false
      };
    case types.FETCH_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
