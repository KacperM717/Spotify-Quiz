import types from "./types";

const initState = {
  currentPlaylistId: null,
  currentPlaylistName: null,
  isOpen: false
};

export default function gameDialog(state = initState, action) {
  switch (action.type) {
    case types.toggle:
      return {
        ...state,
        isOpen: !state.isOpen
      };
    case types.set:
      return {
        ...state,
        currentPlaylistId: action.payload.playlistId,
        currentPlaylistName: action.payload.playlistName,
        isOpen: true
      };
    case types.unset:
      return {
        ...state,
        currentPlaylistId: null,
        currentPlaylistName: null,
        isOpen: false
      };
    default:
      return state;
  }
}
