import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './SideBar';
import Banner from '../un_auth/Banner';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const lightTheme = createTheme({});

const MainWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const isLoggedIn = useSelector((state: RootState) => state.auth.authState.isLoggedIn);
  const location = useLocation();

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
  const hideBannerRoutes = ['/termsofservices', '/resetyourpassword', '/resetpassword', '/resetpasswordconfirmation', '/Artists/Profile', '/trackprofile', '/Releases', '/Playlists', '/YourProfiles', '/CartCheckout', '/EmptyCart', '/CreateArtistProfile', '/YourProfileOne', '/EditArtistProfileTwo', '/PlaylistProfileFirst'];
  const shouldHideBanner = hideBannerRoutes.includes(location.pathname);

  const shouldHideSidebarAndBanner = location.pathname === '/accountsettings';

  return (
    <ThemeProvider theme={lightTheme}>
      <Box sx={{ display: 'flex', flexDirection: isLoggedIn ? 'row' : 'column', height: '100vh' }}>
        <CssBaseline />
        <Header open={open} toggleDrawer={toggleDrawer} isLoggedIn={isLoggedIn} />
        <Box sx={{ display: 'flex', background: 'rgba(10, 32, 46, 0.02)' }}>
          {isLoggedIn && !shouldHideSidebarAndBanner ? <Sidebar open={false} /> : !shouldHideSidebarAndBanner && shouldShowBanner && !shouldHideBanner && <Banner />}
        </Box>
        <Box
          component="main"
          sx={{
            height: '100vh',
            overflow: 'visible',
            mt: 3,
            width: '100%'
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
