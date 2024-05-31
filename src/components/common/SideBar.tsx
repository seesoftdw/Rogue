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
import { Home, LibraryMusic, NewReleases, PlaylistPlay } from '@mui/icons-material';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import AddIcon from '@mui/icons-material/Add';
import { FaMusic } from "react-icons/fa";
import { GiGrandPiano } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';



const drawerWidth = 240;

interface SidebarProps {
  window?: () => Window;
  open: boolean;
}

export default function Sidebar(props: SidebarProps) {
  const { window } = props;

  const theme: Theme = createTheme({});
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Home'); // Initial active tab

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

  const sidebarContent = (
    <div>
      <List>
        <Link to='/' className='text-decoration-none'>
          <ListItem button key="Home" selected={activeTab === 'Home'} onClick={() => handleTabClick('Home')}>
            <ListItemIcon style={activeTab === 'Home' ? activeLinkStyles : undefined}><FaHome /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>

        <Link to='/Releases' className='text-decoration-none' >
          <ListItem button key="New Releases" selected={activeTab === 'New Releases'} onClick={() => handleTabClick('New Releases')}>
            <ListItemIcon style={activeTab === 'New Releases' ? activeLinkStyles : undefined}><GiGrandPiano /></ListItemIcon>
            <ListItemText primary="New Releases" />
          </ListItem>
        </Link>
        <Link to='/Playlists' className='text-decoration-none' >
          <ListItem button key="My Library" selected={activeTab === 'My Library'} onClick={() => handleTabClick('My Library')}>
            <ListItemIcon style={activeTab === 'My Library' ? activeLinkStyles : undefined}><FaMusic /></ListItemIcon>
            <ListItemText primary="My Library" />
          </ListItem>
        </Link>
      </List>
      <Typography variant="subtitle1" sx={{ padding: theme.spacing(2), fontSize: '14px', fontWeight: 'bold', color: 'gray', letterSpacing: '1px', textTransform: 'uppercase' }}>Playlists < AddIcon sx={{ ml: 10, pt: 3, height: '40px' }} /> </Typography>
      <List>
        {['Vintage Jazz Vibes', 'Blue Note Odyssey', 'Latin Jazz Fiesta', 'Groovy Fusion', 'Funky Fusion', 'Cool Chronicles'].map((text, index) => (
          <ListItem button key={text} selected={activeTab === text} onClick={() => handleTabClick(text)}>
            <ListItemIcon style={activeTab === text ? activeLinkStyles : undefined}><QueueMusicIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        className='sidebar'
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
