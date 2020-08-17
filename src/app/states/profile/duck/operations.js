import spotifyFetch, { host } from '../../../spotify/fetcher';

import actions from './actions';

//Fetch User
export const getUser = () => async dispatch => {
  dispatch(actions.fetchPending());

  const res = await spotifyFetch(host + 'me');

  const payload = {
    id: res.data.id,
    name: res.data.display_name,
    image:
      res.data.images.length > 0
        ? res.data.images[res.data.images.length - 1].url
        : null,
    spotifyUrl: res.data.external_urls.spotify
  };

  dispatch(actions.fetchSuccess(payload));
  //No error handling for now
};
