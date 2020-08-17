import types from './types';

const initState = {
  data: {
    id: null,
    name: null,
    image: null,
    spotifyUrl: null
  },
  pending: false,
  error: null
};

function userReducer(state = initState, action) {
  switch (action.type) {
    case types.fetchPending:
      return {
        ...state,
        pending: true
      };
    case types.fetchSuccess:
      return {
        data: action.payload,
        pending: false,
        error: null
      };
    case types.fetchFailure:
      return {
        ...initState,
        error: action.error
      };
    default:
      return state;
  }
}

export default userReducer;
