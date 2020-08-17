import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

import { useDispatch } from "react-redux";

import pagesActions from "../states/page/actions";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

export default function HeaderNav() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
      >
        <Button onClick={e => dispatch(pagesActions.goToTop())}>Browse</Button>
        <Button onClick={e => dispatch(pagesActions.goToUser())}>Owned</Button>
        <Button onClick={e => console.log("Not implemented yet")}>
          Played
        </Button>
      </ButtonGroup>
    </div>
  );
}
