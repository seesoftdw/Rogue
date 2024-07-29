import React from "react";
import AudioPlayer from 'react-h5-audio-player';

type Props = {
  src?: string;
  light?: boolean;
};

const Player = (props: Props) => {
  return props.light ? (
    <AudioPlayer  />
  ) : (
    <AudioPlayer src={props.src} />
  );
};

export default Player;
