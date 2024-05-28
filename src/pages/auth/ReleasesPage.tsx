import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import MainWrapper from '../../components/common/MainWrapper'
import CustomBreadcrumbs from '../../components/common/Breadcrumbs'
import Release from '../../components/auth/Release'
import Release1 from '../../src/assets/images/coverart-track-6.jpg'
import Release2 from '../../src/assets/images/coverart-track-7.jpg'
import Release3 from '../../src/assets/images/coverart-track-3.jpg'
import Release4 from '../../src/assets/images/coverart-track-5.jpg'

import Release5 from '../assets/images/coverart-track-1.jpg'
import Release6 from '../assets/images/coverart-track-2.jpg'




interface ArtistsPageProps {
    title: string;
    artist: string;
    imgSrc: string;
}

const releases = [
    { title: 'Soho After Dark', artist: 'Royal Big Ben Orchestra', imgSrc: Release1 },
    { title: 'Rhythms of the Underground', artist: 'Royal Big Ben Orchestra', imgSrc: Release2 },
    { title: 'Sultry City Nights', artist: 'Royal Big Ben Orchestra', imgSrc: Release3 },
    { title: 'Silent Night\'s Serenade for the Lonely', artist: 'Royal Big Ben Orchestra', imgSrc: Release4 },

    { title: 'Sultry City Nights', artist: 'Royal Big Ben Orchestra', imgSrc: Release5 },
    { title: 'Silent Night\'s Serenade for the Lonely', artist: 'Royal Big Ben Orchestra', imgSrc: Release6 },
];

const ArtistsPage: React.FC = () => {
    return (
        <MainWrapper>
            <Box>
                <Box sx={{ mb: 2 }}>
                    <CustomBreadcrumbs />
                </Box>

                <section>
                    <Typography variant="h5" gutterBottom sx={{ fontSize: '36px', textDecoration: 'none', color: 'Black', fontWeight: 'bold' }}>{'Release'}</Typography>
                    <Grid container spacing={2}>
                        {releases.map((release, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Release title={release.title} artist={release.artist} imgSrc={release.imgSrc} />
                            </Grid>
                        ))}
                    </Grid>
                </section>
            </Box>
        </MainWrapper>
    );
};

export default ArtistsPage