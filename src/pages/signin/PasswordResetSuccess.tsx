import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Paper, Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import MainWrapper from '../../components/common/MainWrapper';
import { Link, useNavigate } from 'react-router-dom';
// import { resetPassword } from '../../services/userService';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import GenericSnackbar from '../../components/common/Snackbar';
import './styles.scss'

const theme = createTheme();

const PasswordResetSuccess = () => {
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
    };

    return (
        <Box className="newPassword">
            <MainWrapper>
                <ThemeProvider theme={theme}>
                    <br></br>
                    <br></br>
                    <Grid container sx={{ height: '100vh', justifyContent: 'center' }}>
                        <CssBaseline />
                        <Grid item xs={12} sm={8} md={5} sx={{ boxShadow: 'none' }}>
                            <Typography component="h1" variant="h5">
                                <Box sx={{ fontSize: '36px', fontWeight: 'bold', mb: 5, textAlign: 'center' }}>Reset your password</Box>
                            </Typography>
                            <Box sx={{ justifyContent: 'center', textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '16px', letterSpacing: '0.5px', pt: 1 }}>Password reset successfully.</Typography>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to='/signin' className='links'>
                                            <Box sx={{ textAlign: 'center', paddingTop: '10%', fontSize: '16px', color: 'rgb(0, 154, 255)' }}>Return to log in</Box>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </MainWrapper>
        </Box>
    );
};

export default PasswordResetSuccess;
