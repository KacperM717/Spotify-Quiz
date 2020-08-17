import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

//Spinner
import Spinner from "react-spinner-children";

import { useSelector, useDispatch } from "react-redux";

//Custom
import gameDialogActions from "../states/gameDialog/actions";
import tracksOps from "../states/tracks/operations";
import gameActions from "../states/game/actions";

import Game from "./Game";
import TrackItem from "./TrackItem";
import AudioPlayer from "./AudioPlayerComponent";
import audioPlayerActions from "../states/audioPlayer/actions";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GameDialog() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { currentPlaylistId, currentPlaylistName } = useSelector(
    state => state.gameDialog
  );

  const { isGameOpen } = useSelector(state => state.game);

  useEffect(() => {
    dispatch(tracksOps.getTracks(currentPlaylistId));
    return () => {};
  }, [currentPlaylistId, dispatch]);

  const { items: tracks, pending: tracksPending } = useSelector(
    state => state.tracks
  );

  // const [playlistData] = useSelector(state =>
  //   state.playlists.items.filter(playlist => playlist.id === playlistId)
  // );

  //const

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  function handleGameStart() {
    dispatch(audioPlayerActions.pause());
    dispatch(audioPlayerActions.setSource(""));

    dispatch(gameActions.open());
    dispatch(gameActions.start(tracks));
  }

  const handleClose = () => {
    dispatch(gameDialogActions.unset());
    dispatch(audioPlayerActions.pause());
    dispatch(audioPlayerActions.setSource(""));
  };

  console.log({ isGameOpen });

  return (
    <div>
      <Dialog
        fullScreen
        open={true}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AudioPlayer />
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {currentPlaylistName}
            </Typography>
            <Button autoFocus color="inherit" onClick={handleGameStart}>
              Play
            </Button>
          </Toolbar>
        </AppBar>
        <Spinner loaded={!tracksPending}>
          <List>
            {tracks.map(track => (
              <div key={track.id}>
                <TrackItem track={track} />
                <Divider />
              </div>
            ))}
          </List>
        </Spinner>
      </Dialog>
      {isGameOpen && <Game />}
    </div>
  );
}
