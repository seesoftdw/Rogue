import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import MainWrapper from '../../components/common/MainWrapper'
import Artists from '../../components/auth/Artists'
import CustomBreadcrumbs from '../../components/common/Breadcrumbs'
import { ArtistProps } from '../../types/Types'
import { useAppDispatch } from '../../store'
import { fetchArtists } from '../../services/artistService'


const ArtistsPage: React.FC = () => {
    const [artists, setArtists] = useState<ArtistProps[]>([]);
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
                    <Typography variant="h4" gutterBottom sx={{ fontSize: '36px', textDecoration: 'none', color: 'Black', fontWeight: 'bold' }}>{'Artists'}</Typography>
                    <Grid container spacing={2}>
                        {artists.map((artist, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Artists name={artist.name} imgSrc={artist.imgSrc} link={artist.link} />
                            </Grid>
                        ))}
                    </Grid>
                </section>
            </Box>
        </MainWrapper>
    );
};

export default ArtistsPage