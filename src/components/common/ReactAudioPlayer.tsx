import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { FaCompressAlt, FaExpandAlt, FaPause, FaPlay } from "react-icons/fa";
import {
  Box,
  Grid,
  IconButton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { IoMenu, IoShuffle } from "react-icons/io5";
import styled from "@emotion/styled";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";
import { TfiLoop } from "react-icons/tfi";
import "../../player.scss";
import VolumeSlider from "./VolumeSlider";
import PlayerFullScreenView from "./PlayerFullScreenView";

interface Track {
  url: string;
  song?: string;
  artist?: string;
}

interface Props {
  playlist: Track[];
  poster?: string; // Optional prop for poster image URL
}

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

const ReactAudioPlayer: React.FC<Props> = ({ playlist, poster }) => {
  const CoverImage = styled("img")({
    width: 100,
    height: 100,
    objectFit: "cover",
    overflow: "hidden",
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.08)",
    "& > img": {
      width: "100%",
    },
  });

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8); // default volume
  const [muted, setMuted] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [seeking, setSeeking] = useState(false); // State to track if user is currently seeking
  const [played, setPlayed] = useState<number>(0); // State to track how much of the media has been played
  const [duration, setDuration] = useState<number | null>(null); // State to store track duration
  const [loading, setLoading] = useState(true); // State to track loading state
  const [hoveredPosition, setHoveredPosition] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{
    left: number;
    top: number;
  }>({ left: 0, top: 0 });
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [fullScreen, setFullScreen] = useState(false);

  const sliderRef = useRef<HTMLInputElement>(null);
  const playerRef = useRef<ReactPlayer | null>(null);

  const open = Boolean(anchorEl);

  useEffect(() => {
    // Load duration and update state when player is ready and when the track changes
    const loadDuration = async () => {
      setLoading(true);
      const newDuration = await playerRef.current?.getDuration();
      setDuration(newDuration || 0);
      setLoading(false);
    };

    if (playerRef.current) {
      loadDuration();
    }
  }, [currentTrackIndex]);

  const playPause = () => {
    setPlaying(!playing);
  };

  const handlePrev = () => {
    if (currentTrackIndex === 0) {
      setCurrentTrackIndex(playlist.length - 1);
    } else {
      setCurrentTrackIndex(currentTrackIndex - 1);
    }
  };

  const handleNext = () => {
    if (shuffle) {
      // Generate a random index different from the current one
      let randomIndex = currentTrackIndex;
      while (randomIndex === currentTrackIndex) {
        randomIndex = Math.floor(Math.random() * playlist.length);
      }
      setCurrentTrackIndex(randomIndex);
    } else {
      if (currentTrackIndex + 1 !== playlist.length) {
        setCurrentTrackIndex((currentTrackIndex + 1) % playlist.length);
      } else {
        setPlaying(false);
        setCurrentTrackIndex(0);
      }
    }
  };

  const handleEnded = () => {
    if (repeat) {
      // Repeat the current track
      playerRef.current?.seekTo(0);
      setPlaying(true);
    } else {
      if (playing) {
        handleNext();
      }
    }
  };

  const handleToggleShuffle = () => {
    setShuffle(!shuffle);
  };

  const handleToggleRepeat = () => {
    setRepeat(!repeat);
  };
  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume); // Normalize to 0.0 - 1.0 range
  };
  // const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = parseFloat(e.target.value);
  //   setVolume(value);
  //   setMuted(value === 0);
  // };

  const handleMute = () => {
    setMuted(!muted);
  };

  const handleProgress = (state: any) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleSeekMouseDown = () => {
    console.log("===>", seeking);
    setSeeking(true);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayed(parseFloat(e.target.value));
  };

  const handleMouseEnter = () => {
    // Show tooltip on mouse enter
    setHoveredPosition(null); // Clear previously hovered position
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      setTooltipPosition({ left: rect.left, top: rect.top - 20 }); // Position tooltip above the slider
    }
  };

  const handleMouseLeave = () => {
    // Hide tooltip on mouse leave
    setTooltipPosition({ left: 0, top: 0 });
    setHoveredPosition(0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const fraction = offsetX / rect.width;
      const left = rect.left + offsetX;
      const top = rect.top + 10; // Position tooltip above the slider
      setTooltipPosition({ left, top }); // Position tooltip above the slider
      if (fraction >= 0.99) {
        setHoveredPosition(1);
      } else {
        setHoveredPosition(fraction);
      }
    }
  };

  const handleSeekMouseUp = () => {
    setSeeking(false); // Set seeking state to false

    playerRef?.current?.seekTo(played, "fraction");
  };

  const formatTime = (seconds: number | undefined) => {
    if (typeof seconds !== "number") return "00:00";
    const format = (val: number) => `0${Math.floor(val)}`.slice(-2);
    const minutes = (seconds / 60) % 60;
    return `${format(minutes)}:${format(seconds % 60)}`;
  };

  const onReady = async () => {
    // When the player is ready, fetch duration if not already fetched
    if (!duration && playerRef.current) {
      const newDuration = playerRef.current.getDuration();
      setDuration(newDuration);
    }
  };
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      console.log(open, "==");
    };

  return (
    <div className="custom-media-player">
      <ReactPlayer
        ref={playerRef}
        url={playlist[currentTrackIndex].url}
        playing={playing}
        volume={volume}
        muted={muted}
        onEnded={handleEnded}
        onProgress={handleProgress}
        onReady={onReady}
        width="100%"
        height="100%"
        poster={poster} // Include the optional poster prop
      />
      <div className="controls">
        {fullScreen ? (
          <SwipeableDrawer
            anchor="top"
            open={fullScreen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <Box
              display="flex"
              flexDirection="column"
              role="presentation"
              justifyContent={"space-between"}
              alignItems={"center"}
              height={"100%"}
            >
              <Grid container spacing={2} sx={{ margin: 0 }}>
                <Box
                  width={"100%"}
                  display={"flex"}
                  justifyContent={"flex-end"}
                  marginRight={"20px"}
                >
                  <IconButton
                    className="player-btn"
                    onClick={() => {
                      setFullScreen(!fullScreen);
                    }}
                  >
                    <FaCompressAlt />
                  </IconButton>
                </Box>

                <Grid
                  item
                  xs={12}
                  md={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    mt: 16,
                  }}
                >
                  <Box>
                    <img src={poster} alt="Poster" height={350} width={350} />
                  </Box>
                  <Box
                    className="playerMainWrapper"
                    gap={{ lg: 6, md: 3, sm: "13px", xs: "13px" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "black",
                        justifyContent: "center",
                      }}
                    >
                      <Box sx={{ minWidth: 0 }}>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          marginTop={"20px"}
                        >
                          <Typography variant="subtitle1" noWrap className="font-weigth600">
                            {" "}
                            {playlist[currentTrackIndex].song}
                            {/* {`${playlist[currentTrackIndex].song} - ${playlist[currentTrackIndex].artist}`} */}
                          </Typography>
                          <Typography variant="subtitle2" color={"GrayText"} className="font-weigth600">
                            {playlist[currentTrackIndex].artist}
                          </Typography>
                          <Box>
                            <input
                              ref={sliderRef}
                              type="range"
                              min={0}
                              max={1}
                              step="any"
                              value={played}
                              className="seek-bar"
                              onChange={handleSeekChange}
                              onMouseUp={handleSeekMouseUp}
                              onMouseDown={handleSeekMouseDown}
                              onMouseEnter={handleMouseEnter}
                              onMouseMove={handleMouseMove}
                              onMouseLeave={handleMouseLeave}
                              style={{
                                width: "350px",
                                background: `linear-gradient(to right, #858f96 ${
                                  played * 100
                                }%, #ced2d5 0%)`,
                              }}
                            />
                          </Box>
                          {hoveredPosition && hoveredPosition > 0 ? (
                            <div
                              className="tooltip"
                              style={{
                                left: `${tooltipPosition.left}px`,
                                top: `${tooltipPosition.top}px`,
                              }}
                            >
                              {formatTime(
                                playerRef?.current
                                  ? hoveredPosition *
                                      playerRef?.current?.getDuration()
                                  : -1
                              )}
                            </div>
                          ) : null}
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <TinyText>
                              {loading
                                ? "Loading..."
                                : `${formatTime(
                                    playerRef.current
                                      ? playerRef.current.getCurrentTime()
                                      : 0
                                  )}`}
                            </TinyText>
                            <TinyText>{formatTime(duration || 0)}</TinyText>
                          </Box>
                        </Box>
                        <Box
                          marginTop={"20px"}
                          display={"flex"}
                          justifyContent={"center"}
                        >
                          <IconButton
                            aria-label="suffle"
                            onClick={handleToggleShuffle}
                            className={`player-btn ${shuffle ? "active" : ""}`}
                          >
                            <IoShuffle />
                          </IconButton>
                          <IconButton
                            aria-label="previous"
                            onClick={handlePrev}
                          >
                            <BsFillSkipBackwardFill />
                          </IconButton>
                          <IconButton
                            aria-label="play/pause"
                            className="player-btn"
                            sx={{
                              pl: { lg: "17px;", md: "17px", sm: "3px" },
                            }}
                            onClick={playPause}
                          >
                            {playing ? <FaPause /> : <FaPlay />}
                          </IconButton>
                          <IconButton
                            aria-label="next"
                            className={`player-btn`}
                            sx={{
                              pl: { lg: "17px;", md: "17px", sm: "3px" },
                            }}
                            onClick={handleNext}
                          >
                            <BsFillSkipForwardFill />
                          </IconButton>
                          <IconButton
                            aria-label="next"
                            className={`player-btn ${repeat ? "active" : ""}`}
                            sx={{
                              pl: { lg: "17px;", md: "17px", sm: "3px" },
                            }}
                            onClick={handleToggleRepeat}
                          >
                            <TfiLoop />
                          </IconButton>
                        </Box>
                        <Box
                          marginTop={"20px"}
                          display={"flex"}
                          justifyContent={"start"}
                          alignItems={"center"}
                        >
                          <VolumeSlider
                            onChange={handleVolumeChange}
                            volume={volume}
                            fullScreen={fullScreen}
                          />
                          {/* <IconButton className="player-btn">
                            <IoMenu />
                          </IconButton> */}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </SwipeableDrawer>
        ) : (
          <Box
            className="playerMainWrapper"
            gap={{ lg: 6, md: 3, sm: "13px", xs: "13px" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", color: "black" }}>
              <IconButton
                aria-label="suffle"
                onClick={handleToggleShuffle}
                className={`player-btn ${shuffle ? "active" : ""}`}
              >
                <IoShuffle />
              </IconButton>
              <IconButton aria-label="previous" onClick={handlePrev}>
                <BsFillSkipBackwardFill />
              </IconButton>
              <IconButton
                aria-label="play/pause"
                className="player-btn"
                sx={{
                  pl: { lg: "17px;", md: "17px", sm: "3px" },
                }}
                onClick={playPause}
              >
                {playing ? <FaPause /> : <FaPlay />}
              </IconButton>
              <IconButton
                aria-label="next"
                className={`player-btn`}
                sx={{
                  pl: { lg: "17px;", md: "17px", sm: "3px" },
                }}
                onClick={handleNext}
              >
                <BsFillSkipForwardFill />
              </IconButton>
              <IconButton
                aria-label="next"
                className={`player-btn ${repeat ? "active" : ""}`}
                sx={{
                  pl: { lg: "17px;", md: "17px", sm: "3px" },
                }}
                onClick={handleToggleRepeat}
              >
                <TfiLoop />
              </IconButton>
              {!fullScreen ? (
                <CoverImage
                  style={{ marginLeft: "15px" }}
                  className="cover-image"
                  src={poster}
                />
              ) : null}
              <Box sx={{ ml: 1.5, mr: 3, minWidth: 0 }}>
                <Box display={"flex"} flexDirection={"column"}>
                  {!fullScreen ? (
                    <Typography
                      variant="h6"
                      noWrap
                      sx={{
                        fontSize: {
                          lg: 12,
                          md: 9,
                          sm: 8,
                          xs: 8,
                        },
                      }}
                    >
                      {`${playlist[currentTrackIndex].song} - ${playlist[currentTrackIndex].artist}`}
                    </Typography>
                  ) : (
                    ""
                  )}
                  <Box>
                    <input
                      ref={sliderRef}
                      type="range"
                      min={0}
                      max={1}
                      step="any"
                      value={played}
                      className="seek-bar"
                      onChange={handleSeekChange}
                      onMouseUp={handleSeekMouseUp}
                      onMouseDown={handleSeekMouseDown}
                      onMouseEnter={handleMouseEnter}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        width: "500px",
                        background: `linear-gradient(to right, #858f96 ${
                          played * 100
                        }%, #ced2d5 0%)`,
                      }}
                    />
                  </Box>
                  {hoveredPosition && hoveredPosition > 0 ? (
                    <div
                      className="tooltip"
                      style={{
                        left: `${tooltipPosition.left}px`,
                        top: `${tooltipPosition.top}px`,
                      }}
                    >
                      {formatTime(
                        playerRef?.current
                          ? hoveredPosition * playerRef?.current?.getDuration()
                          : -1
                      )}
                    </div>
                  ) : null}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <TinyText>
                      {loading
                        ? "Loading..."
                        : `${formatTime(
                            playerRef.current
                              ? playerRef.current.getCurrentTime()
                              : 0
                          )}`}
                    </TinyText>
                    <TinyText>{formatTime(duration || 0)}</TinyText>
                  </Box>
                </Box>
              </Box>
              <VolumeSlider onChange={handleVolumeChange} volume={volume} />
              <IconButton className="player-btn">
                <IoMenu />
              </IconButton>
              <IconButton
                className="player-btn"
                onClick={() => {
                  setFullScreen(!fullScreen);
                }}
              >
                {fullScreen ? <FaCompressAlt /> : <FaExpandAlt />}
              </IconButton>
            </Box>
          </Box>
        )}
      </div>
    </div>
  );
};

export default ReactAudioPlayer;
