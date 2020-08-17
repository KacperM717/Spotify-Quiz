import types from "./types";

const initState = {
  isPlaying: false,
  source: null
};

export default function audioPlayerReducer(state = initState, action) {
  switch (action.type) {
    case types.setSource:
      return {
        ...state,
        source: action.payload.url
      };
    case types.play:
      return {
        ...state,
        isPlaying: true
      };
    case types.pause:
      return {
        ...state,
        isPlaying: false
      };
    case types.toggle:
      return {
        ...state,
        isPlaying: !state.isPlaying
      };
    default:
      return state;
  }
}
