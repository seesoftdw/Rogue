import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Checkbox,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const TrackListing: React.FC<Props> = (props) => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  const handleCheckboxChange1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setChecked1(event.target.checked);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <Typography
        sx={{
          color: "rgba(10, 32, 46, 0.9)",
          fontSize: "18px",
          pl: 23,
          pt: 2,
          fontWeight: "bold",
        }}
      >
        Marketplace
      </Typography>
      <Checkbox
        sx={{ ml: 22, mt: 1 }}
        checked={checked}
        onChange={handleCheckboxChange}
        inputProps={{ "aria-label": "controlled" }}
      />{" "}
      Make available for purchase
      <Grid item xs={12} sx={{ ml: 1 }}>
        <Grid container>
          <Grid item xs={3}>
            <Typography
              sx={{
                color: "rgba(10, 32, 46, 0.7)",
                fontSize: "14px",
                pl: 23,
                pt: 4,
                pb: 1,
              }}
            >
              Price
            </Typography>
            <TextField
              size="small"
              sx={{
                width: "95px",
                ml: 23,
                background: "rgba(10, 32, 46, 0.05)",
              }}
            />
          </Grid>

          <Grid item xs={3}>
            <Typography
              sx={{
                color: "rgba(10, 32, 46, 0.7)",
                fontSize: "14px",
                pl: 2,
                pt: 4,
                pb: 1,
              }}
            >
              Currency
            </Typography>
            <TextField
              size="small"
              sx={{
                width: "95px",
                ml: 2,
                background: "rgba(10, 32, 46, 0.05)",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          height: "10px",
          borderBottom: "1px solid rgba(10, 32, 46, 0.2)",
          width: "736px",
          ml: 23,
          mt: 2,
        }}
      ></Box>
      <Checkbox
        sx={{ ml: 22, mt: 1 }}
        checked={checked1}
        onChange={handleCheckboxChange1}
        inputProps={{ "aria-label": "controlled" }}
      />
      Enable donations
      <Typography
        sx={{
          color: "rgba(10, 32, 46, 0.4)",
          fontSize: "14px",
          pl: 23,
          pt: 2,
          pb: 1,
        }}
      >
        Set a percentage of all of your profits from this track to be donated to
        an organization.
      </Typography>
      <Grid item xs={12} sx={{ ml: 1 }}>
        <Grid container>
          <Grid item xs={3}>
            <Typography
              sx={{
                color: "rgba(10, 32, 46, 0.7)",
                fontSize: "14px",
                pl: 23,
                pt: 4,
                pb: 1,
              }}
            >
              Percentage
            </Typography>
            <TextField
              size="small"
              sx={{
                width: "95px",
                ml: 23,
                background: "rgba(10, 32, 46, 0.05)",
              }}
            />
          </Grid>

          <Grid item xs={3}>
            <Typography sx={{ pt: 10, pl: 7 }}>
              % of all sale profits got to
            </Typography>
          </Grid>

          <Grid item xs={3}>
            <Typography
              sx={{
                color: "rgba(10, 32, 46, 0.7)",
                fontSize: "14px",
                pl: 2,
                pt: 4,
                pb: 1,
              }}
            >
              Receiver
            </Typography>
            <TextField
              size="small"
              sx={{
                width: "95px",
                ml: 2,
                background: "rgba(10, 32, 46, 0.05)",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          height: "10px",
          borderBottom: "1px solid rgba(10, 32, 46, 0.2)",
          width: "736px",
          ml: 23,
          mt: 2,
        }}
      ></Box>
      <Box sx={{ ml: 21 }}>
        <Typography
          sx={{
            color: "rgba(10, 32, 46, 0.7)",
            fontSize: "14px",
            pl: 2,
            pt: 4,
            pb: 1,
          }}
        >
          Release date
        </Typography>
        <TextField
          placeholder="MM/DD/YYYY"
          size="small"
          sx={{ width: "166px", ml: 2, background: "rgba(10, 32, 46, 0.05)" }}
        />
        <Typography
          sx={{
            color: "rgba(10, 32, 46, 0.7)",
            fontSize: "14px",
            pl: 2,
            pt: 4,
            pb: 1,
          }}
        >
          Optional
        </Typography>
        <Box
          sx={{
            height: "10px",
            borderBottom: "1px solid rgba(10, 32, 46, 0.2)",
            width: "736px",
            ml: 2,
            mt: 2,
          }}
        ></Box>
      </Box>
      <Grid item xs={12} sx={{ ml: 58, pb: 10 }}>
        <Grid container>
          <Grid item xs={3}>
            <Link to="/artisttrack">
              <Button
                sx={{
                  height: "40px",
                  width: "101px",
                  background: "rgb(255, 255, 255)",
                  fontSize: "14px",
                  color: " rgba(10, 32, 46, 0.6)",
                  fontWeight: "bold",
                  ml: 30,
                  mt: 2,
                  border: "1px solid rgba(10, 32, 46, 0.4)",
                }}
              >
                CANCEL
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Button
              sx={{
                height: "40px",
                width: "101px",
                background:
                  " linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)",
                fontSize: "14px",
                color: "white",
                fontWeight: "bold",
                ml: 23,
                mt: 2,
                border: "1px solid rgba(10, 32, 46, 0.4)",
              }}
            >
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TrackListing;
