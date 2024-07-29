import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import bannerBg from '../../assets/images/bannerimage.jpg'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
            <Typography variant="h5" mt={13} sx={{ fontWeight: 'bold', color: 'white', letterSpacing: 2 ,fontSize : '40px' }}>Sounds Of Success<br />
                Where Fans Fuel The Music</Typography>
            <Box gap={8} mt={4}>
                <Link to='/signin'><Button sx={{ background: 'rgb(255, 255, 255)', mx: 2  , height :'40px' ,width : '210px'  , borderRadius : '6px'  , border : ' 1px solid rgba(10, 32, 46, 0.25)', fontSize : '16px' , fontWeight : 'bold' ,color : 'rgba(10, 32, 46, 0.6)'}} variant="contained">Sign In</Button></Link>
                <Link to='/signup'><Button sx={{ mx: 2  , height :'40px' ,width : '210px' , background : ' linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)' , borderRadius : '6px'  , border : ' 1px solid rgba(10, 32, 46, 0.25)', fontSize : '16px' , fontWeight : 'bold'}} variant="contained">Sign Up</Button></Link>
            </Box>
        </Box>
    );
};

export default Banner;
