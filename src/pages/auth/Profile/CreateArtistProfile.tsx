import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  SelectChangeEvent,
  TextareaAutosize,
} from "@mui/material";
import React from "react";
import MainWrapper from "../../../components/common/MainWrapper";
import { FormControl, MenuItem, Select } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../store";
import { createArtistProfile } from "../../../services/artistService";

const CreateArtistProfile: React.FC<{}> = () => {
  const [artistId, setArtistId] = React.useState("");
  const [firstDropdown, setFirstDropdown] = React.useState("");
  const [secondDropdown, setSecondDropdown] = React.useState("");
  const [artistName, setArtistName] = React.useState("");
  const [bio, setBio] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [genres, setGenres] = React.useState("");
  const [pictureUrls, setPictureUrls] = React.useState("");
  const [socialMediaLinks, setSocialMediaLinks] = React.useState({
    facebook: "",
    instagram: "",
    sound_cloud: "",
    spotify: "",
    youtube: "",
    website: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFirstDropdownChange = (event: SelectChangeEvent<string>) => {
    setFirstDropdown(event.target.value as string);
    setGenres(event.target.value as string);
  };

  const handleSecondDropdownChange = (event: SelectChangeEvent<string>) => {
    setSecondDropdown(event.target.value as string);
    setCountry(event.target.value as string);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const postData = {
      artist_name: artistName,
      bio: bio,
      country: country,
      genres: genres,
      picture_urls: pictureUrls,
      social_media_links: socialMediaLinks,
    };

    dispatch(createArtistProfile(postData))
      .then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          navigate("/yourprofiles");
        } else {
          console.error("Error creating artist profile");
        }
      })
      .catch((error) => {
        console.error("Error adding artist:", error);
      });
  };

  return (
    <Box className="createArtistProfile">
      <MainWrapper>
        <Box sx={{ mt: 10 }}>
          <Typography className="main-heading">
            Create artist profile
          </Typography>
          <Typography className="field-label" sx={{ pl: 44, pt: 5 }}>
            Artist/Band name
          </Typography>
          <TextField
            className="input-fields"
            value={artistName}
            onChange={(e) => setArtistName(e.target.value)}
            size="small"
            sx={{
              width: "448px",
              ml: 44,
              mt: 1,
              background: "rgba(10, 32, 46, 0.05)",
            }}
          ></TextField>

          <Box>
            <Box>
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <FormControl
                  size="small"
                  fullWidth
                  variant="outlined"
                  sx={{ width: "212px", ml: 44 }}
                >
                  <Typography className="field-label">Genre</Typography>
                  <Select
                    className="input-fields"
                    labelId="first-dropdown-label"
                    value={firstDropdown}
                    onChange={handleFirstDropdownChange}
                    label="First Dropdown"
                    style={{ background: "rgba(10, 32, 46, 0.05)" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Option 1</MenuItem>
                    <MenuItem value={20}>Option 2</MenuItem>
                    <MenuItem value={30}>Option 3</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  size="small"
                  fullWidth
                  variant="outlined"
                  sx={{ width: "220px" }}
                >
                  <Typography className="field-label">Country</Typography>

                  <Select
                    className="input-fields"
                    labelId="second-dropdown-label"
                    value={secondDropdown}
                    onChange={handleSecondDropdownChange}
                    label="Second Dropdown"
                    style={{ background: "rgba(10, 32, 46, 0.05)" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Option 1</MenuItem>
                    <MenuItem value={20}>Option 2</MenuItem>
                    <MenuItem value={30}>Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Typography className="field-label" sx={{ pl: 44, pt: 2 }}>
            Bio
          </Typography>

          <Box sx={{ ml: 44 }}>
            <TextareaAutosize
              className="textarea1"
              aria-label="minimum height"
              minRows={12}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </Box>

          <Box
            sx={{
              borderBottom: "1px solid rgba(10, 32, 46, 0.2)",
              width: "448px",
              ml: 44,
              mt: 2,
            }}
          ></Box>

          <Typography
            sx={{
              color: "rgba(10, 32, 46, 0.9)",
              fontSize: "18px",
              fontWeight: "bold",
              pl: 44,
              pb: 1,
              pt: 2,
            }}
          >
            Profile image
          </Typography>

          <Box display="flex" sx={{ mt: 1, ml: 44 }}>
            <Button className="browsefile" color="primary">
              BROWSE FILE
            </Button>
          </Box>
          <Typography
            sx={{
              color: "rgba(10, 32, 46, 0.4)",
              fontSize: "14px",
              pl: 44,
              pb: 1,
              pt: 2,
            }}
          >
            Recommended file resolution 1700x1700. Supported file <br></br>
            formats PNG, JPG. Maximum file size 10MB.
          </Typography>
          <Typography
            sx={{
              color: "rgba(10, 32, 46, 0.9)",
              fontSize: "18px",
              fontWeight: "bold",
              pl: 44,
              pb: 1,
              pt: 2,
            }}
          >
            Cover image
          </Typography>
          <Box display="flex" sx={{ mt: 1, ml: 44 }}>
            <Button className="browsefile" color="primary">
              BROWSE FILE
            </Button>
          </Box>

          <Typography
            sx={{
              color: "rgba(10, 32, 46, 0.4)",
              fontSize: "14px",
              pl: 44,
              pb: 1,
              pt: 2,
            }}
          >
            Recommended file resolution 1700x1700. Supported file <br></br>
            formats PNG, JPG. Maximum file size 10MB
          </Typography>
          <Box
            sx={{
              borderBottom: "1px solid rgba(10, 32, 46, 0.2)",
              width: "448px",
              ml: 44,
              mt: 2,
            }}
          ></Box>

          <Typography className="field-label" sx={{ pl: 44, pt: 5 }}>
            Homepage
          </Typography>
          <TextField
            className="txtfiled1"
            size="small"
            placeholder="https://"
            sx={{ ml: 44, mt: 1 }}
          ></TextField>

          <Typography className="field-label" sx={{ pl: 44, pt: 2 }}>
            Facebook Page
          </Typography>
          <TextField
            value={socialMediaLinks.facebook}
            onChange={(e) =>
              setSocialMediaLinks({
                ...socialMediaLinks,
                facebook: e.target.value,
              })
            }
            className="txtfiled1"
            size="small"
            placeholder="https://"
            sx={{ ml: 44, mt: 1 }}
          ></TextField>

          <Typography className="field-label" sx={{ pl: 44, pt: 2 }}>
            Instagram
          </Typography>
          <TextField
            value={socialMediaLinks.instagram}
            onChange={(e) =>
              setSocialMediaLinks({
                ...socialMediaLinks,
                instagram: e.target.value,
              })
            }
            className="txtfiled1"
            size="small"
            placeholder="https://"
            sx={{ ml: 44, mt: 1 }}
          ></TextField>

          <Typography className="field-label" sx={{ pl: 44, pt: 2 }}>
            Tik Tok
          </Typography>
          <TextField
            className="txtfiled1"
            size="small"
            placeholder="https://"
            sx={{ ml: 44, mt: 1 }}
          ></TextField>

          <Box
            sx={{
              borderBottom: "1px solid rgba(10, 32, 46, 0.2)",
              width: "448px",
              ml: 44,
              mt: 3,
            }}
          ></Box>

          <Grid container spacing={2} sx={{ mt: 2, px: 20 }}>
            <Grid item xs={12} sx={{ ml: 24, mb: 7 }}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  className="cancelBtn"
                  variant="contained"
                  color="primary"
                >
                  CANCEL
                </Button>
                <Link to="/yourprofileone">
                  <Button
                    className="saveBtn"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    CREATE PROFILE
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </MainWrapper>
    </Box>
  );
};

export default CreateArtistProfile;
