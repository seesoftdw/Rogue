import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import MainWrapper from '../../components/common/MainWrapper'
import CustomBreadcrumbs from '../../components/common/Breadcrumbs'
import Release from '../../components/auth/Release'
import Playlist1 from '../../assets/images/playlist1.png'
import Playlist2 from '../../assets/images/playlist2.png'
import Playlist3 from '../../assets/images/playlist3.png'

interface ArtistsPageProps {
    title: string;
    artist: string;
    imgSrc: string;
}

const playlists = [
    { title: 'Dreamy Future Sounds', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist1 },
    { title: 'Moonlight Symphony', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist2 },
    { title: 'Latin Jazz Fiesta', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist3 },
];

const ArtistsPage: React.FC = () => {
    return (
        <MainWrapper>
            <Box >
                <Box sx={{ mb: 2, flexGrow: 0 }}>
                    <CustomBreadcrumbs />
                </Box>
                <Typography sx={{ fontSize: '36px', fontWeight: 'bold', letterspacing: '0.56px', pb: 1, color: 'Black' }} variant="h4" gutterBottom> {'Playlists'}</Typography>
                <Grid container spacing={2}>
                    {playlists.map((playlist, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} className='main-playlists-page'>
                            <Release title={playlist.title} artist={playlist.artist} imgSrc={playlist.imgSrc} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </MainWrapper>
    );
};

export default ArtistsPage