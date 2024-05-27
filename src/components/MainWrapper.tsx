import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './SideBar';

const lightTheme = createTheme({
  // palette: {
  //   mode: 'light',
  //   primary: {
  //     main: '#fff',
  //   },
  //   secondary: {
  //     main: '#fff',
  //   },
  //   success: {
  //     main: '#fff',
  //   },
  //   background: {
  //     default: '#fff',
  //     paper: '#fff',
  //   },
  //   text: {
  //     primary: '#222',
  //     secondary: '#222',
  //   },
  //   action: {
  //     active: '#000',
  //     hover: '#ddd',
  //     selected: '#222',
  //   },
  //   divider: '#fdffff1f',
  // },
});


const MainWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(true);

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
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <CssBaseline />
          <Header open={open} toggleDrawer={toggleDrawer} />
        <Sidebar />
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
