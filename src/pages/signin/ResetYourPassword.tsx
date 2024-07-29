import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import MainWrapper from '../../components/common/MainWrapper';
import { Link, useNavigate } from 'react-router-dom';
// import { resetPassword } from '../../services/userService';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import GenericSnackbar from '../../components/common/Snackbar';

const theme = createTheme();

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(true);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'info' | 'warning' | 'error'>('info');

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setEmailError('');
        setPasswordError('');

        let isValid = true;
        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Email is invalid');
            isValid = false;
        }

        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter');
            isValid = false;
        } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setPasswordError('Password must contain at least one special character');
            isValid = false;
        }

        if (!isValid) return;

        navigate('/resetpasswordconfirmation');

        // dispatch(resetPassword({ email, new_password: password }))
        //     .then((response) => {
        //         console.log('response', response);
        //         if (response.meta.requestStatus === 'fulfilled') {
        //             console.log('Password reset instructions sent');
        //             navigate('/resetpasswordconfirmation');
        //         } else {
        //             console.error("Error reseting password")
        //             setSnackbarMessage("Username is incorrect");
        //             setSnackbarSeverity('error');
        //             setSnackbarOpen(true);
        //         }

        //     })
        //     .catch((error) => {
        //         console.error('Error resetting password:', error);
        //     });
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
                            <Box px={3} textAlign={'center'}>
                                <Typography sx={{ fontSize: '13px', letterSpacing: '0.5px', pt: 3 }}>Enter your email below and we will send you <br></br>instructions to reset your password.</Typography>
                            </Box>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
                                <Box sx={{ fontSize: '14px', color: ' rgba(10, 32, 46, 0.7)' }}>Email Address</Box>
                                <TextField
                                    margin="normal"
                                    type='email'
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ '& .MuiInputBase-root': { height: '2.5em'  , background : 'rgb(243, 244, 244)'} }}
                                    error={!!emailError}
                                    helperText={emailError}
                                />

                                <Button
                                    type="submit"
                                    onClick={() => navigate('/resetpasswordconfirmation')}
                                    fullWidth
                                    sx={{ mt: 2, mb: 2, height : '40px' , background: 'linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)' ,border : '1px solid rgba(10, 32, 46, 0.25)' }}
                                >
                                    <Box sx={{ color: '#FAE9E0'  , fontWeight : 'bold'}}>SEND INSTRUCTIONS</Box>
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to="/signin" className='links'>
                                            <Box sx={{ textAlign: 'center', paddingTop: '4%', fontSize: '16px' , color : ' rgb(0, 154, 255)' }}>Return to log in</Box>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                        <GenericSnackbar
                            open={snackbarOpen}
                            message={snackbarMessage}
                            severity={snackbarSeverity}
                            handleClose={handleCloseSnackbar}
                        />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </MainWrapper>
    );
};

export default ResetPassword;
