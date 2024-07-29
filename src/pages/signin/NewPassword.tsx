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

const NewPassword = () => {
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
                                <Box className='box2' sx={{ mb: 5 }}>Reset your password</Box>
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <Box className='box3' >New Password</Box>
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
                                    sx={{ '& .MuiInputBase-root': { height: '2.5em', background: 'rgb(243, 244, 244)' } }}
                                    error={!!emailError}
                                    helperText={emailError}
                                />
                                <Box className='box3' sx={{ pt: 2 }}>Confirm New Password</Box>
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
                                    sx={{ '& .MuiInputBase-root': { height: '2.5em', background: 'rgb(243, 244, 244)' } }}
                                    error={!!emailError}
                                    helperText={emailError}
                                />
                                <Box sx={{ display: 'flex', justifyContent: 'end', width: '100%', gap: 2 }}>
                                    <Button className='button1'
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        <Box sx={{ color: 'gray', fontWeight: 'bold', fontSize: '16px' }}>Cancel</Box>
                                    </Button>
                                    <Button className='button2'
                                        type="submit"
                                        sx={{ mt: 3, mb: 2 }}
                                        onClick={() => navigate('/password-reset-success')}
                                    >
                                        <Box className='box4'>Submit</Box>
                                    </Button>
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

export default NewPassword;
