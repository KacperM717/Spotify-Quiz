import React from "react";

import { useSelector, useDispatch } from "react-redux";

//Material UI
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
//Custom
import audioPlayerActions from "../states/audioPlayer/actions";

export default function TrackItem({ track }) {
  const dispatch = useDispatch();

  const audioPlayerState = useSelector(state => state.audioPlayer);

  const isDisabled = track.previewUrl === null;

  function handleClick() {
    //Is this song currently chosen one
    if (track.previewUrl === audioPlayerState.source) {
      //Toggle play
      dispatch(audioPlayerActions.setSource(""));
    } else {
      //Set this song and play it
      dispatch(audioPlayerActions.setSource(track.previewUrl));
      dispatch(audioPlayerActions.play());
    }
  }

  return (
    <ListItem divider button disabled={isDisabled} onClick={handleClick}>
      <ListItemText
        primary={track.name}
        secondary={track.artists.map(artist => artist.name).join(" - ")}
      />
    </ListItem>
  );
}
