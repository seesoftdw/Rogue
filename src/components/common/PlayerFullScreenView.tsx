import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import {
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { PlayCircleFilled } from "@mui/icons-material";

interface Track {
  url: string;
  song?: string;
  artist?: string;
  poster?: string;
}

interface PlayerProps {
  playlist: Track[];
  open: boolean;
  poster?: string;
  currentIndex: number;
}

export default function PlayerFullScreenView(props: PlayerProps) {
  const [open, setOpen] = React.useState(props.open);
  const { playlist, currentIndex } = props;

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

      setOpen(open ? true : false);
    };

  return (
    <div>
      <React.Fragment>
        <SwipeableDrawer
          anchor="top"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            display="flex"
            flexDirection="column"
            role="presentation"
            justifyContent={"space-between"}
            alignItems={"center"}
            height={'100%'}
          >
            <Grid container spacing={2} sx={{ margin: 0 }}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  mt: 16
                }}
              >
                <img src={props.poster} alt="Poster" height={300} width={300}/>
                <Typography variant="h5" sx={{mt: 5}}>
                  {`${playlist[currentIndex].song} - ${playlist[currentIndex].artist}`}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <List className={"song-queue"}>
                  <Typography variant="h5" gutterBottom>
                    Queue
                  </Typography>
                  <Divider />
                  {props.playlist.map((track) => (
                    <ListItem key={track.song}>
                        <ListItemIcon>
                            <PlayCircleFilled  fontSize="large" color="primary"/>
                        </ListItemIcon>
                      <ListItemText primary={track.song} secondary={track.artist}/>
                    </ListItem>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
