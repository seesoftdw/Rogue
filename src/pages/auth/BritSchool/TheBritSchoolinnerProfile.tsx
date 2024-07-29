import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography, Grid, createTheme } from '@mui/material';
import React from 'react'
import BritschoolHeader from './BritSchoolHeader';
import MainWrapper from '../../../components/common/MainWrapper';
import CustomBreadcrumbs from '../../../components/common/Breadcrumbs';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import { FaFacebook } from "react-icons/fa";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import { FaSoundcloud ,FaSpotify } from "react-icons/fa";
import Release from '../../../components/auth/Release';
import Release1 from '../../../assets/images/coverart-track-1.jpg'
import Release2 from '../../../assets/images/coverart-track-2.jpg'
import Release3 from '../../../assets/images/coverart-track-3.jpg'
import Release4 from '../../../assets/images/coverart-track-4.jpg'
import Release5 from '../../../assets/images/coverart-track-5.jpg'
import { Facebook } from '@mui/icons-material';

type Props = {}
interface BritSchoolIconProps {
    src: string;
    alt: string;
}

const TheBritSchoolinnerProfile = (props: Props) => {

    const [tabValue, setTabValue] = React.useState(0);

    const releases = [
        { title: 'Soho After Dark', artist: 'Royal Big Ben Orchestra', imgSrc: Release1 },
        { title: 'Rhythms of the Underground', artist: 'Royal Big Ben Orchestra', imgSrc: Release2 },
        { title: 'Sultry City Nights', artist: 'Royal Big Ben Orchestra', imgSrc: Release3 },
        { title: 'Silent Night\'s Serenade for the Lonely', artist: 'Royal Big Ben Orchestra', imgSrc: Release4 },
        { title: 'Silent Night\'s Serenade for the Lonely', artist: 'Royal Big Ben Orchestra', imgSrc: Release5 },
    ];

    const SideSection = () => {
        return (
            <Box>
                <Box sx = {{ pl : 50 , pr : 50}}>
                    <Typography my={2} sx={{ fontSize: '14px', color: 'rgb(10, 32, 46)', lineHight: '22px' }}>
                        The “Royal Big Ben Orchestra,” hailing from the heart of London, United Kingdom, embodis the rich musical heritage and vibrant culture of its historic city. Formed under the shadow of the  iconic Big Ben, this ensemble of  seasoned jazz musicians brings together a unique blend of classic jazz melodies, innovative arrangements, and a distinctly British flair.
                    </Typography>
                </Box>
                <Divider />
                <Box sx = {{ pt : 5 , ml : 50}}>
                    <List  >
                        <Link to='#'>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon>
                                    <InstagramIcon />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'rgb(0, 154, 255)' }} primary="Instagram" />
                            </ListItem>
                        </Link>
                        <Link to='#'>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon sx={{ fontSize: '1.5rem' }}>
                                    <FaFacebook />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'rgb(0, 154, 255)' }} primary="Facebook" />
                            </ListItem>
                        </Link>
                        <Link to='#'>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon>
                                    <YouTubeIcon />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'rgb(0, 154, 255)' }} primary="Youtube" />
                            </ListItem>
                        </Link>
                        <Link to='#'>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon sx={{ fontSize: '1.5rem' }}>
                                    <FaSoundcloud />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'rgb(0, 154, 255)' }} primary="Soundcloud" />
                            </ListItem>
                        </Link>
                        <Link to='#'>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon sx={{ fontSize: '1.5rem' }}>
                                    <FaSpotify />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'rgb(0, 154, 255)' }} primary="Spotify" />
                            </ListItem>
                        </Link>
                        <Link to='#'>
                            <ListItem sx={{ px: 0 }}>
                                <ListItemIcon>
                                    <LanguageIcon />
                                </ListItemIcon>
                                <ListItemText sx={{ color: 'rgb(0, 154, 255)', fontSize: '16px' }} primary="Website" />
                            </ListItem>
                        </Link>
                    </List>
                </Box>
                <Divider />
                <Box>
                    
                </Box>
            </Box>
        )
    }


    const profileIconStyle = {
        'height': 27,
        'width': 27,
        'marginLeft': '5px',
        'marginRight': '5px',
    }

    return (
        <Box>
            <MainWrapper>
                <Box width="100%" className='bg-grad-gray5'>
                    <Box>
                        <CustomBreadcrumbs />
                    </Box>

                    <BritschoolHeader />
                    <Box display={'flex'} justifyContent={'space-between'}>
                      
                        <Box p={1} color={'grey'} mt={'10px'} sx = {{mt : 19 , ml : 50}}>
                        <InstagramIcon style={profileIconStyle} /> <Facebook style={profileIconStyle} /> <YouTubeIcon style={profileIconStyle} /> <FaSoundcloud  style={profileIconStyle} />  <FaSpotify style={profileIconStyle} /> <LanguageIcon style={profileIconStyle} />
                        </Box>
                    </Box>

                </Box>
                {tabValue === 0 && (
                    <Box display={'flex'} py={0}>
                       
                        <Box flex={1} py={5}>
                            <SideSection />
                        </Box>
                    </Box>
                )}
                {tabValue === 1 && (
                    <Box display={'flex'}>
                        <Box flex={4} sx = {{mt : 1}}>
                            <section>
                               
                                <Grid container spacing={0}>
                                    {releases.map((release, index) => (
                                        <Grid item xs={12} sm={6} md={4} key={index}>
                                            <Release title={release.title} imgSrc={release.imgSrc} artist={release.artist} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </section>
                        </Box>
                        <Box flex={1}>
                            <SideSection />
                        </Box>
                    </Box>
                )}
               
            </MainWrapper>
        </Box>
    )
}

export default TheBritSchoolinnerProfile


