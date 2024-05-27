import { Box, Container, Tab, Tabs } from '@mui/material';
import React from 'react'
import Header from './ArtistProfileHeader';
import Tracks from './Tracks';
import MainWrapper from '../../components/MainWrapper';
import CustomBreadcrumbs from '../../components/Breadcrumbs';

type Props = {}

const ArtistProfile = (props: Props) => {
    const [tabValue, setTabValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };
    return (
        <MainWrapper>
            <Container maxWidth="lg">
                <CustomBreadcrumbs />
                <Header />
                <Tabs value={tabValue} onChange={handleChange}>
                    <Tab label="All" />
                    <Tab label="Tracks" />
                    <Tab label="Playlists" />
                </Tabs>
                {tabValue === 0 && <Box><Tracks /></Box>}
                {tabValue === 1 && <Tracks />}
                {/* {tabValue === 2 && < Playlists />} */}
                {/* <Footer /> */}
            </Container>
        </MainWrapper>
    )
}

export default ArtistProfile