import spotifyFetch, { host } from '../../spotify/fetcher';

import actions from './actions';

function mapPlaylistsToState(playlists) {
  return playlists.map(playlist => ({
    id: playlist.id,
    name: playlist.name,
    desc: playlist.description,
    image: playlist.images.length > 0 ? playlist.images[0].url : null,
    spotifyUrl: playlist.external_urls.spotify,
    tracks: playlist.tracks
  }));
}

//Get Searched Playlists
export const getSearchedPlaylists = queryString => async dispatch => {
  dispatch(actions.fetchPending());

  const res = await spotifyFetch(
    host + `search?q=${encodeURIComponent(queryString)}&type=playlist&limit=30`
  );

  const payload = mapPlaylistsToState(res.data.playlists.items);

  dispatch(actions.fetchSuccess(payload));
};

//Get Top Playlists
export const getTopPlaylists = () => async dispatch => {
  dispatch(actions.fetchPending());

  const res = await spotifyFetch(host + `browse/featured-playlists`);

  const payload = mapPlaylistsToState(res.data.playlists.items);

  console.log(payload);

  dispatch(actions.fetchSuccess(payload));
};

//Get User Playlists
export const getUserPlaylists = () => async dispatch => {
  dispatch(actions.fetchPending());

  const res = await spotifyFetch(host + `me/playlists`);

  const payload = mapPlaylistsToState(res.data.items);

  dispatch(actions.fetchSuccess(payload));
};

export default {
  getSearchedPlaylists,
  getTopPlaylists,
  getUserPlaylists
};
