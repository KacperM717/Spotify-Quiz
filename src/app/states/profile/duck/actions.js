import userTypes from './types';

const userActions = {
  fetchPending: () => ({ type: userTypes.fetchPending }),
  fetchSuccess: payload => ({ type: userTypes.fetchSuccess, payload }),
  fetchFailure: error => ({ type: userTypes.fetchFailure, error })
};

export default userActions;
