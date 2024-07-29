import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import MainWrapper from '../../components/common/MainWrapper'
import CustomBreadcrumbs from '../../components/common/Breadcrumbs'
import Release from '../../components/auth/Release'
import { useAppDispatch } from '../../store'
import { fetchReleases } from '../../services/artistService'
import { ReleaseProps } from '../../types/Types'

const ArtistsPage: React.FC = () => {
    const [releases, setReleases] = useState<ReleaseProps[]>([]);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const fetchData = async () => {
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