import types from './types';

const initState = {
  items: [
    /*
      Playlist Object Shape: {
        id: string,
        name: string,
        desc: string,
        image: url,
        spotifyUrl: url,
        tracks: {
          href: url,
          total: number
        }
      }
    */
  ],
  next: null,
  pending: false,
  error: null
};

export default function playlistsReducer(state = initState, action) {
  switch (action.type) {
    case types.FETCH_PLAYLISTS_PENDING:
      return {
        ...state,
        pending: true
      };
    case types.FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        pending: false
      };
    case types.FETCH_PLAYLISTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}
