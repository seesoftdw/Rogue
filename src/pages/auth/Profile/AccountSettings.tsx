import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import React from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import { Link } from 'react-router-dom';
import "./styles.scss"

type Props = {};

const AccountSettings: React.FC<Props> = (props) => {

    return (
        <Box className="accountSettings">
            <MainWrapper>
                <Typography className='main-heading' sx={{ pt: 3 }}>
                    Account settings
                </Typography>
                <Typography className='fields' sx={{ pl: 43, pt: 4, pb: 1, }}>
                    Email
                </Typography>

                <TextField placeholder='name@email.com' size='small' sx={{ mb: 2, ml: 43, width: '448px', background: 'rgba(10, 32, 46, 0.05)' }} />
                <Typography variant='h6' sx={{  pt : 3 , pb : 1 ,  pl: 43, fontWeight: 'bold', color: 'rgba(10, 32, 46, 0.7)' }}>Change Password</Typography>
                <Typography className='fields' sx={{ pl: 43, pt: 2, pb: 1 }}>
                   Current password
                </Typography>
                <TextField size='small' sx={{ ml: 43, width: '448px', background: 'rgba(10, 32, 46, 0.05)' }} />
                <Typography className='fields' sx={{ pl: 43, pt: 2, pb: 1 }}>
                   New password
                </Typography>
                <TextField size='small' sx={{ ml: 43, width: '448px', background: 'rgba(10, 32, 46, 0.05)' }} />
                <Typography className='fields' sx={{ pl: 43, pt: 2, pb: 1 }}>
                    Confirm new password
                </Typography>
                <TextField size='small' sx={{ ml: 43, width: '448px', background: 'rgba(10, 32, 46, 0.05)' }} />

                <Box sx={{ border: '1px solid rgba(10, 32, 46, 0.2)', width: '448px', ml: 43, mt: 3 }}></Box>

                <Grid item xs={12} sx={{ ml: 38, mb: 10, mt: 2 }}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Button className='cancelBtn' sx={{ ml: 35, mt: 2 }}>CANCEL</Button>
                        </Grid>
                        <Link to=''>
                            <Grid item xs={2} sx = {{ mb : 13}}>
                                <Button className='saveBtn' sx={{ ml: 23, mt: 2, }}>SAVE</Button>
                            </Grid>
                        </Link>
                    </Grid>
                </Grid>
            </MainWrapper>
        </Box>
    );
};

export default AccountSettings;
