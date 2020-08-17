import types from "./types";

const audioPlayerActions = {
  setSource: url => ({ type: types.setSource, payload: { url } }),
  play: () => ({ type: types.play }),
  pause: () => ({ type: types.pause }),
  toggle: () => ({ type: types.toggle })
};

export default audioPlayerActions;
