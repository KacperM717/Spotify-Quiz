import spotifyFetch, { host } from "../../spotify/fetcher";

import actions from "./actions";

function mapTracksToState(tracks) {
  return tracks.map(({ track }) => ({
    id: track.id,
    name: track.name,
    artists: track.artists.map(artist => ({
      id: artist.id,
      name: artist.name
    })),
    image: track.album.images.length > 0 ? track.album.images[0].url : null,
    spotifyUrl: track.external_urls.spotify,
    previewUrl: track.preview_url
  }));
}

//Get Playlist items [tracks]
export const getTracks = playlistId => async dispatch => {
  dispatch(actions.fetchPending());

  const res = await spotifyFetch(
    host + `playlists/${playlistId}/tracks?limit=100`
  );

  const payload = mapTracksToState(res.data.items);

  console.log(res);

  dispatch(actions.fetchSuccess(payload));
};

export default {
  getTracks
};
