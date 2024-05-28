import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import Header from '../../components/common/Header'
import MainWrapper from '../../components/common/MainWrapper';

const theme = createTheme();

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log({ email, password });
    };

    return (
        <MainWrapper>
            <ThemeProvider theme={theme}>
                {/* <Header open={open} toggleDrawer={toggleDrawer} /> */}
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />

                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ ml: 50, boxShadow: 'none' }}>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                <Box sx={{ fontSize: '36px', fontWeight: 'bold' }}>Create an account</Box>
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <Box sx={{ fontSize: '14px', color: ' rgba(10, 32, 46, 0.7)' }}>Email Address</Box>
                                <TextField
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
                                    sx={{ backgroundColor: 'rgba(10, 32, 46, 0.05)' }}
                                />
                                <Box sx={{ fontSize: '14px', color: ' rgba(10, 32, 46, 0.7)' }}>Password</Box>
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
                                    sx={{ backgroundColor: 'rgba(10, 32, 46, 0.05)' }}
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    sx={{ mt: 3, mb: 2, background: ' linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)' }}
                                >
                                    <Box sx={{ color: 'white' }}>SIGN UP</Box>
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            <Box sx={{ color: 'black', fontSize: '12px', textAlign: 'center', pt: 4, textDecoration: 'none' }}>{"By creating an account, you are agreeing to our Terms of Service."}</Box>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                    </Grid>
                                </Grid>
                                <Box sx={{ textAlign: 'center', fontSize: '16px', paddingTop: '4%' }}>OR</Box>

                                <Button
                                    type="submit"
                                    fullWidth
                                    sx={{ mt: 3, mb: 2, backgroundColor: 'white', border: '2px solid  rgba(10, 32, 46, 0.4)' }}
                                >
                                    <Box sx={{ color: 'gray', fontWeight: 'bold' }}>SIGN IN WITH GOOGLE</Box>
                                </Button>

                                <Button
                                    type="submit"
                                    fullWidth
                                    sx={{ mt: 2, mb: 2, backgroundColor: 'white', border: '2px solid  rgba(10, 32, 46, 0.4)' }}
                                >
                                    <Box sx={{ color: 'gray', fontWeight: 'bold' }}>SIGN IN WITH APPLE</Box>
                                </Button>

                                <Button
                                    type="submit"
                                    fullWidth
                                    sx={{ mt: 2, mb: 2, backgroundColor: 'white', border: '2px solid  rgba(10, 32, 46, 0.4)' }}
                                >
                                    <Box sx={{ color: 'gray', fontWeight: 'bold' }}>SIGN IN WITH FACEBOOK</Box>
                                </Button>

                                <Link href="#" variant="body2">
                                    <Box sx={{ color: 'black', fontSize: '16px', textAlign: 'center', pt: 4, textDecoration: 'none' }}>{"Already have an account? Sign in here"}</Box>
                                </Link>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </MainWrapper>
    );
};

export default SignIn;
