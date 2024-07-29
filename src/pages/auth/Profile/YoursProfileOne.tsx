import {  Box, Button, Typography, Grid } from '@mui/material';
import React from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import picture1 from '../../../assets/images/attist.png'
import picture2 from '../../../assets/images/avatar-artist.jpg'
import { Link } from 'react-router-dom';

const YourProfileOne: React.FC = () => {
    return (
        <MainWrapper>
            <Box sx={{ mt: 10 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '36px', textAlign: 'center' }}>
                    Your Profiles
                </Typography>
                <Grid container spacing={2} sx={{ mt: 2, px: 20, }}>
                    <Grid item xs={12} sx={{ ml: 25 }}>
                        <Box sx={{ display: 'flex', gap: 10 }}>
                            <Box >
                                <img src={picture1} alt="Image 1" style={{ width: '150px', height: '130px' }} />
                                <Typography  sx={{ pt: 3, fontSize: '16px', color: 'rgb(0, 154, 255)' ,  }}>Firstname Lastname</Typography>

                            </Box>
                            <Box >
                                <img src={picture2} alt="Image 2" style={{ width: '129px', height: '129px', borderRadius: '70px' }} />
                                <Typography sx={{ pt: 3, fontSize: '16px', color: 'rgb(0, 154, 255)' }}>Royal Big Ben Orchestra</Typography>

                            </Box>
                        </Box>
                    </Grid>
                    <Link to='/editartistprofiletwo'>
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
                                mt: 7,
                                ml: 40
                            }}
                        >
                            + ARTIST PROFILE
                        </Button>
                    </Link>
                </Grid>
            </Box>
        </MainWrapper>
    );
};

export default YourProfileOne;
