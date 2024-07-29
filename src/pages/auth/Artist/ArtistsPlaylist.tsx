import React from 'react'
import { Box, Grid } from '@mui/material'
import Release from '../../../components/auth/Release'
import Playlist1 from '../../../assets/images/playlist1.png'
import Playlist2 from '../../../assets/images/playlist2.png'
import Playlist3 from '../../../assets/images/playlist3.png'

interface ArtistsPageProps {
    title: string;
    artist: string;
    imgSrc: string;
}

const playlists = [
    { title: 'Dreamy Future Sounds', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist1 },
    { title: 'Moonlight Symphony', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist2 },
    { title: 'Latin Jazz Fiesta', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist3 }
];

const ArtistsPlaylist: React.FC = () => {
    return (
            <Box padding={0} margin={0} mt={3}>
                <Grid container alignContent={'flex-start'} spacing={2} >
                    {playlists.map((playlist, index) => (
                        <Grid item xs={12} sm={3.8} key={index} py={0} px={0}>
                            <Release title={playlist.title} artist={playlist.artist} imgSrc={playlist.imgSrc} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        // </MainWrapper>
    );
};

export default ArtistsPlaylist