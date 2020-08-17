import types from './types';

const playlistsActions = {
  fetchPending: () => ({ type: types.FETCH_PLAYLISTS_PENDING }),
  fetchSuccess: payload => ({ type: types.FETCH_PLAYLISTS_SUCCESS, payload }),
  fetchFailure: error => ({ type: types.FETCH_PLAYLISTS_FAILURE, error })
};

export default playlistsActions;
