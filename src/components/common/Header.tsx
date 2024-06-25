import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import MusicPlayerSlider from "./player";
import { IoCart } from "react-icons/io5";
import { Menu as MenuIcon } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Button, Typography } from '@mui/material';
import Profile from '../../assets/images/attist.png'
import Artist1 from '../../assets/images/artist-1.jpg'
import BritSchool from '../../assets/images/britSchool.png'
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const drawerWidth: number = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps & { open: boolean }>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface HeaderProps {
  open: boolean;
  toggleDrawer: () => void;
  isLoggedIn: boolean;
}

const itemData = [
  {
    img: '/assets/images/R1_barcelona.svg.png',
    title: 'Logo',
  },
];

const Header: React.FC<HeaderProps> = ({ open, toggleDrawer, isLoggedIn }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const settings = [' Manage Profile', 'Settings', 'Sign Out'];
  const location = useLocation();
  const navigate = useNavigate();

  const changedProfilePicture = ['/artistprofilehome', '/artisttrack', '/uploadtrackprofile', '/uploadtrackicon', '/artistprofileplaylist', '/artistplaylistsecondpage', '/artistplaylisticon', '/earnings'];
  const britSchoolRoutes = ['/britschoolprofile', '/britschoolheader', '/britschoolartist', '/britprofilesecond', '/BritSchoolProfile', '/thebritschoolinnerprofile'];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  // const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = () => {
    sessionStorage.clear();
    navigate('/');
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const linkDecorationStyle = {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.87)',
  };
  return (
    <AppBar className="mainHeader" sx={{
      boxShadow: 'none',
      background: 'linear-gradient(-180deg, #F5F5F5 0%, #E0E0E0 100%)',
      width: '100%',
      position: 'fixed',
      height: '70px',
      justifyContent: 'center'
    }}
      position="absolute" open={open}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: '70px', alignItems: 'center' }}>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer}
              sx={{ marginRight: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', height: '100%' }}>
            <ImageList sx={{ width: '65px', height: '65px', mt: 6 }} rowHeight={1}>
              {itemData.map((item) => (
                <Link to='/' key={item.title}>
                  <ImageListItem key={item.img}>
                    <img src={item.img} alt={item.title} />
                  </ImageListItem>
                </Link>
              ))}
            </ImageList>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', pl: 2, flexGrow: 1, justifyContent: 'center', }}>
            <MusicPlayerSlider />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
            <MusicPlayerSlider />
          </Box>
          {isLoggedIn ? (
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', ml: 'auto', gap: 2, height: '100%' }}>
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, fontSize: '27px', color: '#707070', alignItems: 'center' }}>
                <Link to='/cartprofile'>
                  <Box sx={{ ml: { sm: '50%' }, fontSize: { lg: '27px', md: '27px', sm: '21px' } }}>
                    <IoCart style={{ color: 'gray' }} />
                  </Box>
                </Link>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <React.Fragment>
                  <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Account settings">
                      <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                      >

                        {britSchoolRoutes.includes(location.pathname) ? <Avatar alt="" src={BritSchool} /> : changedProfilePicture.includes(location.pathname) ? <Avatar alt="" src={Artist1} /> : <Avatar alt="Remy Sharp" src={Profile} />}


                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        height: '300px', width: '280px',
                        '& .MuiAvatar-root': {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        '&::before': {
                          content: '""',
                          display: 'block',
                          position: 'absolute',
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-50%) rotate(45deg)',
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <Link to='#' style={linkDecorationStyle} >
                      <MenuItem onClick={handleClose}>
                        <Avatar alt="Remy Sharp" src={Profile} />
                        <Typography sx={{ pl: 1 }}>Fred Smith</Typography>
                      </MenuItem>
                    </Link>

                    <Link to='/artistprofilehome' style={linkDecorationStyle} >
                      <MenuItem onClick={handleClose}>
                        <Avatar alt="Remy Sharp" src={Artist1} />
                        <Typography sx={{ pl: 1 }}>Royal Big Ben Orchestra</Typography>
                      </MenuItem>
                    </Link>

                    <Link to='/britprofilesecond' style={linkDecorationStyle} >
                      <MenuItem onClick={handleClose}>
                        <Avatar alt="Remy Sharp" src={BritSchool} />
                        <Typography sx={{ pl: 1 }}>Brit School</Typography>
                      </MenuItem>
                    </Link>

                    <Divider />

                    <Link to='/manage-profiles' style={linkDecorationStyle}>
                      <MenuItem onClick={handleClose}>
                        <PersonAdd fontSize="small" />
                        <p>Manage Profile</p>
                      </MenuItem>
                    </Link>
                    <Link to='/accountsettings' style={linkDecorationStyle}>
                      <MenuItem onClick={handleClose}>
                        <Settings fontSize="small" />
                        Settings
                      </MenuItem>
                    </Link>
                    <MenuItem onClick={handleSignOut}>
                      <Settings fontSize="small" />
                      <p>Sign Out</p>
                    </MenuItem>
                  </Menu>
                </React.Fragment>
              </Box>
            </Box>
          ) : (
            <Box >
              <Link to="/signin">
                <Button variant="contained" sx={{ color: 'black', background: 'linear-gradient(-180deg, rgba(10, 32, 46, 0.05) 0%, rgba(10, 32, 46, 0.1) 100%)', boxShadow: 'none', fontWeight: 'bold', border: '1px solid black', fontSize: '10px', mx: 1 }}>
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="contained" sx={{ fontSize: '10px', fontWeight: 'bold', border: '1px solid black', mx: 1, boxShadow: 'none' }}>
                  Sign Up
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
