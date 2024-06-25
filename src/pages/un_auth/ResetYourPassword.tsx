import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import MainWrapper from '../../components/common/MainWrapper';
import { Link, useNavigate } from 'react-router-dom';
import { resetPassword } from '../../services/userService';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';

const theme = createTheme();

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Added this state for password
    const [open, setOpen] = useState(true);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate(); // Added useNavigate hook for navigation

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(resetPassword({ email, new_password: password })) // Corrected new_password
            .then(() => {
                console.log('Password reset instructions sent');
                navigate('/resetpasswordconfirmation'); // Navigate to confirmation page
            })
            .catch((error) => {
                console.error('Error resetting password:', error);
            });
    };

    return (
        <MainWrapper>
            <ThemeProvider theme={theme}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />

                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ ml: 45, boxShadow: 'none' }}>
                        <Box
                            sx={{
                                my: 0,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                <Box sx={{ fontSize: '36px', fontWeight: 'bold' }}>Reset your password</Box>
                            </Typography>
                            <Typography sx={{ fontSize: '11px', letterSpacing: '0.5px', pt: 3 }}>Password reset instructions sent.</Typography>
                            <Typography sx={{ fontSize: '11px', letterSpacing: '0.5px' }}> Please check your email.</Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <Box sx={{ fontSize: '14px', color: ' rgba(10, 32, 46, 0.7)' }}>Email Address</Box>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ backgroundColor: 'rgba(10, 32, 46, 0.05)' }}
                                />
                                <Box sx={{ fontSize: '14px', color: ' rgba(10, 32, 46, 0.7)' }}>New Password</Box>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    sx={{ backgroundColor: 'rgba(10, 32, 46, 0.05)' }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    sx={{ mt: 3, mb: 2, background: 'linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)' }}
                                >
                                    <Box sx={{ color: 'white' }}>SEND INSTRUCTIONS</Box>
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to="/signin" className='links'>
                                            <Box sx={{ textAlign: 'center', paddingTop: '4%', fontSize: '16px' }}>Return to log in</Box>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </MainWrapper>
    );
};

export default ResetPassword;
