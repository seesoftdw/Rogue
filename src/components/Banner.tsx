import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bannerBg from '../assets/images/banner.png'
import { Button } from '@mui/material';

interface BannerProps {
    open: boolean;
}

const Banner: React.FC = () => {
    return (
        <Box
            sx={{
                height: '400px',
                width: '100%',
                padding: '10px',
                background: `url(${bannerBg})`,
                backgroundSize: 'cover',
                textAlign: 'center',
                top: 0,
            }}
        >
            <Typography variant="h5" mt={20} sx={{ fontWeight: 'bold', color: 'white', letterSpacing: 2 }}>Sounds Of Success<br />
                Where Fans Fuel The Music</Typography>
            <Box gap={8} mt={2}>
                <Button sx={{ color: 'black', background: 'white', mx: 2 }} variant="contained">Sign In</Button>
                <Button sx={{ mx: 2 }} variant="contained">Sign Up</Button>
            </Box>
        </Box>
    );
};

export default Banner;
