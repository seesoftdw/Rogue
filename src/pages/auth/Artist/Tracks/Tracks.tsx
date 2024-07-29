import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import track1 from '../../../../assets/images/coverart-track-1.jpg'
import track2 from '../../../../assets/images/coverart-track-2.jpg'
import track3 from '../../../../assets/images/coverart-track-3.jpg'
import track4 from '../../../../assets/images/coverart-track-4.jpg'
import track5 from '../../../../assets/images/coverart-track-5.jpg'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { getTrackList } from '../../../../services/trackService';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../store';

const tracks = [
  { title: 'Mellow Silhouette Rhapsody', image: track1 },
  { title: 'Smooth Moonlight Symphony', image: track2 },
  { title: 'Sultry City Nights', image: track3 },
  { title: 'Silent Night\'s Serenade for the Lonely', image: track4 },
  { title: 'Silent Silhouette Affair', image: track5 },
];


const Tracks: React.FC = () => {

  return (
    <Box my={4}>
      <Typography sx={{ fontSize: '18px' }} variant="h5" component="h2" gutterBottom>
        Tracks <MdKeyboardArrowRight style={{ height: '11.66px', width: '15.28px' }} /> 
      </Typography>
      <Grid container spacing={4}>
        {tracks.map((track) => (
          <Grid sx={{ fontSize: '16px', fontWeight: 600 }} item xs={12} sm={6} md={4} key={track.title}>
            <Link to='/trackprofile'>
              <Card sx={{ display: 'flex', boxShadow: 'none' }}>
                <Box>
                  <CardMedia
                    component="img"
                    height="71px"
                    width="71px"
                    image={track.image}
                  />
                </Box>

                <Box height={'40px'} width={'166px'} sx={{ boxShadow: 'none', border: 'none' }}>
                  <CardContent sx={{ boxShadow: 'none', border: 'none'}}>
                    <Typography fontSize={'16px'} fontWeight={'500'} variant="h6" p={0}>{track.title}</Typography>
                  </CardContent>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box >
  );
};

export default Tracks;
