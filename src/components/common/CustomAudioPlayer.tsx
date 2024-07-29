import React, { useEffect, useRef } from "react";

type Props = {
  audioSrc: string;
  isPlaying: boolean;
};

const CustomAudioPlayer = ({ audioSrc, isPlaying }: Props) => {
  const audioRef = useRef(new Audio(audioSrc));

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return null;
};

export default CustomAudioPlayer;
