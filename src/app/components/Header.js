import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

import HeaderNav from "./HeaderNav";

//Custom
import { getSearchedPlaylists } from "../states/playlists/operations";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 10
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));

export default function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { data: user, pending: userPending } = useSelector(state => state.user);

  const [searchVal, setSearchVal] = useState("");
  const [big, setBig] = useState(window.innerWidth > 500);

  function handleSearchChange(e) {
    e.preventDefault();
    const value = e.target.value.trim();
    setSearchVal(value);
  }

  window.onresize = () => {
    setBig(window.innerWidth > 500);
  };

  useEffect(() => {
    console.log("outtimeout");
    var delayedSearch = setTimeout(() => {
      console.log("intimeout");
      if (searchVal.length > 0) {
        dispatch(getSearchedPlaylists(searchVal));
      }
    }, 100);

    return () => clearTimeout(delayedSearch);
  }, [searchVal, dispatch]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {!userPending && (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
              >
                <a href={user.spotifyUrl} target="_blank">
                  <Avatar src={user.image} />
                </a>
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                {user.name}
              </Typography>
            </>
          )}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={e => handleSearchChange(e)}
              placeholder="Search for playlists…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {big && <HeaderNav />}
        </Toolbar>
        {!big && <HeaderNav />}
      </AppBar>
    </div>
  );
}
