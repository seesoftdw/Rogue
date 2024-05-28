import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './SideBar';
import Banner from '../un_auth/Banner';

const lightTheme = createTheme({
  // palette settings if needed
});

const MainWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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

  return (
    <ThemeProvider theme={lightTheme}>
      <Box sx={{ display: 'flex', flexDirection: isLoggedIn ? 'row': 'column', height: '100vh' }}>
        <CssBaseline />
        <Header open={open} toggleDrawer={toggleDrawer} isLoggedIn={isLoggedIn} />
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          {/* <Sidebar open={open} /> */}
          {/* <Banner /> */}
          {isLoggedIn ? <Sidebar open={false} /> : <Banner />}

        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'visible',
            mt: 6,
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
