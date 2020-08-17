import types from "./types";

const gameActions = {
  open: () => ({ type: types.open }),
  close: () => ({ type: types.close }),
  start: tracks => ({ type: types.start, payload: { tracks } }),
  stop: () => ({ type: types.stop }),
  update: points => ({ type: types.update, payload: { points } })
};

export default gameActions;
