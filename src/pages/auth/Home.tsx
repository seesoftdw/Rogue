// MusicDashboard.tsx
import { Link } from 'react-router-dom';
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Artist from '../../components/auth/Artists';
import Release from '../../components/auth/Release';
import artist1 from '../../../src/assets/images/artist-1.jpg'
import artist2 from '../../../src/assets/images/artist-2.jpg'
import artist3 from '../../../src/assets/images/artist-3.jpg'
import artist4 from '../../../src/assets/images/artist-4.jpg'
import Release1 from '../../../src/assets/images/coverart-track-6.jpg'
import Release2 from '../../../src/assets/images/coverart-track-7.jpg'
import Release3 from '../../../src/assets/images/coverart-track-3.jpg'
import Release4 from '../../../src/assets/images/coverart-track-5.jpg'
import MainWrapper from '../../components/common/MainWrapper';
import Playlist1 from '../../assets/images/playlist1.png'
import Playlist2 from '../../assets/images/playlist2.png'
import Playlist3 from '../../assets/images/playlist3.png'
import { MdKeyboardArrowRight } from "react-icons/md";

const artists = [
  { name: 'Royal Big Ben Orchestra', imgSrc: artist1 },
  { name: 'Theo Parker', imgSrc: artist2 },
  { name: 'Dahlia Cole', imgSrc: artist3 },
  { name: 'Urban Jazz Syndicate', imgSrc: artist4 },
];

const releases = [
  { title: 'Soho After Dark', artist: 'Royal Big Ben Orchestra', imgSrc: Release1 },
  { title: 'Rhythms of the Underground', artist: 'Royal Big Ben Orchestra', imgSrc: Release2 },
  { title: 'Sultry City Nights', artist: 'Royal Big Ben Orchestra', imgSrc: Release3 },
  { title: 'Silent Night\'s Serenade for the Lonely', artist: 'Royal Big Ben Orchestra', imgSrc: Release4 },
];

const playlists = [
  { title: 'Dreamy Future Sounds', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist1 },
  { title: 'Moonlight Symphony', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist2 },
  { title: 'Latin Jazz Fiesta', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist3 },
];

const Home: React.FC = () => {
  return (
    <MainWrapper>
      <Box sx={{ padding: 0 }}>
        <section>
          <Link to='Artists'  style={{ textDecoration: 'none' }}><Typography sx={{ fontSize: '18px', fontWeight: 'bold', letterspacing: '0.56px', pb: 1 , color : 'black'  }} variant="h4" gutterBottom>{'Artists'} <MdKeyboardArrowRight  style={{ height: '11.66px' , width: '15.28px;' }}/></Typography></Link>
          <Grid container spacing={2} >
            {artists.map((artist, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Artist name={artist.name} imgSrc={artist.imgSrc} />
              </Grid>
            ))}
          </Grid>
        </section>
        <hr></hr>
        <section style={{ marginTop: '40px' }}>
          <Link to =  'All-Releases' style={{ textDecoration: 'none' }} ><Typography sx={{ fontSize: '18px', fontWeight: 'bold', letterspacing: '0.56px', pb: 1 ,  color : 'black'  }} variant="h4" gutterBottom>{'Releases '} <MdKeyboardArrowRight style={{ height: '11.66px' , width: '15.28px;' }} /></Typography></Link>
          <Grid container spacing={2}>
            {releases.map((release, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Release title={release.title} artist={release.artist} imgSrc={release.imgSrc} />
              </Grid>
            ))}
          </Grid>
        </section>
        <hr />
        <section style={{ marginTop: '40px' }}>
          <Link to='All-Playlists' style={{ textDecoration: 'none' }} ><Typography sx={{ fontSize: '18px', fontWeight: 'bold', letterspacing: '0.56px', pb: 1 , color : 'black'  }} variant="h4" gutterBottom>{'Playlists'}<MdKeyboardArrowRight  style={{ height: '11.66px' , width: '15.28px;' }} /></Typography></Link>
          <Grid container spacing={2}>
            {playlists.map((playlist, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Release title={playlist.title} artist={playlist.artist} imgSrc={playlist.imgSrc} />
              </Grid>
            ))}
          </Grid>
        </section>
      </Box>
    </MainWrapper>
  );
};

export default Home;
