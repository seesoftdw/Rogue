import { Box, Container, Divider, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Typography, Grid } from '@mui/material';
import React from 'react'
import Header from './ArtistProfileHeader';
import Tracks from './Tracks';
import MainWrapper from '../../../components/common/MainWrapper';
import CustomBreadcrumbs from '../../../components/common/Breadcrumbs';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import { FaFacebook } from "react-icons/fa";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import britSchoolimg from '../../../assets/images/britSchool.png'
import ArtistsPlaylist from './ArtistsPlaylist';
import { Padding } from '@mui/icons-material';

import Release from '../../../components/auth/Release'
import Playlist1 from '../../../assets/images/playlist1.png'
import Playlist2 from '../../../assets/images/playlist2.png'
import Playlist3 from '../../../assets/images/playlist3.png'


type Props = {}
interface BritSchoolIconProps {
    src: string;
    alt: string;
}

const ArtistProfile = (props: Props) => {



    const [tabValue, setTabValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const BritSchoolIcon: React.FC<BritSchoolIconProps> = ({ src, alt }) => {
        return (
            <ListItemIcon>
                <img src={src} alt={alt} style={{ width: 40, height: 40, borderRadius: 50 }} />
            </ListItemIcon>
        );
    };

    const playlists = [
        { title: 'Dreamy Future Sounds', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist1 },
        { title: 'Moonlight Symphony', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist2 },
        { title: 'Latin Jazz Fiesta', artist: 'Royal Big Ben Orchestra', imgSrc: Playlist3 }
    ];

    return (
        <MainWrapper>
            <Box >
                <Box>
                    <CustomBreadcrumbs />
                </Box>
                <Box>
                    <Header />
                </Box>
                <Tabs value={tabValue} onChange={handleChange}>
                    <Tab label="All" />
                    <Tab label="Tracks" />
                    <Tab label="Playlists" />
                </Tabs>
                {tabValue === 0 &&
                    <Box>
                        <Box display={'flex'}>
                            <Box flex={4}>
                                <Box>
                                    <Tracks />
                                </Box>

                                <ArtistsPlaylist />

                            </Box>
                            <Box flex={1} py={5}>
                                <Box>
                                    <Typography my={3} sx={{ fontSize: '14px', color: 'rgb(10, 32, 46)', lineHight: '22px' }}>
                                        The “Royal Big Ben Orchestra,” hailing from the heart of London, United Kingdom, embodis the rich musical heritage and vibrant culture of its historic city. Formed under the shadow of the  iconic Big Ben, this ensemble of  seasoned jazz musicians brings together a unique blend of classic jazz melodies, innovative arrangements, and a distinctly British flair.
                                    </Typography>
                                </Box>
                                <Divider />
                                <Box>
                                    <List>
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
                                                <ListItemIcon>
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
                                    <ListItem sx={{ py: 3, px: 0 }}>
                                        <ListItemIcon>
                                            <BritSchoolIcon src={britSchoolimg} alt='brit-school-artist' />
                                        </ListItemIcon>
                                        <Typography sx={{ fontSize: '16px', fontWeight: 600, color: 'rgba(10, 32, 46, 0.9)' }} >The Brit School</Typography>
                                        {/* <ListItemText  sx ={{ fontSize : '16px' , fontWeight  : 600  , color :'rgba(10, 32, 46, 0.9)'}} primary="The Brit School" /> */}

                                    </ListItem>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                }

                {tabValue === 1 && <Tracks />}
                {tabValue === 2 && < ArtistsPlaylist />}
                {/* <Footer /> */}

                {/* <Box padding={0} margin={0}>
                    <Typography sx={{ fontSize: '36px', fontWeight: 'bold', letterspacing: '0.56px', pb: 1, color: 'Black' }} variant="h4" gutterBottom> {'Playlists'}</Typography>
                    <Grid container alignContent={'flex-start'} spacing={2} >
                        {playlists.map((playlist, index) => (
                            <Grid item xs={12} sm={3} key={index} py={0} px={0}>
                                <Release title={playlist.title} artist={playlist.artist} imgSrc={playlist.imgSrc} />
                            </Grid>
                        ))}
                    </Grid>
                </Box> */}

            </Box>
        </MainWrapper>
    )
}

export default ArtistProfile



