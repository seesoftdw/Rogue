import { Box, Grid, Typography, Select, MenuItem, Button } from "@mui/material";
import React, { useRef, useState } from "react";
import MainWrapper from "../../../components/common/MainWrapper";
import { FaPlay, FaPause } from "react-icons/fa";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { getTrackList } from "../../../services/trackService";
import ArtistActionDropdown from "./ArtistActionDropdown";
import { TRACK_LIST_DATA } from "./utils/constant";
import musicIcon from "../../../assets/images/icons/music.svg";
import Player from "../../../components/common/AudioPlayer";
import CustomAudioPlayer from "../../../components/common/CustomAudioPlayer";
import ReactAudioPlayer from "../../../components/common/ReactAudioPlayer";

type Props = {};
interface BritSchoolIconProps {
  src: string;
  alt: string;
}

const ArtistTrack = (props: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string>();
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    getTracksList();
  }, []);

  const getTracksList = async () => {
    const response = await dispatch(getTrackList());
  };

  const handleDropdownClick = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const toggleAudio = (audio: string) => {
    if (currentlyPlaying === audio) {
      setCurrentlyPlaying(""); // Pause if the same track is clicked again
    } else {
      setCurrentlyPlaying(audio); // Play the clicked track
    }
  };

  const handleTitleClick = () => {
    navigate("/uploadtrack?edit=true");
  };

  return (
    <Box>
      <MainWrapper>
        <Box>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={9}>
                <Typography
                  sx={{
                    color: "rgb(10, 32, 46)",
                    fontSize: "36px",
                    fontweight: "bold",
                    mt: 2,
                  }}
                >
                  Tracks
                </Typography>
              </Grid>
              <Link to="/uploadtrack">
                <Grid item xs={3}>
                  <Button
                    sx={{
                      height: "40px",
                      width: "163px",
                      background:
                        " linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)",
                      borderRadius: "6px",
                      border: " 1px solid rgba(10, 32, 46, 0.25)",
                      color: " rgb(255, 255, 255)",
                      mt: 2,
                      fontWeight: "bold",
                      ml: 14,
                    }}
                  >
                    UPLOAD TRACKS
                  </Button>
                </Grid>
              </Link>
            </Grid>
          </Grid>
        </Box>

        <Grid
          display={"flex"}
          item
          xs={12}
          sx={{
            borderBottom: "1px solid rgb(10, 32, 46, 0.4)",
            borderTop: "1px solid rgb(10, 32, 46, 0.4)",
            mt: 2,
          }}
        >
          <Grid
            container
            sx={{
              pt: 3,
              pb: 3,
              fontSize: "14px",
              color: " rgba(10, 32, 46, 0.4)",
              fonWeight: 600,
            }}
          >
            <Grid item xs={3}>
              TITLE
            </Grid>
            <Grid item xs={1}>
              TIME
            </Grid>
            <Grid item xs={2}>
              STATUS
            </Grid>
            <Grid item xs={1}>
              PRICE
            </Grid>
            <Grid item xs={1}>
              OWNERS
            </Grid>
            <Grid item xs={1}>
              LISTENERS
            </Grid>
            <Grid item xs={1} sx={{ pl: 2 }}>
              STREAMS
            </Grid>
            <Grid item xs={2} sx={{ pl: 2 }}>
              DATE ADDED
            </Grid>
          </Grid>
        </Grid>
        {TRACK_LIST_DATA.map((track, index) => {
          return (
            <Grid display={"flex"} item xs={12} sx={{ mt: 3 }}>
              <Grid container sx={{}}>
                <Grid item xs={3}>
                  <Grid item xs={12}>
                    <Grid container alignItems="center">
                      <Grid item xs={1}>
                        <Box
                          onMouseEnter={() => setHoveredIndex(index)}
                          onMouseLeave={() => setHoveredIndex(null)}
                          sx={{
                            position: "relative",
                            height: "40px",
                            width: "40px",
                          }}
                        >
                          <Box
                            component="img"
                            src={
                              track.posterImage ? track.posterImage : musicIcon
                            }
                            alt=""
                            sx={{
                              height: "40px",
                              width: "40px",
                              display:
                                hoveredIndex === index ? "none" : "block",
                            }}
                          />
                          {hoveredIndex === index && (
                            <Box
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                height: "40px",
                                width: "40px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "rgba(0, 0, 0, 0.6)",
                                borderRadius: "4px",
                              }}
                              onClick={() => toggleAudio(track.previewAudioUrl)}
                            >
                              {currentlyPlaying === track.previewAudioUrl ? (
                                <FaPause color="white" />
                              ) : (
                                <FaPlay color="white" />
                              )}
                            </Box>
                          )}
                          <CustomAudioPlayer
                            audioSrc={track.previewAudioUrl}
                            isPlaying={
                              currentlyPlaying === track.previewAudioUrl
                            }
                          />
                        </Box>
                      </Grid>
                      <Grid
                        item
                        xs={11}
                        sx={{ cursor: "pointer" }}
                        onClick={handleTitleClick}
                      >
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: 500, pl: 4 }}
                        >
                          {track.title}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={1} sx={{ pt: 1.5 }}>
                  {track.time}
                </Grid>
                <Grid item xs={2} sx={{ pt: 1.5 }}>
                  {track.status}
                </Grid>
                <Grid item xs={1} sx={{ pt: 1.5 }}>
                  {track.price}
                </Grid>
                <Grid item xs={1} sx={{ pt: 1.5 }}>
                  {track.owners}
                </Grid>
                <Grid item xs={1} sx={{ pt: 1.5 }}>
                  {track.listeners}
                </Grid>
                <Grid item xs={1} sx={{ pl: 2, pt: 1.5 }}>
                  {track.streams}
                </Grid>
                <Grid item xs={2} sx={{ pl: 2, position: "relative", pt: 1.5 }}>
                  <Typography
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => handleDropdownClick(2)}
                  >
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...
                  </Typography>
                  {openDropdown === 2 && (
                    <ArtistActionDropdown
                      openDropdown={openDropdown}
                      handleDropdownClick={handleDropdownClick}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </MainWrapper>
    </Box>
  );
};

export default ArtistTrack;
