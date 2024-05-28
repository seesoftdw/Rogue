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
import Typography from '@mui/material/Typography';
import { Avatar, Button } from '@mui/material';
import Profile from '../../assets/images/avatar-artist.jpg'
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';



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

const Header: React.FC<HeaderProps> = ({ toggleDrawer, isLoggedIn }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const settings = [' Manage Profile', 'Settings', 'Sign Out'];



  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



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
                <ImageListItem key={item.img}>
                  <img src={item.img} alt={item.title} />
                </ImageListItem>
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

                <Box sx={{ ml: { sm: '50%' }, fontSize: { lg: '27px', md: '27px', sm: '21px' } }}>
                  <IoCart />
                </Box>

              </Box>



              <Box sx={{ flexGrow: 0 }}>

                <React.Fragment >
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
                        <Avatar alt="Remy Sharp" src={Profile} />
                      </IconButton>
                    </Tooltip>
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        height: '271px', width: '280px',

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
                    <MenuItem onClick={handleClose} >
                      <Avatar alt="Remy Sharp" src={Profile} /> Fred Smith
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose} sx={{}}>
                      <PersonAdd fontSize="small" />
                      <p>Manage Profile</p>
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{}}>
                      <Settings fontSize="small" />
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose} >
                      <Settings fontSize="small" />
                      <p >Sign Out</p>
                    </MenuItem>
                  </Menu>
                </React.Fragment>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu} sx={{ borderBottom: '1px solid ' }}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

            </Box>
          ) : (
            <Box> 
              <Button variant='contained' sx={{ color: 'black', background: 'white',fontSize:'11px', fontWeight : 'bold ' , mx:1 , border : ' 1px solid rgba(10, 32, 46, 0.4)'   }}>sign in</Button>
              <Button variant='contained' sx={{fontSize:'11px', mx:1}}>sign up</Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
