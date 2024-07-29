import React, { useState } from "react";
import { Popover, IconButton, Box } from "@mui/material";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { FaVolumeLow } from "react-icons/fa6";

interface VolumeSliderProps {
  onChange: (volume: any) => void;
  volume: number;
  fullScreen?: boolean;
}

const VolumeSlider: React.FC<VolumeSliderProps> = ({
  onChange,
  volume,
  fullScreen,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(event.target.value));
  };

  const open = Boolean(anchorEl);

  return (
    <>
      {!fullScreen ? (
        <IconButton onClick={handleClick}>
          {volume === 1 ? (
            <FaVolumeUp />
          ) : volume == 0 ? (
            <FaVolumeMute />
          ) : (
            <FaVolumeLow />
          )}
        </IconButton>
      ) : (
        <IconButton>
          {volume === 1 ? (
            <FaVolumeUp />
          ) : volume == 0 ? (
            <FaVolumeMute />
          ) : (
            <FaVolumeLow />
          )}
        </IconButton>
      )}
      {!fullScreen ? (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Box
            sx={{ width: 30, padding: 2 }}
            display={"flex"}
            justifyContent={"center"}
          >
            <input
              className="vertical-slider"
              type="range"
              min={0}
              max={1}
              step="any"
              value={volume}
              onChange={handleVolumeChange}
              aria-label="Volume slider"
              style={{
                background: `linear-gradient(to right, #858f96 ${
                  volume * 100
                }%, #ced2d5 0%)`,
              }}
            />
          </Box>
        </Popover>
      ) : (
        <Box>
          <input
            type="range"
            min={0}
            max={1}
            step="any"
            value={volume}
            onChange={handleVolumeChange}
            aria-label="Volume slider"
            style={{
              background: `linear-gradient(to right, #858f96 ${
                volume * 100
              }%, #ced2d5 0%)`,
            }}
          />
        </Box>
      )}
    </>
  );
};

export default VolumeSlider;
