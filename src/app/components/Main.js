import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

//Spinner
import Spinner from "react-spinner-children";

//Material UI
import { Grid } from "@material-ui/core";
import PlaylistCard from "./PlaylistCard";

//Pages
import { pages } from "../states/page/types";

//Playlists actions
import playlistsActions from "../states/playlists/operations";

export default function Main(props) {
  const dispatch = useDispatch();

  const currentPage = useSelector(state => state.page.currentPage);
  const { items: playlists, pending: playlistsPending } = useSelector(
    state => state.playlists
  );

  useEffect(() => {
    if (currentPage === pages.top) dispatch(playlistsActions.getTopPlaylists());
    else if (currentPage === pages.user)
      dispatch(playlistsActions.getUserPlaylists());
  }, [currentPage, dispatch]);

  const mappedPlaylists = playlists.map(playlist => (
    <Grid item key={playlist.id}>
      <PlaylistCard {...playlist} />
    </Grid>
  ));

  return (
    <Spinner loaded={!playlistsPending}>
      <Grid container justify="center" spacing={1}>
        {mappedPlaylists}
      </Grid>
    </Spinner>
  );
}
