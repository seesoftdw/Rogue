import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bannerBg from '../../assets/images/banner.png'
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
            <Typography variant="h5" mt={10} sx={{ fontWeight: 'bold', color: 'white', letterSpacing: 2 , fontSize : '42px' }}>Sounds Of Success<br />
                Where Fans Fuel The Music</Typography>
            <Box gap={8} mt={4} sx ={{border : ' 1px solid rgba(10, 32, 46, 0.4)' ,borderRadius : '7px'}}>
                <Button sx={{ background: 'white', mx: 2  , height : '40px' , width : '212px' ,fontSize : '16px' , color : 'rgba(10, 32, 46, 0.6)' ,fontWeight : 'bold'}} variant="contained">Sign In</Button>
                <Button sx={{ mx: 2 , height : '40px' , width : '212px'  ,fontSize : '16px' , color : 'white' ,fontWeight : 'bold' }} variant="contained">Sign Up</Button>
            </Box>
        </Box>
    );
};

export default Banner;
