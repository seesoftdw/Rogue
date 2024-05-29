import AssessmentIcon from '@mui/icons-material/Assessment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageIcon from '@mui/icons-material/Image';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import QuizIcon from '@mui/icons-material/Quiz';
import SecurityIcon from '@mui/icons-material/Security';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Box, Collapse, List, Typography } from '@mui/material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import BoltIcon from '@mui/icons-material/Bolt';
import { VscPiano } from "react-icons/vsc";
import { FaMusic } from "react-icons/fa";



interface Page {
  id: string;
  name: string;
  icon: JSX.Element;
  route?: string;
  subpages?: { id: string; name: string; route: string }[];
}

const pages: Page[] = [
  {
    id: 'Home',
    name: 'Home',
    route: '/home',
    icon: <HomeIcon  />,
  },

  {
    id: 'Trending',
    name: 'Trending',
    icon: <BoltIcon  />,
  },

  {
    id: 'releases',
    name: 'New Releases',
    icon: <VscPiano />,
  },

  {
    id: 'library',
    name: 'My Library',
    icon: <FaMusic />
    ,
  },

  

  {
    id: 'goodReads',
    name: 'Good Reads',
    icon: <NewspaperIcon  />,
    subpages: [
      { id: 'articles', name: 'Articles', route: '/admin/goodreads' },
      { id: 'videos', name: 'Suggested Videos', route: '/admin/suggested-videos' },
    ],
  },

  {
    id: 'gisp',
    name: 'GISP & Resources',
    icon: <SecurityIcon  />,
    subpages: [
      { id: 'policy', name: 'GISP Policy', route: '/admin/gisp-policy' },
      { id: 'ethics', name: 'Digital Ethics', route: '/admin/digital-ethics' },
      { id: 'quickTools', name: 'Quick Tools', route: '/admin/quick-tools' },
    ],
  },

  {
    id: 'dataProtection',
    name: 'Data Protection',
    icon: <SecurityIcon  />,
    subpages: [
      { id: 'dataProTips', name: 'Data Proctection Tips', route: '/admin/data-protection-tips' },
      { id: 'dataProTraining', name: 'Data Proctection Trainings', route: '/admin/data-protection-training' },
    ],
  },

  {
    id: 'banners',
    name: 'Banners',
    route: '/admin/banners',
    icon: <ImageIcon  />,
  },

  {
    id: 'querty-in-veder',
    name: 'Querty In Veder',
    route: '/admin/querty-in-veder',
    icon: <ImageIcon  />,
  },

  {
    id: 'opps-email',
    name: 'Opps Email',
    route: '/admin/opps-email',
    icon: <SmartToyIcon  />,
  },

  {
    id: 'visit-website',
    name: 'Visit Website',
    route: '/',
    icon: <PresentToAllIcon  />,
  },
];

const MainListItems: React.FC = () => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const location = useLocation();

  const handleSubMenuClick = (pageId: string) => {
    setOpenSubMenu((prev) => (prev === pageId ? null : pageId));
  };

  useEffect(() => {
    const activePage = pages.find((page) =>
      page.subpages?.some((subpage) => location.pathname.startsWith(subpage.route)),
    );
    if (activePage) {
      setOpenSubMenu(activePage.id);
    }
  }, [location]);

  return (
    <>
      {pages.map((page) => (
        <Box key={page.id}>
          {page.subpages ? (
            <>
              <ListItemButton
                className={`sidebarSubmenu ${openSubMenu === page.id ? 'subMenuOpen' : ''}`}
                onClick={() => handleSubMenuClick(page.id)}
                
              >
                <ListItemIcon>{page.icon}</ListItemIcon>
                <ListItemText primary={page.name} />
                <ListItemIcon sx={{ justifyContent: 'end' }}>
                  {openSubMenu === page.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemIcon>
              </ListItemButton>

              <Collapse in={openSubMenu === page.id} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {page.subpages.map((subpage) => (
                    <ListItemButton
                      className={`sub-menu-item ${location.pathname === subpage.route ? 'activeNavLink' : ''}`}
                      key={subpage.id}
                      component={Link}
                      to={subpage.route}
                      sx={{ pl: 4 }}
                    >
                      <ListItemText primary={subpage.name} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <ListItemButton
              className={location.pathname === page.route ? 'activeMenu' : ''}
              component={page.route ? Link : 'div'}
              to={page.route}
              
            >
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          )}
        </Box>
      ))}
    </>
  );
};

export default MainListItems;
