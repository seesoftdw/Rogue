import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './SideBar';
import Banner from '../un_auth/Banner';
import { truncate } from 'fs';

const lightTheme = createTheme({

});

const MainWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const handleLogin = () => {
    // login logic
  };

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    document.body.classList.add('admin');
    return () => {
      document.body.classList.remove('admin');
    };
  }, []);

  const shouldShowBanner = location.pathname !== '/signin' && location.pathname !== '/signup';
  const hideBannerRoutes = ['/termsofservices', '/resetyourpassword', '/resetpassword','/resetPasswordConfirmation','/Artists/profile'];
  const shouldHideBanner = hideBannerRoutes.includes(location.pathname);

  return (
    <ThemeProvider theme={lightTheme}>
      <Box sx={{ display: 'flex', flexDirection: isLoggedIn ? 'row' : 'column', height: '100vh' }}>
        <CssBaseline />
        <Header open={open} toggleDrawer={toggleDrawer} isLoggedIn={isLoggedIn} />
        <Box sx={{ display: 'flex',background:'rgba(10, 32, 46, 0.02)'}}>
          {isLoggedIn ? <Sidebar open={false} /> : shouldShowBanner && !shouldHideBanner && <Banner />}
        </Box>
        <Box
          component="main"
          sx={{
            height: '100vh',
            overflow: 'visible',
            mt: 3,
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 5, mb: 4 }}>
            {children}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainWrapper;
