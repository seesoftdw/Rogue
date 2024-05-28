import React from 'react';
import { Box, Typography, Avatar, Container ,Grid  } from '@mui/material';
import profileBG from '../../../assets/images/banner.jpeg'
import avatar1 from '../../../assets/images/artist-1.jpg'


const Header: React.FC = () => {
    return (
        <Container sx={{ backgroundImage: `url(${profileBG})` , height: '340px', width: '1116px', backgroundSize: 'cover', }}>
            <Box className='row' sx={{ py: 2 }}>
                <Grid container spacing={2} alignItems="center" sx ={{ mt : 20}}>
                    <Grid item xs={12} sm={2}>
                        <Avatar
                            sx={{ height: '128px', width: '128px' }}
                            alt="Royal Big Ben Orchestra"
                            src={avatar1}
                        />
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Typography component="h1" sx={{ fontSize: '36px', fontWeight: 'bold', color: 'rgb(255, 255, 255)' }}>
                            Royal Big Ben Orchestra
                        </Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.8)' }}>
                            United Kingdom
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Header;

export { };