import React from 'react';
import { Box, Typography, Avatar, Container } from '@mui/material';
import profileBG from '../../assets/images/profile-header-artist.jpg'
import avatar1 from '../../assets/images/artist-1.jpg'


const Header: React.FC = () => {
    return (
        <Container sx={{backgroundImage: `url(${profileBG})`,
        backgroundSize: 'cover',}}>
            <Box my={4}>
                <Avatar
                    alt="Royal Big Ben Orchestra"
                    src={avatar1}
                />
                <Typography variant="h4" component="h1">
                    Royal Big Ben Orchestra
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    United Kingdom
                </Typography>
            </Box>
        </Container>
    );
};

export default Header;

export { };