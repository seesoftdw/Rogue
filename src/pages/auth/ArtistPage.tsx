import React from 'react'
import artist1 from '../../../src/assets/images/artist-1.jpg'
import artist2 from '../../../src/assets/images/artist-2.jpg'
import artist3 from '../../../src/assets/images/artist-3.jpg'
import artist4 from '../../../src/assets/images/artist-4.jpg'
import artist5 from '../../../src/assets/images/artist-5.jpg'
import artist6 from '../../../src/assets/images/artist-6.jpg'
import { Box, Grid, Typography } from '@mui/material'
import MainWrapper from '../../components/common/MainWrapper'
import Artists from '../../components/auth/Artists'
import CustomBreadcrumbs from '../../components/common/Breadcrumbs'

interface ArtistsPageProps {
    title: string;
    artist: string;
    imgSrc: string;
}

const artists = [
    { name: 'Royal Big Ben Orchestra', imgSrc: artist1 ,link:'Profile'},
    { name: 'Theo Parker', imgSrc: artist2 ,link:'Profile'},
    { name: 'Dahlia Cole', imgSrc: artist3 ,link:'Profile'},
    { name: 'Urban Jazz Syndicate', imgSrc: artist4 ,link:'Profile'},
    { name: 'Finnley Calloway', imgSrc: artist5 ,link:'Profile'},
    { name: 'Celeste Holiday', imgSrc: artist6 ,link:'Profile'},
];

const ArtistsPage: React.FC = () => {
    return (
        <MainWrapper>
            <Box>
                <Box sx={{ mb: 2 }}>
                    <CustomBreadcrumbs />
                </Box>

                <section>
                    <Typography variant="h4" gutterBottom sx={{   fontSize: '36px', textDecoration: 'none', color: 'Black', fontWeight: 'bold' }}>{'Artists'}</Typography>
                    <Grid container spacing={2}>
                        {artists.map((artist, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Artists name={artist.name} imgSrc={artist.imgSrc} link={artist.link}/>
                            </Grid>
                        ))}
                    </Grid>
                </section>
            </Box>
        </MainWrapper>
    );
};

export default ArtistsPage