import { combineReducers } from "redux";

//Reducers
import user from "./states/profile/duck/reducer";
import playlists from "./states/playlists/reducer";
import page from "./states/page/reducer";
import gameDialog from "./states/gameDialog/reducer";
import tracks from "./states/tracks/reducer";
import audioPlayer from "./states/audioPlayer/reducer";
import game from "./states/game/reducer";

const rootReducer = combineReducers({
  user,
  playlists,
  page,
  gameDialog,
  tracks,
  audioPlayer,
  game
});

export default rootReducer;
