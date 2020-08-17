import React from "react";

import { useSelector } from "react-redux";

export default function AudioPlayer() {
  const { source, isPlaying } = useSelector(state => state.audioPlayer);

  return (
    <audio style={{ display: "none" }} src={source} autoPlay={isPlaying} />
  );
}
