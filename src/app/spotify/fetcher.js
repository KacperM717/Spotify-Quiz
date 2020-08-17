import axios from 'axios';
import { getSpotifyToken } from './authorize';

export const host = 'https://api.spotify.com/v1/';

async function spotifyFetch(url) {
  const token = getSpotifyToken();
  const res = await axios(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res;
}

export default spotifyFetch;
