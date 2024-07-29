import React, { useState } from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import MainWrapper from '../../components/common/MainWrapper';
import coverarttrack6 from '../../assets/images/coverart-track-6.jpg';
import coverarttrack1 from '../../assets/images/coverart-track-1.jpg';
import { FaPlay, FaPlus } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { IoMdArrowDropup } from "react-icons/io";
import bars from '../../assets/images/bars.png';

interface Playlist {
    title: string;
    artist: string;
    imgSrc: string;
}

const playlists: Playlist[] = [
    { title: 'Soho After Dark', artist: 'Royal Big Ben Orchestra', imgSrc: coverarttrack6 },
    { title: 'MellowSilhouette Rhapsody', artist: 'Royal Big Ben Orchestra', imgSrc: coverarttrack1 },
];

const ArtistsPage: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);

    const handleDropdownClick = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const addToQueue = () => {
        // Add to queue logic
    };

    const copyPlaylistLink = () => {
        // Copy playlist link logic
    };

    const deletePlaylist = () => {
        // Delete playlist logic
    };

    return (
        <MainWrapper>
            <Box>
                <Typography sx={{ fontSize: '36px', fontWeight: 'bold', letterSpacing: '0.56px', pb: 1, color: 'Black' }} variant="h4" gutterBottom>
                    {'My Library'}
                </Typography>
                <Box sx={{ mt: 4, borderTop: '1px solid rgba(10, 32, 46, 0.4)', borderBottom: '1px solid rgba(10, 32, 46, 0.4)' }}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 'bold', pt: 3, pb: 3, pl: 10 }}> TITLE</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 'bold', pt: 3, pb: 3, pl: 4 }}>ARTIST</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 'bold', pt: 3, pb: 3, pl: 4 }}>COPY</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 'bold', pt: 3, pb: 3, pl: 4 }}>TOTAL STREAMS</Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 'bold', pt: 3, pb: 3, pl: 3 }}>LAST 30 DAYS STREAMS</Typography>
                        </Grid>
                    </Grid>
                </Box>

                {playlists.map((playlist, index) => (
                    <Grid container spacing={2} sx={{ mt: 1, '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }} key={index}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={3} sx={{ ml: 2 }}>
                                            <Grid container alignItems="center">
                                                <Grid item xs={1}>
                                                    <Box
                                                        onMouseEnter={() => setHoveredIndex(index)}
                                                        onMouseLeave={() => setHoveredIndex(null)}
                                                        sx={{ position: 'relative', height: '55px', width: '40px' }}
                                                    >
                                                        <Box
                                                            component="img"
                                                            src={playlist.imgSrc}
                                                            alt={playlist.title}
                                                            sx={{
                                                                height: '40px',
                                                                width: '40px',
                                                                display: hoveredIndex === index ? 'none' : 'block'
                                                            }}
                                                        />
                                                        {hoveredIndex === index && (
                                                            <Box
                                                                sx={{
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    left: 0,
                                                                    height: '40px',
                                                                    width: '40px',
                                                                    display: 'flex',
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center',
                                                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                                                    borderRadius: '4px'
                                                                }}
                                                            >
                                                                <FaPlay color='white' />
                                                            </Box>
                                                        )}
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={11}>
                                                    <Typography sx={{ fontSize: '15px', fontWeight: 600, pl: 5, pb: 1.5 }}>
                                                        {playlist.title}
                                                        <br />
                                                        {playlist.title === 'Soho After Dark' && <Typography>Track</Typography>}
                                                        {playlist.title === 'MellowSilhouette Rhapsody' && <Typography>Track</Typography>}
                                                    </Typography>
                                                </Grid>

                                            </Grid>
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Typography sx={{ color: 'black', fontSize: '14px', fontWeight: 600, pl: 2, pt: 1 }}>
                                                {playlist.artist}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={1} sx={{ pl: 2, position: 'relative', pt: 1 }}>
                                            <Typography>
                                                3 of 10
                                            </Typography>
                                            {openDropdown === index && (
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: '90%',
                                                        left: -100,
                                                        width: '260px',
                                                        background: 'rgb(255, 255, 255)',
                                                        border: '1px solid rgba(10, 32, 46, 0.2)',
                                                        boxShadow: '0px 8px 10px 0px rgba(10, 32, 46, 0.5)',
                                                        height: '126px',
                                                        color: 'black',
                                                        p: 2,
                                                        mt: 1,
                                                        borderRadius: '4px',
                                                        zIndex: 1
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
                                                    </Grid>
                                                </Box>
                                            )}
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography sx={{ color: 'black', fontSize: '14px', pl: 2, pt: 1 }}>230</Typography>
                                        </Grid>



                                        <Grid item xs={2.8}>
                                            <Grid container >
                                                <Grid item xs={12}  sx = {{ display : 'flex'}}>
                                                    <Grid item xs={10}>
                                                        <img src={bars} alt='Stream Icon' style={{ height: '24px', width: '179px', marginTop: 10 }} /> <IoMdArrowDropup style={{ color: ' rgb(45, 193, 45)' }} />
                                                    </Grid>
                                                    <Grid item xs={1}>
                                                        <Typography sx = {{color: ' rgb(45, 193, 45)' , pt : 2 , fontWeight: 'bold'}}>+8%</Typography>
                                                        
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>


                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
                <Box sx={{ border: '1px solid rgba(10, 32, 46, 0.2)' }}></Box>
            </Box>
        </MainWrapper>
    );
};

export default ArtistsPage;
