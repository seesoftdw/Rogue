import React, { useState } from 'react';
import { Button, CssBaseline, TextField, Paper, Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import MainWrapper from '../../components/common/MainWrapper';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { loginUser } from '../../services/userService';
import { toggleLoggedIn } from '../../slices/userSlice';
import { useNavigate } from 'react-router-dom';
import GenericSnackbar from '../../components/common/Snackbar';




const theme = createTheme();

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'info' | 'warning' | 'error'>('info');

    const dispatch = useDispatch<AppDispatch>();
    // const authState = useSelector((state: RootState) => state.auth.authState);

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


    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        dispatch(loginUser({ email, password })).then((response) => {
            console.log(response);
            if (response.payload.verification_status === "SUCCESS") {
                sessionStorage.setItem(
                    "token",
                    response.payload.access_token
                );
                console.log(response);
                navigate('/');
            } else {
                console.error('Error logging in:', Error);
                setSnackbarMessage('Username or password is incorrect');
                setSnackbarSeverity('error');
                setSnackbarOpen(true);
            }


        }).catch((error) => {
            console.error('Error logging in:', error);
            setSnackbarMessage('An error occurred during login.');
            setSnackbarOpen(true);
        });
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
                                <TextField className='textfileld'
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    // label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ '& .MuiInputBase-root': { height: '2.5em' } }}

                                />
                                <Box sx={{ fontSize: '14px', color: ' rgba(10, 32, 46, 0.7)', pt: 3 }}>Password</Box>

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    // label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    // backgroundColor: 'rgba(10, 32, 46, 0.05)'
                                    sx={{ '& .MuiInputBase-root': { height: '2.5em' } }}
                                />


                                <Button
                                    // onClick={handleToggleLogin}
                                    type="submit"
                                    fullWidth
                                    sx={{ mt: 1, mb: 1, background: ' linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)' }}
                                >
                                    <Box sx={{ color: 'white' }}>Sign In</Box>
                                </Button>
                                {/* {authState.loginError && <Box sx={{ color: 'red', mt: 2 }}>{authState.loginError}</Box>}
                                {authState.isLoggedIn && <Box sx={{ color: 'green', mt: 2 }}>Login successful!</Box>} */}
                                <Grid container>
                                    <Grid item xs>

                                        <Box sx={{ textAlign: 'center', fontSize: '16px', color: ' rgb(0, 154, 255)' }}><Link to='/resetyourpassword' style={{ textDecorationLine: 'none' }} className='links'>Forgot password?</Link></Box>

                                    </Grid>
                                    <Grid item>
                                    </Grid>
                                </Grid>
                                <Box sx={{ textAlign: 'center', fontSize: '16px', paddingTop: '2%', color: 'rgba(10, 32, 46, 0.7)' }}>OR</Box>

                                <Button
                                    type="submit"
                                    fullWidth
                                    sx={{ mt: 1, mb: 1, backgroundColor: 'white', border: '2px solid  rgba(10, 32, 46, 0.4)' }}
                                >
                                    <Box sx={{ color: 'gray', fontWeight: 'bold' }}>SIGN IN WITH GOOGLE</Box>
                                </Button>

                                <Button
                                    type="submit"
                                    fullWidth
                                    sx={{ mt: 1, mb: 1, backgroundColor: 'white', border: '2px solid  rgba(10, 32, 46, 0.4)' }}
                                >
                                    <Box sx={{ color: 'gray', fontWeight: 'bold' }}>SIGN IN WITH APPLE</Box>
                                </Button>

                                <Button
                                    type="submit"
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
