import { Avatar, Box, Button, Typography } from '@mui/material';
import React from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import { Link } from 'react-router-dom';
import profile from '../../../assets/images/attist.png'

const YourProfile: React.FC = () => {
    return (
        <MainWrapper>
            <Box sx={{ mt: 10 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '36px', textAlign: 'center' }}>
                    Your Profiles
                </Typography>
                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                    <img src={profile} style={{ height: '130px', width: '150px' }} />
                </Box>
                <Typography variant="body1" sx={{ textAlign: 'center', p: 3, fontSize: '16px', color: 'rgb(0, 154, 255)' }}>
                    name@email.com
                </Typography>
                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            background: 'linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)',
                            height: '40px',
                            width: '183px',
                            borderRadius: '6px',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            color: 'rgb(255, 255, 255)',
                        }}
                    >
                        + ARTIST PROFILE
                    </Button>
                </Box>
            </Box>
        </MainWrapper>
    );
};

export default YourProfile;
