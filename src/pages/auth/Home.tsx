// MusicDashboard.tsx
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Artist from '../../components/auth/Artists';
import Release from '../../components/auth/Release';
import MainWrapper from '../../components/common/MainWrapper';
import Playlist1 from '../../assets/images/playlist1.png'
import Playlist2 from '../../assets/images/playlist2.png'
import Playlist3 from '../../assets/images/playlist3.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import Playlists from '../../components/auth/Playlists';
import { ArtistProps, ReleaseProps } from '../../types/Types';
import { useAppDispatch } from '../../store';
import { fetchArtists, fetchReleases, getAllArtists } from '../../services/artistService';
import { error } from 'console';


const playlists = [
  { title: 'Dreamy Future Sounds', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist1 },
  { title: 'Moonlight Symphony', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist2 },
  { title: 'Latin Jazz Fiesta', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist3 },
];

const Home: React.FC = () => {
  const [artists, setArtists] = useState<ArtistProps[]>([]);
  const [releases, setReleases] = useState<ReleaseProps[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const artistsResult = await dispatch(fetchArtists()).unwrap();
        console.log('Fetch artists successful', artistsResult);
        setArtists(artistsResult);
      } catch (error) {
        console.error('Fetch artists failed', error);
      }

      try {
        const releasesResult = await dispatch(fetchReleases()).unwrap();
        console.log('Fetch releases successful', releasesResult);
        setReleases(releasesResult);
      } catch (error) {
        console.error('Fetch releases failed', error);
      }
    };

    fetchData();
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getAllArtists()).then((response)=>{
  //     setArtists(response.payload);
  //   }).catch(error){
  //     console.error('faild to fetch all artists');
  //   }
  // }, [dispatch]);

  return (
    <MainWrapper>
      <Box sx={{ padding: 0 }}>
        <section>
          <Link to='Artists' style={{ textDecoration: 'none' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: 'bold', letterSpacing: '0.56px', pb: 1, color: 'black' }} variant="h4" gutterBottom>
              {'Artists'} <MdKeyboardArrowRight style={{ height: '11.66px', width: '15.28px' }} />
            </Typography>
          </Link>
          <Grid container spacing={2}>
            {artists.slice(0, 4).map((artist, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Artist name={artist.name} imgSrc={artist.imgSrc} link={artist.link} />
              </Grid>
            ))}
          </Grid>
        </section>
        <hr></hr>
        <section style={{ marginTop: '40px' }}>
          <Link to='Releases' style={{ textDecoration: 'none' }} ><Typography sx={{ fontSize: '18px', fontWeight: 'bold', letterspacing: '0.56px', pb: 1, color: 'black' }} variant="h4" gutterBottom>{'Releases '} <MdKeyboardArrowRight style={{ height: '11.66px', width: '15.28px' }} /></Typography></Link>
          <Grid container spacing={2}>
            {releases.slice(0, 4).map((release, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Release title={release.title} artist={release.artist} imgSrc={release.imgSrc} />
              </Grid>
            ))}
          </Grid>
        </section>
        <hr />
        <section style={{ marginTop: '40px' }}>
          <Link to='Playlists' style={{ textDecoration: 'none' }} ><Typography sx={{ fontSize: '18px', fontWeight: 'bold', letterspacing: '0.56px', pb: 1, color: 'black' }} variant="h4" gutterBottom>{'Playlists'}<MdKeyboardArrowRight style={{ height: '11.66px', width: '15.28px' }} /></Typography></Link>
          <Link to='/playlistprofilefirst'>
            <Grid container spacing={2} >
              {playlists.map((playlist, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Playlists title={playlist.title} artist={playlist.artist} imgSrc={playlist.imgSrc} />
                </Grid>
              ))}
            </Grid>
          </Link>
        </section>
      </Box>
    </MainWrapper>
  );
};

export default Home;
