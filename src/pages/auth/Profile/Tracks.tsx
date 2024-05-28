import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import track1 from '../../../assets/images/coverart-track-1.jpg'
import track2 from '../../../assets/images/coverart-track-2.jpg'
import track3 from '../../../assets/images/coverart-track-3.jpg'
import track4 from '../../../assets/images/coverart-track-4.jpg'
import track5 from '../../../assets/images/coverart-track-5.jpg'
import track6 from '../../../assets/images/coverart-track-6.jpg'
import track7 from '../../../assets/images/coverart-track-7.jpg'

const tracks = [
  { title: 'Mellow Silhouette Rhapsody', image: track1 },
  { title: 'Smooth Moonlight Symphony', image: track2 },
  { title: 'Sultry City Nights', image: track3 },
  { title: 'Silent Night\'s Serenade for the Lonely', image: track4 },
  { title: 'Silent Silhouette Affair', image: track5 },
  { title: 'Silent Silhouette Affair', image: track6 },
  { title: 'Silent Silhouette Affair', image: track7 },
];

const Tracks: React.FC = () => {
  return (
    <Box my={4}>
      <Typography variant="h5" component="h2" gutterBottom>
        Tracks
      </Typography>
      <Grid container spacing={4}>
        {tracks.map((track) => (
          <Grid item xs={12} sm={6} md={4} key={track.title}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={track.image}
              />
              <CardContent>
                <Typography variant="h6">{track.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Tracks;

{/* <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://via.placeholder.com/345x140" // Replace with your image URL
        alt="Album cover"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mellow Silhouette Rhapsody
        </Typography>
      </CardContent>
    </Card> */}