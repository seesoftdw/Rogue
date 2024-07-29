import { Box, Grid, Typography, Select, MenuItem, Button } from "@mui/material";
import React, { useState, Fragment } from "react";
import { FaMusic, FaPlus } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { IoCopy } from "react-icons/io5";
import { MdOutlineQueueMusic, MdQueueMusic } from "react-icons/md";

type Props = {
    openDropdown: number,
    handleDropdownClick: Function

}

const ArtistActionDropdown = ({openDropdown, handleDropdownClick}:Props) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: -100,
        width: "260px",
        background: "rgb(255, 255, 255)",
        border: "1px solid rgba(10, 32, 46, 0.2)",
        boxShadow: "0px 8px 10px 0px rgba(10, 32, 46, 0.5)",
        height: "220px",
        color: "black",
        p: 2,
        mt: 1,
        borderRadius: "4px",
        zIndex: 1,
      }}
    >
      <Grid display={"block"} item xs={12}>
        <Grid
          display={"flex"}
          item
          xs={12}
          sx={{ "&:hover": { backgroundColor: "rgba(10, 32, 46, 0.05)" } }}
        >
          <Grid item xs={2}>
            {" "}
            <FaPlus
              style={{
                color: "rgba(10, 32, 46, 0.3)",
                height: "17.5px",
                width: "17.5px",
                marginTop: 2,
              }}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography
              sx={{
                color: "rgba(10, 32, 46, 0.9)",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Add to queue
            </Typography>{" "}
          </Grid>
        </Grid>

        <Grid
          display={"flex"}
          item
          xs={12}
          sx={{
            "&:hover": { backgroundColor: "rgba(10, 32, 46, 0.05)" },
            height: 0,
            pt: 1,
            pb: 4,
          }}
        >
          <Grid item xs={10} sx={{}}>
            <Typography
              sx={{
                color: "rgba(10, 32, 46, 0.9)",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              <MdOutlineQueueMusic
                style={{
                  height: "20px",
                  width: "20px",
                  color: "rgba(10, 32, 46, 0.3)",
                  marginTop: 3,
                  marginRight: 18,
                }}
              />
              Add to playlist
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Select
              value={openDropdown === 2 ? "open" : ""}
              onChange={(e) => handleDropdownClick(2)}
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: "white",
                padding: "0 12px",
                color: "rgba(10, 32, 46, 0.9)",
                paddingLeft: "25px",
                marginTop: 1.5,
              }}
            >
              <MenuItem value="add_to_queue" sx={{ width: "250px" }}>
                <Grid display={"block"} item xs={12}>
                  <Grid display={"flex"} item xs={12}>
                    <Grid item xs={2}>
                      {" "}
                      <FaPlus
                        style={{
                          color: "rgba(10, 32, 46, 0.3)",
                          height: "17.5px",
                          width: "17.5px",
                          marginTop: 2,
                        }}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "rgba(10, 32, 46, 0.9)",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        New playlist
                      </Typography>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </MenuItem>

              <MenuItem value="add_to_queue" sx={{ width: "250px" }}>
                <Grid display={"block"} item xs={12}>
                  <Grid display={"flex"} item xs={12}>
                    <Grid item xs={2}>
                      {" "}
                      <MdQueueMusic
                        style={{
                          color: "rgba(10, 32, 46, 0.3)",
                          height: "17.5px",
                          width: "17.5px",
                          marginTop: 2,
                        }}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "rgba(10, 32, 46, 0.9)",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Vintage Jazz Vibes
                      </Typography>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </MenuItem>

              <MenuItem value="add_to_queue" sx={{ width: "250px" }}>
                <Grid display={"block"} item xs={12}>
                  <Grid display={"flex"} item xs={12}>
                    <Grid item xs={2}>
                      {" "}
                      <MdQueueMusic
                        style={{
                          color: "rgba(10, 32, 46, 0.3)",
                          height: "17.5px",
                          width: "17.5px",
                          marginTop: 2,
                        }}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "rgba(10, 32, 46, 0.9)",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Blue Note Odyssey
                      </Typography>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </MenuItem>

              <MenuItem value="add_to_queue" sx={{ width: "250px" }}>
                <Grid display={"block"} item xs={12}>
                  <Grid display={"flex"} item xs={12}>
                    <Grid item xs={2}>
                      {" "}
                      <MdQueueMusic
                        style={{
                          color: "rgba(10, 32, 46, 0.3)",
                          height: "17.5px",
                          width: "17.5px",
                          marginTop: 2,
                        }}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "rgba(10, 32, 46, 0.9)",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Latin Jazz Fiesta
                      </Typography>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </MenuItem>

              <MenuItem value="add_to_queue" sx={{ width: "250px" }}>
                <Grid display={"block"} item xs={12}>
                  <Grid display={"flex"} item xs={12}>
                    <Grid item xs={2}>
                      {" "}
                      <MdQueueMusic
                        style={{
                          color: "rgba(10, 32, 46, 0.3)",
                          height: "17.5px",
                          width: "17.5px",
                          marginTop: 2,
                        }}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "rgba(10, 32, 46, 0.9)",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Groovy Fusion
                      </Typography>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </MenuItem>

              <MenuItem value="add_to_queue" sx={{ width: "250px" }}>
                <Grid display={"block"} item xs={12}>
                  <Grid display={"flex"} item xs={12}>
                    <Grid item xs={2}>
                      {" "}
                      <MdQueueMusic
                        style={{
                          color: "rgba(10, 32, 46, 0.3)",
                          height: "17.5px",
                          width: "17.5px",
                          marginTop: 2,
                        }}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "rgba(10, 32, 46, 0.9)",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Funky Fusion
                      </Typography>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </MenuItem>

              <MenuItem value="add_to_queue" sx={{ width: "250px" }}>
                <Grid display={"block"} item xs={12}>
                  <Grid display={"flex"} item xs={12}>
                    <Grid item xs={2}>
                      {" "}
                      <MdQueueMusic
                        style={{
                          color: "rgba(10, 32, 46, 0.3)",
                          height: "17.5px",
                          width: "17.5px",
                          marginTop: 2,
                        }}
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        sx={{
                          color: "rgba(10, 32, 46, 0.9)",
                          fontSize: "16px",
                          fontWeight: "500",
                        }}
                      >
                        Cool Chronicles
                      </Typography>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </MenuItem>
            </Select>
          </Grid>
        </Grid>

        <Grid
          display="flex"
          item
          xs={12}
          sx={{ "&:hover": { backgroundColor: "rgba(10, 32, 46, 0.05)" } }}
        >
          <Grid item xs={2}>
            <IoIosMan
              style={{
                color: "rgba(10, 32, 46, 0.3)",
                height: "17.5px",
                width: "17.5px",
                marginTop: 10,
              }}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography
              sx={{
                color: "rgba(10, 32, 46, 0.9)",
                fontSize: "16px",
                fontWeight: "500",
                pt: 1,
                pb: 1,
              }}
            >
              Go to artist
            </Typography>
          </Grid>
        </Grid>

        <Grid
          display={"flex"}
          item
          xs={12}
          sx={{ "&:hover": { backgroundColor: "rgba(10, 32, 46, 0.05)" } }}
        >
          <Grid item xs={2}>
            {" "}
            <FaMusic
              style={{
                color: "rgba(10, 32, 46, 0.3)",
                height: "17.5px",
                width: "17.5px",
                marginTop: 10,
              }}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography
              sx={{
                color: "rgba(10, 32, 46, 0.9)",
                fontSize: "16px",
                fontWeight: "500",
                pt: 1,
                pb: 1,
              }}
            >
              Go to Track
            </Typography>{" "}
          </Grid>
        </Grid>
        <Grid
          display={"flex"}
          item
          xs={12}
          sx={{ "&:hover": { backgroundColor: "rgba(10, 32, 46, 0.05)" } }}
        >
          <Grid item xs={2}>
            {" "}
            <IoCopy
              style={{
                color: "rgba(10, 32, 46, 0.3)",
                height: "17.5px",
                width: "17.5px",
                marginTop: 10,
              }}
            />
          </Grid>
          <Grid item xs={10}>
            <Typography
              sx={{
                color: "rgba(10, 32, 46, 0.9)",
                fontSize: "16px",
                fontWeight: "500",
                pt: 1,
              }}
            >
              Copy track link
            </Typography>{" "}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ArtistActionDropdown;
