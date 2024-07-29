import React from 'react';
import { Box, Typography, Avatar, Container } from '@mui/material';
import BritschoolBG from '../../../assets/images/profile-header-school.jpg'
import britschoollogo from '../../../assets/images/britSchool.png'
import { Link } from 'react-router-dom';


const BritSchoolHeader: React.FC = () => {
    return (
        <Box sx={{ height: '210px', padding: '0', margin: 0 }} >
            <Box sx={{
                backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.8)),url(${BritschoolBG})`,
                backgroundSize: 'cover', height: '400px',
                maxHeight: '340px',

            }}>

                <Link to = '/thebritschoolinnerprofile'>
                    <Box my={2} display={'flex'} px={'3%'} py={'5%'} mx={0} >
                        <Box sx={{ mt: 18 }}>
                            <Avatar
                                alt="Royal Big Ben Orchestra"
                                src={britschoollogo}
                                sx={{ height: '128px', width: '128px' }}
                            />
                        </Box>

                        <Box px={'2%'} py={'3%'} color={'white'} sx={{ mt: 18 }}>
                            <Box>
                                <Typography variant="h4" component="h1" fontWeight={'bold'}>
                                    The Brit School
                                </Typography>
                            </Box>
                            <Box>
                                <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '18px' }}>
                                    United Kingdom
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Link>
            </Box>
        </Box>
    );
};

export default BritSchoolHeader;

export { };