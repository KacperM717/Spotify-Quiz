import types from "./types";

const gameDialogActions = {
  set: (playlistId, playlistName) => ({
    type: types.set,
    payload: { playlistId, playlistName }
  }),
  unset: () => ({ type: types.unset }),
  toggle: () => ({ type: types.toggle })
};

export default gameDialogActions;
