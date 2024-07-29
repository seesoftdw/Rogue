import React, { useEffect, useState } from 'react';
import { Button, CssBaseline, TextField, Paper, Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import MainWrapper from '../../components/common/MainWrapper';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { loginUser } from '../../services/userService';
import { useNavigate } from 'react-router-dom';
import GenericSnackbar from '../../components/common/Snackbar';
import axios from 'axios';
// import { baseURL } from '../../api'




const theme = createTheme();

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'info' | 'warning' | 'error'>('info');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };


    // const handleSubmit = (event: { preventDefault: () => void; }) => {
    //     event.preventDefault();

    //     setEmailError('');
    //     setPasswordError('');

    //     let isValid = true;
    //     if (!username) {
    //         setEmailError('Email is required');
    //         isValid = false;
    //     }

    //     if (!password) {
    //         setPasswordError('Password is required');
    //         isValid = false;
    //     } else if (!/(?=.*[A-Z])/.test(password)) {
    //         setPasswordError('Password must contain at least one uppercase letter');
    //         isValid = false;
    //     }
    //     // else if (!/(?=.*[!@#$%^&*])/.test(password)) {
    //     //     setPasswordError('Password must contain at least one special character');
    //     //     isValid = false;
    //     // }

    //     if (!isValid) return;


    //     dispatch(loginUser({ username, password })).then((response) => {

    //         if (response.payload.access_token === "SUCCESS") {
    //             console.log('response loginuser', response);
    //             console.log('dispatch loginUser function')
    //             sessionStorage.setItem(
    //                 "token",
    //                 response.payload.access_token

    //             );
    //             navigate('/');
    //         } else {
    //             console.error('Error logging in:', Error);
    //             setSnackbarMessage('Username or password is incorrect');
    //             setSnackbarSeverity('error');
    //             setSnackbarOpen(true);
    //         }

    //     }).catch((error) => {
    //         console.error('Error logging in:', error);
    //         setSnackbarMessage("User doesn't exist");
    //         setSnackbarOpen(true);
    //     });

    // };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); 

        setEmailError('');
        setPasswordError('');

        let isValid = true;
        if (!username) {
            setEmailError('Username is required');
            isValid = false;
        }

        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter');
            isValid = false;
        }

        if (!isValid) return;

        try {
            const response = await dispatch(loginUser({ username, password })).unwrap();

            // On successful login
            console.log('response', response);
            if (response.user) {
                sessionStorage.setItem('user', JSON.stringify(response.user));
                navigate('/');
            } else {
                console.error('Error logging in:', response);
                setSnackbarMessage('Username or password is incorrect');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setSnackbarMessage("User doesn't exist");
            setSnackbarOpen(true);
        }
    };

    return (
        <MainWrapper>
            <ThemeProvider theme={theme}>
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
                                <Box sx={{ fontSize: '36px', fontWeight: 'bold' }}>Sign in</Box>
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <Box sx={{ fontSize: '14px', color: ' rgba(10, 32, 46, 0.7)' }}>Email Address</Box>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    name="email"
                                    autoFocus
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    sx={{ '& .MuiInputBase-root': { height: '2.5em' } }}
                                    error={!!emailError}
                                    helperText={emailError}
                                />
                                <Box sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.7)' }}>Password</Box>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    sx={{ '& .MuiInputBase-root': { height: '2.5em' } }}
                                    error={!!passwordError}
                                    helperText={passwordError}
                                />


                                <Button
                                    type="submit"
                                    fullWidth
                                    sx={{ mt: 1, mb: 1, background: ' linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)' }}
                                >
                                    <Box sx={{ color: 'white' }}>Sign In</Box>
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Box sx={{ textAlign: 'center', fontSize: '16px', color: ' rgb(0, 154, 255)' }}><Link to='/resetyourpassword' style={{ textDecorationLine: 'none' }} className='links'>Forgot password?</Link></Box>
                                    </Grid>
                                    <Grid item>
                                    </Grid>
                                </Grid>
                                <Box sx={{ textAlign: 'center', fontSize: '16px', paddingTop: '2%', color: 'rgba(10, 32, 46, 0.7)' }}>OR</Box>

                                <Button
                                    fullWidth
                                    sx={{ mt: 1, mb: 1, backgroundColor: 'white', border: '2px solid  rgba(10, 32, 46, 0.4)' }}
                                >
                                    <Box sx={{ color: 'gray', fontWeight: 'bold' }}>SIGN IN WITH GOOGLE</Box>
                                </Button>

                                <Button
                                    fullWidth
                                    sx={{ mt: 1, mb: 1, backgroundColor: 'white', border: '2px solid  rgba(10, 32, 46, 0.4)' }}
                                >
                                    <Box sx={{ color: 'gray', fontWeight: 'bold' }}>SIGN IN WITH APPLE</Box>
                                </Button>

                                <Button
                                    fullWidth
                                    sx={{ mt: 1, mb: 1, backgroundColor: 'white', border: '2px solid  rgba(10, 32, 46, 0.4)' }}
                                >
                                    <Box sx={{ color: 'gray', fontWeight: 'bold' }}>SIGN IN WITH FACEBOOK</Box>
                                </Button>

                                <Link to="/signup" className='links'>
                                    <Box sx={{ width: '100%', }}>
                                        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                                            <Grid item xs={12} sm={6}>
                                                <Typography textAlign="center" sx={{ pl: 3.5, color: 'black', textDecoration: 'none' }}>
                                                    Don't have an account?
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={4}>
                                                <Typography variant="body1" textAlign="center" sx={{ color: 'rgb(0, 154, 255)', textDecoration: 'none', pr: 4 }}>
                                                    Sign Up here
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Link>
                            </Box>
                            <GenericSnackbar
                                open={snackbarOpen}
                                message={snackbarMessage}
                                severity={snackbarSeverity}
                                handleClose={handleCloseSnackbar}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </MainWrapper>
    );
};

export default SignIn;
