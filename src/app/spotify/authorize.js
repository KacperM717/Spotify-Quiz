const clientId = '54863df32b6245b7a58b45f5a80269b1';

const scopes = [
  'playlist-read-private',
  'user-library-read',
  'user-top-read',
  'playlist-modify-public'
];

const spotifyAuthURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
  window.location.origin
)}${
  scopes.length > 0 ? '&scope=' + encodeURIComponent(scopes.join(' ')) : 0
}&response_type=token`;

function hashToObject(hash) {
  var params = hash.substring(1).split('&');
  if (params.length <= 1) return null;
  var hashObject = {};
  params.forEach(el => {
    let elCut = el.split('=');
    hashObject[elCut[0]] = elCut[1];
  });
  return hashObject;
}

function spotifyAuthorize() {
  console.log('Authorizing...');
  const params = hashToObject(window.location.hash);
  if (!params) window.location = spotifyAuthURL;
  var tokenTime = localStorage.getItem('token_time');
  if (!tokenTime) {
    localStorage.setItem(
      'token_time',
      new Date().getTime() + Number(params.expires_in) * 1000
    );
    tokenTime = localStorage.getItem('token_time');
  }
  const expired = new Date().getTime() > tokenTime;
  if (expired) {
    localStorage.removeItem('token_time');
    window.location = spotifyAuthURL;
  }
  return params;
}

function getSpotifyToken() {
  const { access_token: spotifyToken } = spotifyAuthorize();
  return spotifyToken;
}

export {
  hashToObject,
  clientId,
  spotifyAuthURL,
  spotifyAuthorize,
  getSpotifyToken
};
