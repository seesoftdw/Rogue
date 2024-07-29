import React, { useState } from 'react';
import { Button, CssBaseline, TextField, Paper, Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MainWrapper from '../../components/common/MainWrapper';
import { AppDispatch } from '../../store';
import { addUser } from '../../services/userService';
import GenericSnackbar from '../../components/common/Snackbar';
const theme = createTheme();

const SignIn = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [open, setOpen] = useState(true);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'info' | 'warning' | 'error'>('info');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
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

        const postData = {
            email: email,
            password: password,
            username: email,
            isArtist: "false",
            profile_picture_url: "profile_picture_url"
        }
        dispatch(addUser(postData)).then((result) => {
            if (result.meta.requestStatus === 'fulfilled') {
                setSnackbarMessage('User Created Successfully!');
                setSnackbarSeverity('success');
                setSnackbarOpen(true);
                navigate('/signin');
            } else {
                console.error('Error adding user');
            }
        }).catch((error) => {
            console.error('Error adding user:', error);
        });
    };

    return (
        <Box className='CreateAnAccount'>
            <MainWrapper>
                <ThemeProvider theme={theme}>
                    <Grid container component="main" sx={{ height: '100vh' }}>
                        <CssBaseline />

                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ ml: 45, boxShadow: 'none' }}>
                            <Box className='box1'
                                sx={{
                                    my: 0,
                                    mx: 4,

                                }}
                            >
                                <Typography component="h1" variant="h5">
                                    <Box sx={{ fontSize: '36px', fontWeight: 'bold' }}>Create an account</Box>
                                </Typography>
                                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                    <Box className='field1' >Email Address</Box>
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
                                        sx={{ '& .MuiInputBase-root': { height: '2.5em' } }}
                                        error={!!emailError}
                                        helperText={emailError}
                                    />
                                    <Box className='field1'>Password</Box>
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
                                        <Box sx={{ color: 'white' }}>SIGN UP</Box>
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link to='#'>
                                                <Box sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '12px', textAlign: 'center', pt: 4 }}>{"By creating an account, you are agreeing to our Terms of Service."}</Box>
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ textAlign: 'center', fontSize: '16px', paddingTop: '4%' }}>OR</Box>

                                    <Button className='googleButton'
                                        type="submit"
                                        fullWidth
                                        sx={{ mt: 1, mb: 1 }}
                                    >
                                        <Box sx={{ color: 'gray', fontWeight: 'bold' }}>SIGN IN WITH GOOGLE</Box>
                                    </Button>

                                    <Button className='googleButton'
                                        type="submit"
                                        fullWidth
                                        sx={{ mt: 1, mb: 1 }}
                                    >
                                        <Box sx={{ color: 'gray', fontWeight: 'bold' }}>SIGN IN WITH APPLE</Box>
                                    </Button>

                                    <Button className='googleButton'
                                        type="submit"
                                        fullWidth
                                        sx={{ mt: 1, mb: 1 }}
                                    >
                                        <Box sx={{ color: 'gray', fontWeight: 'bold' }}>SIGN IN WITH FACEBOOK</Box>
                                    </Button>


                                    <Link to="/signin" className='links'>
                                        <Box sx={{ width: '100%', }}>
                                            <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
                                                <Grid item xs={12} sm={7}>
                                                    <Typography textAlign="center" sx={{ pl: 3.5, color: 'black', textDecoration: 'none' }}>
                                                        Already have an account?
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12} sm={4}>
                                                    <Typography variant="body1" textAlign="center" sx={{ color: 'rgb(0, 154, 255)', textDecoration: 'none', pr: 4 }}>
                                                        Sign in here
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Link>

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
        </Box>
    );
};

export default SignIn;
