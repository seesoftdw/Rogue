import React from 'react';
import { Box, Grid, Typography  , Button} from '@mui/material';
import Release from '../../../components/auth/Release';
import Releases1 from '../../../assets/images/coverart-track-6.jpg';
import Releases2 from  '../../../assets/images/coverart-track-7.jpg';
import Releases3 from  '../../../assets/images/coverart-track-3.jpg';
import Releases4 from  '../../../assets/images/coverart-track-5.jpg';
import Releases5 from  '../../../assets/images/coverart-track-1.jpg';
import Releases6 from  '../../../assets/images/coverart-track-2.jpg';
import Artist4 from '../../../assets/images/artist-4.jpg';
import MainWrapper from '../../../components/common/MainWrapper';
import CustomBreadcrumbs from '../../../components/common/Breadcrumbs';
import { Link } from 'react-router-dom';



const releases = [
    { title: 'Soho After Dark', artist: 'Royal Big Ben Orchestra', imgSrc: Releases1},
    { title: 'Rhythms of the Underground', artist: 'Royal Big Ben Orchestra', imgSrc: Releases2 },
    { title: 'Sultry City Nights', artist: 'Royal Big Ben Orchestra', imgSrc: Releases3 },
    { title: 'Silent Nights Serenade for the Lonely', artist: 'Royal Big Ben Orchestra', imgSrc: Releases4 }
];

const morePlaylists = [
    { title: 'Mellow Silhouette Rhapsody', artist: 'Royal Big Ben Orchestra', imgSrc: Releases5 },
    { title: 'Smooth Moonlight Symphony', artist: 'Royal Big Ben Orchestra', imgSrc: Releases6 },
  
];

const BritschoolArtistProfile: React.FC = () => {
    return (
        <>
            <MainWrapper>
                <Typography sx = {{fontSize : '36px' , fontWeight : 'bold'}}>Releases</Typography>
                 <Box>
                    <CustomBreadcrumbs />
                </Box>
                <Box padding={0} margin={0} mt={3} sx={{ height: '240px', mb: 15 }}>
                    <Grid container alignContent={'flex-start'} spacing={2}>
                        {releases.map((releases, index) => (
                            <Grid item xs={12} sm={3} key={index} py={0} px={0}>
                                <Release title={releases.title} artist={releases.artist} imgSrc={releases.imgSrc} />
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
