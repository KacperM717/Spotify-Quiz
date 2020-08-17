import types from "./types";

const tracksActions = {
  fetchPending: () => ({ type: types.FETCH_PENDING }),
  fetchSuccess: payload => ({ type: types.FETCH_SUCCESS, payload }),
  fetchFailure: error => ({ type: types.FETCH_FAILURE, error })
};

export default tracksActions;
