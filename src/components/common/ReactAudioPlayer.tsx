import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

interface Props {
  audioSrc: string;
  poster: any;
}

const ReactAudioPlayer = ({ audioSrc, poster }: Props) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <div className="audio-player">
      <div className="poster-container">
        {poster && <img src={poster} alt="Poster" />}
      </div>
      <div className="player-container">
        <ReactPlayer
          ref={playerRef}
          url={audioSrc}
          playing={playing}
          controls={true}
          width="100%"
          height="50px"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          config={{
            file: {
              attributes: {
                controlsList: "nodownload", // Disable download button
              },
            },
          }}
        />
        <button onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
      </div>
    </div>
  );
};

export default ReactAudioPlayer;
