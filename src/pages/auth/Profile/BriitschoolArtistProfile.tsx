import React from 'react';
import { Box, Grid, Typography  , Button} from '@mui/material';
import Release from '../../../components/auth/Release';
import Artist1 from '../../../assets/images/artist-1.jpg';
import Artist2 from '../../../assets/images/artist-2.jpg';
import Artist3 from '../../../assets/images/artist-3.jpg';
import Artist5 from '../../../assets/images/artist-5.jpg';
import Artist6 from '../../../assets/images/artist-6.jpg';
import Artist4 from '../../../assets/images/artist-4.jpg';
import MainWrapper from '../../../components/common/MainWrapper';
import CustomBreadcrumbs from '../../../components/common/Breadcrumbs';
import { Link } from 'react-router-dom';



const playlists = [
    { title: 'Royal Big Ben Orchestra', artist: '', imgSrc: Artist1 },
    { title: 'Theo Parker', artist: '', imgSrc: Artist2 },
    { title: 'Dahlia Cole', artist: '', imgSrc: Artist3 },
    { title: 'Urban Jazz Syndicate', artist: '', imgSrc: Artist4 }
];

const morePlaylists = [
    { title: 'Finnley Calloway', artist: '', imgSrc: Artist5 },
    { title: 'Celeste Holiday', artist: '', imgSrc: Artist6 },
  
];

const BritschoolArtistProfile: React.FC = () => {
    return (
        <>
            <MainWrapper>
                <Typography sx = {{fontSize : '36px' , fontWeight : 'bold'}}>Artists</Typography>
                 <Box>
                    <CustomBreadcrumbs />
                </Box>
                <Box padding={0} margin={0} mt={3} sx={{ height: '240px', mb: 11 }}>
                    <Grid container alignContent={'flex-start'} spacing={2}>
                        {playlists.map((playlist, index) => (
                            <Grid item xs={12} sm={3} key={index} py={0} px={0}>
                                <Release title={playlist.title} artist={playlist.artist} imgSrc={playlist.imgSrc} />
                            </Grid>
                            
                        ))}
                    </Grid>
                </Box>
                <Box padding={0} margin={0} mt={1} sx={{ height: '240px' }}>
                    <Grid container alignContent={'flex-start'} spacing={2}>
                        {morePlaylists.map((playlist, index) => (
                            <Grid item xs={12} sm={3} key={index} py={0} px={0}>
                                <Release title={playlist.title} artist={playlist.artist} imgSrc={playlist.imgSrc} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

               

            </MainWrapper>
        </>
    );
};

export default BritschoolArtistProfile;
