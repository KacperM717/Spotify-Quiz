import types from "./types";

const initState = {
  isGameOpen: false,
  isGamePlayed: false,
  qTracks: [],
  allTracks: [],
  currentTrack: 0,
  score: 0
};

function shuffleArray(array) {
  const res = new Array(array.length);
  for (var i = array.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    res[i] = array[j];
    array[j] = array[i];
  }
  return res;
}

export default function gameReducer(state = initState, action) {
  switch (action.type) {
    case types.open:
      return {
        ...state,
        isGameOpen: true
      };
    case types.close:
      return {
        ...state,
        isGameOpen: false
      };
    case types.start:
      return {
        ...state,
        isGamePlayed: true,
        qTracks: shuffleArray(
          action.payload.tracks.filter(track => track.previewUrl !== null)
        ),
        allTracks: action.payload.tracks,
        currentTrack: 0,
        score: 0
      };
    case types.stop:
      return {
        ...state,
        isGamePlayed: false
      };
    case types.update:
      return {
        ...state,
        currentTrack: state.currentTrack + 1,
        score: state.score + action.payload.points
      };
    default:
      return state;
  }
}
