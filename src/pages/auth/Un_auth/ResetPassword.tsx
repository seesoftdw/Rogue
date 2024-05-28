import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import Header from '../../../components/common/Header'
const theme = createTheme();

const Resetpasswordd = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };


    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Handle sign-in logic here
        console.log({ email, password });
    };


    return (
        <ThemeProvider theme={theme}>
            {/* <Header open={open} toggleDrawer={toggleDrawer} /> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />

                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ ml: 50  , boxShadow : 'none'}}>
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
                            <Box sx={{ fontSize: '36px', fontWeight: 'bold' }}>Reset your password</Box>
                        </Typography>
                        <Typography sx={{ fontSize: '11px', letterSpacing: '0.5px', pt: 3 }}>Enter your email below and we will send you instructions to reset your password.</Typography>
                        <Typography sx={{ fontSize: '11px', letterSpacing: '0.5px' }}> instructions to reset your password.</Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2" >
                                        <Box sx={{ textAlign: 'center', paddingTop: '15%', fontSize: '16px' , color : 'rgb(0, 154, 255)' }}>Return to log in</Box>
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
    );
};

export default Resetpasswordd;
