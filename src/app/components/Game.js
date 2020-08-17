import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

//Custom
import gameActions from "../states/game/actions";

import Question from "./Question";

function shuffleArray(array) {
  const res = new Array(array.length);
  for (var i = array.length - 1; i >= 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    res[i] = array[j];
    array[j] = array[i];
  }
  return res;
}

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

export default function Game() {
  //const classes = useStyles();
  //const [answers, setAnswers] = useState(new Array(4))

  const dispatch = useDispatch();

  const game = useSelector(state => state.game);

  var answers, shuffledAnswers, previewURL, correct;

  if (game.currentTrack !== game.qTracks.length) {
    answers = new Array(4);
    answers[0] = game.qTracks[game.currentTrack];
    correct = answers[0].id;
    for (let i = 1; i < answers.length; i++) {
      answers[i] =
        game.allTracks[Math.floor(Math.random() * game.allTracks.length)];
    }
    shuffledAnswers = shuffleArray(answers);

    previewURL = shuffledAnswers.filter(ans => ans.id === correct)[0]
      .previewUrl;
  }

  function onAnswerClick(id, points) {
    if (id === game.qTracks?.[game.currentTrack].id)
      dispatch(gameActions.update(points));
    else dispatch(gameActions.stop());
  }

  return (
    <div>
      <Dialog
        fullScreen
        open={game.isGameOpen}
        onClose={() => {}}
        TransitionComponent={Transition}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={() => dispatch(gameActions.close())}
          >
            <CloseIcon />
          </IconButton>

          <Typography>{game.score}</Typography>
        </Toolbar>
        {game.isGamePlayed && game.currentTrack !== game.qTracks.length ? (
          <Question
            url={previewURL}
            shuffledAnswers={shuffledAnswers}
            onAnswerClick={onAnswerClick}
          />
        ) : (
          <Typography>Your score: {game.score} Good job!</Typography>
        )}
      </Dialog>
    </div>
  );
}
