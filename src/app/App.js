import React from "react";

import { useDispatch, useSelector } from "react-redux";

//MaterialUI
import { Container } from "@material-ui/core";

//Operations
import { getUser } from "./states/profile/duck/operations";

//Custom
import Header from "./components/Header";
import Main from "./components/Main";
import GameDialog from "./components/GameDialog";
//import AudioPlayer from "./components/AudioPlayerComponent";

export default function App() {
  const dispatch = useDispatch();
  dispatch(getUser());

  const isGameDialogOpen = useSelector(state => state.gameDialog.isOpen);

  return (
    <Container>
      {/* <AudioPlayer /> */}
      <Header />
      <Main />
      {isGameDialogOpen && <GameDialog />}
    </Container>
  );
}
