import { useState } from 'react';
import { CssBaseline, Paper, Box, Grid, Typography, createTheme, ThemeProvider } from '@mui/material';
import MainWrapper from '../../components/common/MainWrapper';
import { Link } from 'react-router-dom';
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
                                <Box sx={{ fontSize: '36px', fontWeight: 'bold', pt: 8 }}>Reset your password</Box>
                            </Typography>
                            <Typography sx={{ fontSize: '16px', letterSpacing: '0.5px', pt: 4 }}>Password reset instructions sent.</Typography>
                            <Typography sx={{ fontSize: '16px', letterSpacing: '0.5px' }}>Please check your email.</Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to='/signin' className='links'>
                                            <Box sx={{ textAlign: 'center', paddingTop: '16%', fontSize: '16px', color: 'rgb(0, 154, 255)' }}>Return to log in</Box>
                                        </Link>
                                        <Link to='/newpassword' className='links'>
                                            <Box sx={{ textAlign: 'center', paddingTop: '16%', fontSize: '16px', color: 'rgb(0, 154, 255)' }}>Next Page</Box>
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

export default Resetpasswordd;
