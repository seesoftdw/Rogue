import { Box, Grid, Typography, TextField, createTheme, ListItemIcon, Button } from '@mui/material';
import React from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import { Link } from 'react-router-dom';

type Props = {};

const AccountSettings: React.FC<Props> = (props) => {

    return (
        <Box>
            <MainWrapper>
                <Typography sx={{ color: 'rgb(10, 32, 46)', fontSize: '36px', textAlign: 'center', fontWeight: 'bold', pt: 3 }}>Account settings</Typography>
                <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 43, pt: 4, pb: 1 }}>Email</Typography>
                <TextField placeholder='name@email.com' size='small' sx={{ ml: 43, width: '448px', background: 'rgba(10, 32, 46, 0.05)' }}></TextField>
                <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 43, pt: 2, pb: 1 }}>Password</Typography>
                <TextField size='small' sx={{ ml: 43, width: '448px', background: 'rgba(10, 32, 46, 0.05)' }}></TextField>
                <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 43, pt: 2, pb: 1 }}>Re-enter Password</Typography>
                <TextField size='small' sx={{ ml: 43, width: '448px', background: 'rgba(10, 32, 46, 0.05)' }}></TextField>
                <Box sx={{ border: '1px solid rgba(10, 32, 46, 0.2)', width: '448px', ml: 43, mt: 3 }}></Box>

                <Grid item xs={12} sx={{ ml: 38, mb: 10, mt: 2 }}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Button sx={{ height: '40px', width: '101px', background: 'rgb(255, 255, 255)', fontSize: '16px', color: ' rgba(10, 32, 46, 0.6)', fontWeight: 'bold', ml: 35, mt: 2, border: '1px solid rgba(10, 32, 46, 0.4)', borderRadius: '7px' }}>CANCEL</Button>
                        </Grid>

                        <Link to=''>
                            <Grid item xs={2}>
                                <Button sx={{ height: '40px', width: '101px', background: ' linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)', fontSize: '16px', color: 'white', fontWeight: 'bold', ml: 23, mt: 2, border: '1px solid rgba(10, 32, 46, 0.4)', borderRadius: '7px' }}>SAVE</Button>
                            </Grid>
                        </Link>
                    </Grid>
                </Grid>
            </MainWrapper>
        </Box>
    );
};

export default AccountSettings;
