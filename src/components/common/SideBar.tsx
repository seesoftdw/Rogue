import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { createTheme, Theme, useMediaQuery } from '@mui/material';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import AddIcon from '@mui/icons-material/Add';
import { FaMusic } from "react-icons/fa";
import { GiGrandPiano } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineQueueMusic } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";




const drawerWidth = 240;

interface SidebarProps {
  window?: () => Window;
  open: boolean;
}

export default function Sidebar(props: SidebarProps) {
  const { window } = props;
  const location = useLocation();

  const theme: Theme = createTheme({});
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(location.pathname); // Use location.pathname to determine the initial active tab

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const activeLinkStyles = {
    color: '#379ad5',
  };

  const linkDecorationStyle = {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.87)',
  };

  const changedSidebarRoutes = ['/artistprofilehome', '/artisttrack', '/uploadtrackprofile', '/uploadtrackicon', '/artistprofileplaylist', '/artistplaylistsecondpage', '/artistplaylisticon', '/earnings',];
  const britSchoolRoutes = ['/britprofilesecond', '/britschoolartistprofile', '/britschoolreleaseprofile', '/britschoolplaylistprofile' , '/britschoolearningprofile'];

  const sidebarContent = (

    <div>
      {britSchoolRoutes.includes(location.pathname) ? (
        <>
          <List sx={{ pt: 5, pl: 2 }}>
            <Link to="/britprofilesecond" className="text-decoration-none" style={linkDecorationStyle}>
              <ListItem button key="Home" selected={activeTab === '/'} onClick={() => handleTabClick('/')}>
                <ListItemIcon style={activeTab === '/' ? activeLinkStyles : undefined}>
                  <FaHome style={{ height: '15.51px', width: '17.5px' }} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link to="/britschoolartistprofile" className="text-decoration-none" style={linkDecorationStyle}>
              <ListItem button key="Tracks" selected={activeTab === '/Tracks'} onClick={() => handleTabClick('/Tracks')}>
                <ListItemIcon style={activeTab === '/Tracks' ? activeLinkStyles : undefined}><IoPeople />
                </ListItemIcon>
                <ListItemText primary="Artists" />
              </ListItem>
            </Link>
            <Link to="/britschoolreleaseprofile" className="text-decoration-none" style={linkDecorationStyle}>
              <ListItem button key="Playlists" selected={activeTab === '/Playlists'} onClick={() => handleTabClick('/Playlists')}>
                <ListItemIcon style={activeTab === '/Playlists' ? activeLinkStyles : undefined}><FaMusic /></ListItemIcon>
                <ListItemText primary="Releases" />
              </ListItem>
            </Link>
            <Link to="/britschoolplaylistprofile" className="text-decoration-none" style={linkDecorationStyle}>
              <ListItem button key="Playlist" selected={activeTab === '/Playlist'} onClick={() => handleTabClick('/Playlist')}>
                <ListItemIcon style={activeTab === '/Playlist' ? activeLinkStyles : undefined}><MdOutlineQueueMusic /></ListItemIcon>
                <ListItemText primary="Playlists" />
              </ListItem>
            </Link>
            <Link to="/britschoolearningprofile" className="text-decoration-none" style={linkDecorationStyle}>
              <ListItem button key="Earnings" selected={activeTab === '/Earnings'} onClick={() => handleTabClick('/Earnings')}>
                <ListItemIcon style={activeTab === '/Earnings' ? activeLinkStyles : undefined}><RiMoneyDollarCircleFill /></ListItemIcon>
                <ListItemText primary="Earnings" />
              </ListItem>
            </Link>
          </List>
        </>
      ) :
        (
          <>
            {changedSidebarRoutes.includes(location.pathname) ? (
              <>
                <List sx={{ pt: 5, pl: 2 }}>
                  <Link to="/artistprofilehome" className="text-decoration-none" style={linkDecorationStyle}>
                    <ListItem button key="Home" selected={activeTab === '/'} onClick={() => handleTabClick('/')}>
                      <ListItemIcon style={activeTab === '/' ? activeLinkStyles : undefined}>
                        <FaHome style={{ height: '15.51px', width: '17.5px' }} />
                      </ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItem>
                  </Link>
                  <Link to="/artisttrack" className="text-decoration-none" style={linkDecorationStyle}>
                    <ListItem button key="Tracks" selected={activeTab === '/Tracks'} onClick={() => handleTabClick('/Tracks')}>
                      <ListItemIcon style={activeTab === '/Tracks' ? activeLinkStyles : undefined}><FaMusic /></ListItemIcon>
                      <ListItemText primary="Tracks" />
                    </ListItem>
                  </Link>
                  <Link to="/artistprofileplaylist" className="text-decoration-none" style={linkDecorationStyle}>
                    <ListItem button key="Playlists" selected={activeTab === '/Playlists'} onClick={() => handleTabClick('/Playlists')}>
                      <ListItemIcon style={activeTab === '/Playlists' ? activeLinkStyles : undefined}><MdOutlineQueueMusic /></ListItemIcon>
                      <ListItemText primary="Playlists" />
                    </ListItem>
                  </Link>
                  <Link to="/earnings" className="text-decoration-none" style={linkDecorationStyle}>
                    <ListItem button key="Earnings" selected={activeTab === '/Earnings'} onClick={() => handleTabClick('/Earnings')}>
                      <ListItemIcon style={activeTab === '/Earnings' ? activeLinkStyles : undefined}><RiMoneyDollarCircleFill /></ListItemIcon>
                      <ListItemText primary="Earnings" />
                    </ListItem>
                  </Link>
                </List>
              </>
            ) : (
              <>
                <List sx={{ pt: 2 }}>
                  <Link to="/" className="text-decoration-none" style={linkDecorationStyle}>
                    <ListItem button key="Home" selected={activeTab === '/'} onClick={() => handleTabClick('/')}>
                      <ListItemIcon style={activeTab === '/' ? activeLinkStyles : undefined}><FaHome /></ListItemIcon>
                      <ListItemText primary="Home" />
                    </ListItem>
                  </Link>
                  <Link to="/Releases" className="text-decoration-none" style={linkDecorationStyle}>
                    <ListItem button key="New Releases" selected={activeTab === '/Releases'} onClick={() => handleTabClick('/Releases')}>
                      <ListItemIcon style={activeTab === '/Releases' ? activeLinkStyles : undefined}><GiGrandPiano /></ListItemIcon>
                      <ListItemText primary="New Releases" />
                    </ListItem>
                  </Link>
                  <Link to="/Playlists" className="text-decoration-none" style={linkDecorationStyle}>
                    <ListItem button key="My Library" selected={activeTab === '/Playlists'} onClick={() => handleTabClick('/Playlists')}>
                      <ListItemIcon style={activeTab === '/Playlists' ? activeLinkStyles : undefined}><FaMusic /></ListItemIcon>
                      <ListItemText primary="My Library" />
                    </ListItem>
                  </Link>
                </List>
                <Typography variant="subtitle1" sx={{ padding: theme.spacing(2), fontSize: '14px', fontWeight: 'bold', color: 'gray', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Playlists <AddIcon sx={{ ml: 10, pt: 3, height: '40px' }} />
                </Typography>
                <List >
                  {['Vintage Jazz Vibes', 'Blue Note Odyssey', 'Latin Jazz Fiesta', 'Groovy Fusion', 'Funky Fusion', 'Cool Chronicles'].map((text, index) => (
                    <ListItem button key={text} selected={activeTab === text} onClick={() => handleTabClick(text)}>
                      <ListItemIcon style={activeTab === text ? activeLinkStyles : undefined}><QueueMusicIcon /></ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </>
        )}



    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        className="sidebar"
      >
        <Drawer
          variant="permanent"
          anchor="left"
          open
          sx={{
            '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' },
          }}
        >
          {sidebarContent}
        </Drawer>
      </Box>
    </Box>
  );
}
