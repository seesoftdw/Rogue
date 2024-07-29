import { Box, Grid, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import playlist2 from '../../../assets/images/playlist2.png';
import playlist3 from '../../../assets/images/playlist1.png'
import { FaPlay, FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoCopy } from "react-icons/io5";
import { RiDeleteBin5Fill } from "react-icons/ri";

const playlist = { title: 'Dreamy Future Sounds', image: playlist2 };
const playlist1 = { title: 'Moonlight Symphony', image: playlist3 };

type Props = {}

interface BritSchoolIconProps {
    src: string;
    alt: string;
}

const BritSchoolPlaylistProfile = (props: Props) => {
    const [tabValue, setTabValue] = React.useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleDropdownClick = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const addToQueue = () => {
        console.log('Add to queue');

    };

    const copyPlaylistLink = () => {
        console.log('Copy playlist link');

    };

    const deletePlaylist = () => {
        console.log('Delete playlist');

    };

    const BritSchoolIcon: React.FC<BritSchoolIconProps> = ({ src, alt }) => {
        return (
            <Box>
                <img src={src} alt={alt} style={{ width: 40, height: 40, borderRadius: 50 }} />
            </Box>
        );
    };

    return (
        <Box className="bsPlaylistProfile">
            <MainWrapper>
                <Box width="100%" >
                    <Box>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={9}>
                                    <Typography className='bsPlaylistHeading' sx={{ mt: 2, pl: 2 }}>Playlists</Typography>
                                </Grid>

                                <Link to='/artistplaylistsecondpage'>
                                    <Grid item xs={3}>
                                        <Button className="newPlaylistButton" sx={{ mt: 2, ml: 5 }}>
                                            CREATE NEW PLAYLIST
                                        </Button>
                                    </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box className="bsPlaylistTitlebar" sx={{ mt: 4 }} >
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography className='bsPlaylistTitles' sx={{ pt: 3, pb: 3, pl: 2 }}>NAME</Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Typography className='bsPlaylistTitles' sx={{ pt: 3, pb: 3, pl: 2 }}>TRACKS</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography className='bsPlaylistTitles' sx={{ pt: 3, pb: 3, pl: 2 }}>DATE CREATED</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Grid container spacing={2} sx={{ mt: 1, '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={4} sx={{ ml: 2 }}>
                                        <Grid container alignItems="center">
                                            <Grid item xs={1}>
                                                <Box
                                                    onMouseEnter={() => setHoveredIndex(1)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                    sx={{ position: 'relative', height: '40px', width: '40px' }}
                                                >
                                                    <Box
                                                        component="img"
                                                        src={playlist2}
                                                        alt=""
                                                        sx={{
                                                            height: '40px',
                                                            width: '40px',
                                                            display: hoveredIndex === 1 ? 'none' : 'block'
                                                        }}
                                                    />
                                                    {hoveredIndex === 1 && (
                                                        <Box className="bsPlaylistIconBox">
                                                            <FaPlay color='white' />
                                                        </Box>
                                                    )}
                                                </Box>
                                            </Grid>
                                            <Grid item xs={11}>
                                                <Typography sx={{ fontSize: '16px', fontWeight: 500, pl: 3 }}>{playlist.title}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={5}>
                                        <Typography sx={{ color: ' black', fontSize: '14px', pl: 2, pt: 1.5 }}>8</Typography>
                                    </Grid>

                                    <Grid item xs={2} sx={{ pl: 2, position: 'relative', pt: 1.5 }}>
                                        <Typography
                                            sx={{
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => handleDropdownClick(1)}
                                        >
                                            Jun 15, 2024 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...
                                        </Typography>
                                        {openDropdown === 1 && (
                                            <Box className="dropdownFirst"
                                                sx={{
                                                    p: 2,
                                                    mt: 1,
                                                }}
                                            >
                                                <Grid display={'block'} item xs={12}>
                                                    <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }} onClick={addToQueue}>
                                                        <Grid item xs={2}> <FaPlus style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                        <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Add to queue</Typography> </Grid>
                                                    </Grid>
                                                    <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }} onClick={copyPlaylistLink}>
                                                        <Grid item xs={2}> < IoCopy style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 10 }} /></Grid>
                                                        <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500', pt: 1 }}>Copy playlist link</Typography> </Grid>
                                                    </Grid>
                                                    <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }} onClick={deletePlaylist}>
                                                        <Grid item xs={2}> < RiDeleteBin5Fill style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 10 }} /></Grid>
                                                        <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500', pt: 1 }}>Delete playlist </Typography> </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 1, '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={4} sx={{ ml: 2 }}>
                                        <Grid container alignItems="center">
                                            <Grid item xs={1}>
                                                <Box
                                                    onMouseEnter={() => setHoveredIndex(2)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                    sx={{ position: 'relative', height: '40px', width: '40px' }}
                                                >
                                                    <Box
                                                        component="img"
                                                        src={playlist3}
                                                        alt=""
                                                        sx={{
                                                            height: '40px',
                                                            width: '40px',
                                                            display: hoveredIndex === 2 ? 'none' : 'block'
                                                        }}
                                                    />
                                                    {hoveredIndex === 2 && (
                                                        <Box className="bsPlaylistIconBox">
                                                            <FaPlay color='white' />
                                                        </Box>
                                                    )}
                                                </Box>
                                            </Grid>
                                            <Grid item xs={11}>
                                                <Typography sx={{ fontSize: '16px', fontWeight: 500, pl: 3 }}>{playlist1.title}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={5}>
                                        <Typography sx={{ color: ' black', fontSize: '14px', pl: 2, pt: 1.5 }}>8</Typography>
                                    </Grid>

                                    <Grid item xs={2} sx={{ pl: 2, position: 'relative', pt: 1.5 }}>
                                        <Typography
                                            sx={{
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => handleDropdownClick(2)}
                                        >
                                            Jun 15, 2024 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ...
                                        </Typography>
                                        {openDropdown === 2 && (
                                            <Box className="dropdownFirst"
                                                sx={{
                                                    p: 2,
                                                    mt: 1,
                                                }}
                                            >
                                                <Grid display={'block'} item xs={12}>
                                                    <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }} onClick={addToQueue}>
                                                        <Grid item xs={2}> <FaPlus style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                        <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Add to queue</Typography> </Grid>
                                                    </Grid>
                                                    <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }} onClick={copyPlaylistLink}>
                                                        <Grid item xs={2}> < IoCopy style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 10 }} /></Grid>
                                                        <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500', pt: 1 }}>Copy playlist link</Typography> </Grid>
                                                    </Grid>
                                                    <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }} onClick={deletePlaylist}>
                                                        <Grid item xs={2}> < RiDeleteBin5Fill style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 10 }} /></Grid>
                                                        <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500', pt: 1 }}>Delete playlist </Typography> </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        )}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>


            </MainWrapper >
        </Box >
    );
};

export default BritSchoolPlaylistProfile;
