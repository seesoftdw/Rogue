import { Avatar, Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import { Link } from 'react-router-dom';

const ManageProfile: React.FC = () => {
    return (
        <MainWrapper>
            <Box sx={{ mt: 1 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '36px', textAlign: 'center' }}>
                    Edit Profile
                </Typography>

                <Box sx={{ mt: 5 }}>
                    <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 43, pb: 1 }}>First name</Typography>
                    <TextField size='small' sx={{ background: 'rgba(10, 32, 46, 0.05)', ml: 43, borderRadius: '4px', width: '448px' }}></TextField>
                </Box>
                <Box sx={{ mt: 3 }}>
                    <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 43, pb: 1 }}>Last name</Typography>
                    <TextField size='small' sx={{ background: 'rgba(10, 32, 46, 0.05)', ml: 43, borderRadius: '4px', width: '448px' }}></TextField>
                </Box>

                <Box sx={{ borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '448px', ml: 43, mt: 4 }}></Box>
                <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '18px', fontWeight: 'bold', pl: 43, pb: 1, pt: 2 }}>Profile image</Typography>

                <Box display="flex" sx={{ mt: 1, ml: 43, }}>
                    <Button
                        // variant="contained"
                        color="primary"
                        sx={{
                            background: 'rgb(255, 255, 255)',
                            height: '28px',
                            width: '112px',
                            borderRadius: '6px',
                            fontSize: '10px',
                            fontWeight: 'bold',
                            color: ' rgba(10, 32, 46, 0.6)',
                            border: '1px solid rgba(10, 32, 46, 0.4)'
                        }}
                    >
                        BROWSE FILE
                    </Button>
                </Box>

                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 43, pb: 1, pt: 2 }}>Recommended file resolution 1700x1700. Supported file  <br></br>formats PNG, JPG. Maximum file size 10MB.</Typography>
                <Box sx={{ borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '448px', ml: 43, mt: 3 }}></Box>


                <Box display="flex" justifyContent="center" sx={{ mt: 3, gap: 2, ml: 30 }}>
                    <Button

                        color="primary"
                        sx={{
                            background: 'rgb(255, 255, 255)',
                            height: '40px',
                            width: '101px',
                            borderRadius: '7px',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: 'rgba(10, 32, 46, 0.6)',
                            border: '1px solid rgba(10, 32, 46, 0.4)'
                        }}
                    >
                        CANCEL
                    </Button>
                    <Link to='/yourprofiles'>
                        <Button
                            sx={{
                                height: '40px',
                                width: '101px',
                                borderRadius: '7px',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: 'rgb(255, 255, 255)',
                                background: 'linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)',
                            }}
                        >
                            SAVE
                        </Button>
                    </Link>
                </Box>


            </Box>
        </MainWrapper>
    );
};

export default ManageProfile;
