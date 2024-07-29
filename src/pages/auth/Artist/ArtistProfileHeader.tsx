import React from 'react';
import { Box, Typography, Avatar, Container } from '@mui/material';
import profileBG from '../../../assets/images/profile-header-artist.jpg'
import avatar1 from '../../../assets/images/artist-1.jpg'


const Header: React.FC = () => {
    return (
        <Box sx={{ height: '210px',padding:'0',margin:0 }} >
            <Box sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.8)),url(${profileBG})`,
                backgroundSize: 'cover', height: '400px',
                maxHeight: '200px'
            }}>

                <Box my={2} display={'flex'} px={'3%'} py={'5%'} mx={0}>
                    <Box>
                        <Avatar
                            alt="Royal Big Ben Orchestra"
                            src={avatar1}
                            sx={{ height: '128px', width: '128px' }}
                        />
                    </Box>

                    <Box px={'2%'} py={'3%'} color={'white'}>
                        <Box>
                            <Typography variant="h4" component="h1" fontWeight={'bold'}>
                                Royal Big Ben Orchestra
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '18px' }}>
                                United Kingdom
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;

export { };