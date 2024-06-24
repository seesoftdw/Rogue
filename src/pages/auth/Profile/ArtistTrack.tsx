import { Box, Grid, Typography, Select, MenuItem, Button } from '@mui/material';
import React, { useState } from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import CustomBreadcrumbs from '../../../components/common/Breadcrumbs';
import playlist1 from '../../../assets/images/playlist1.png';
import coverarttrack6 from '../../../assets/images/coverart-track-6.jpg';
import coverarttrack1 from '../../../assets/images/coverart-track-1.jpg';
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { MdQueueMusic } from "react-icons/md";
import { IoIosMan } from "react-icons/io";
import { IoCopy } from "react-icons/io5";
import { FaMusic } from "react-icons/fa6";
import { MdOutlineQueueMusic } from "react-icons/md";





const playlist = { title: 'Mellow Silhouette Rhapsody', image: playlist1 };

type Props = {}
interface BritSchoolIconProps {
    src: string;
    alt: string;
}

const RoyalBigBen = (props: Props) => {
    const [tabValue, setTabValue] = React.useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [openDropdown, setOpenDropdown] = useState<number | null>(null);
    const [openDropdown1, setOpenDropdown1] = useState(false);
    const [openDropdown2, setOpenDropdown2] = useState(false);


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleDropdownClick = (index: number) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };


    const handleDropdownClick1 = () => {
        setOpenDropdown1(!openDropdown1);
        setOpenDropdown2(false);
    };


    const BritSchoolIcon: React.FC<BritSchoolIconProps> = ({ src, alt }) => {
        return (
            <Box>
                <img src={src} alt={alt} style={{ width: 40, height: 40, borderRadius: 50 }} />
            </Box>
        );
    };



    return (
        <Box>
            <MainWrapper>
                {/* <Box>
                    <CustomBreadcrumbs />
                </Box> */}
                <Box>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={9}>
                                <Typography sx={{ color: 'rgb(10, 32, 46)', fontSize: '36px', fontweight: 'bold', mt: 2 }}>Tracks</Typography>

                            </Grid>

                            <Link to = '/uploadtrackprofile'>
                                <Grid item xs={3}>
                                    <Button sx={{ height: '40px', width: '163px', background: ' linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)', borderRadius: '6px', border: ' 1px solid rgba(10, 32, 46, 0.25)', color: ' rgb(255, 255, 255)', mt: 2, fontWeight: 'bold'  , ml : 14}}>
                                        UPLOAD TRACKS
                                    </Button>
                                </Grid>
                            </Link>
                        </Grid>

                    </Grid>
                </Box>

                <Grid display={'flex'} item xs={12} sx={{ borderBottom: '1px solid rgb(10, 32, 46, 0.4)', borderTop: '1px solid rgb(10, 32, 46, 0.4)', mt: 2 }}>
                    <Grid container sx={{ pt: 3, pb: 3, fontSize: '14px', color: ' rgba(10, 32, 46, 0.4)', fonWeight: 600 }}>
                        <Grid item xs={3}>TITLE</Grid>
                        <Grid item xs={1}>TIME</Grid>
                        <Grid item xs={2}>STATUS</Grid>
                        <Grid item xs={1}>PRICE</Grid>
                        <Grid item xs={1}>OWNERS</Grid>
                        <Grid item xs={1}>LISTENERS</Grid>
                        <Grid item xs={1} sx={{ pl: 2 }}>STREAMS</Grid>
                        <Grid item xs={2} sx={{ pl: 2 }}>DATE ADDED</Grid>
                    </Grid>
                </Grid>

                <Grid display={'flex'} item xs={12} sx={{ mt: 3 }}>
                    <Grid container sx={{}}>
                        <Grid item xs={3}>

                            <Grid item xs={12}>
                                <Grid container alignItems="center">
                                    <Grid item xs={1}>
                                        <Box
                                            onMouseEnter={() => setHoveredIndex(2)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            sx={{ position: 'relative', height: '40px', width: '40px' }}
                                        >
                                            <Box
                                                component="img"
                                                src={coverarttrack6}
                                                alt=""
                                                sx={{
                                                    height: '40px',
                                                    width: '40px',
                                                    display: hoveredIndex === 2 ? 'none' : 'block'
                                                }}
                                            />
                                            {hoveredIndex === 2 && (
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
                                        <Typography sx={{ fontSize: '16px', fontWeight: 500, pl: 4 }}>Soho After Dark</Typography>
                                    </Grid>


                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid item xs={1} sx={{ pt: 1.5 }}>4:32</Grid>
                        <Grid item xs={2} sx={{ pt: 1.5 }}>Processing</Grid>
                        <Grid item xs={1} sx={{ pt: 1.5 }}>$9</Grid>
                        <Grid item xs={1} sx={{ pt: 1.5 }}>0</Grid>
                        <Grid item xs={1} sx={{ pt: 1.5 }}>0</Grid>
                        <Grid item xs={1} sx={{ pl: 2, pt: 1.5 }}>0</Grid>
                        <Grid item xs={2} sx={{ pl: 2, position: 'relative', pt: 1.5 }}>
                            <Typography
                                sx={{
                                    cursor: 'pointer'
                                }}
                                onClick={() => handleDropdownClick(2)}
                            >
                                May 20, 2024 &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; ...
                            </Typography>
                            {openDropdown === 2 && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: -100,
                                        width: '260px',
                                        background: 'rgb(255, 255, 255)',
                                        border: '1px solid rgba(10, 32, 46, 0.2)',
                                        boxShadow: '0px 8px 10px 0px rgba(10, 32, 46, 0.5)',
                                        height: '220px',
                                        color: 'black',
                                        p: 2,
                                        mt: 1,
                                        borderRadius: '4px',
                                        zIndex: 1
                                    }}
                                >
                                    <Grid display={'block'} item xs={12}>
                                        <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                                            <Grid item xs={2}> <FaPlus style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                            <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Add to queue</Typography> </Grid>
                                        </Grid>


                                        <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' }, height: 0, pt: 1, pb: 4 }}>
                                            <Grid item xs={10} sx={{}}>
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}><MdOutlineQueueMusic style={{ height: '20px', width: '20px', color: 'rgba(10, 32, 46, 0.3)', marginTop: 3, marginRight: 18 }} />Add to playlist</Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Select
                                                    value={openDropdown === 2 ? 'open' : ''}
                                                    onChange={(e) => handleDropdownClick(2)}
                                                    sx={{
                                                        width: '20px',
                                                        height: '20px',
                                                        backgroundColor: 'white',
                                                        padding: '0 12px',
                                                        color: 'rgba(10, 32, 46, 0.9)',
                                                        paddingLeft: '25px',
                                                        marginTop: 1.5

                                                    }}
                                                >

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}  >
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> <FaPlus style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>New playlist</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}>
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> <MdQueueMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Vintage Jazz Vibes</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}>
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> <MdQueueMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Blue Note Odyssey</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}>
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> <MdQueueMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Latin Jazz Fiesta</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}>
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> <MdQueueMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Groovy Fusion</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}>
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> <MdQueueMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Funky Fusion</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}>
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> < MdQueueMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Cool Chronicles</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>
                                                </Select>
                                            </Grid>
                                        </Grid>

                                        <Grid display="flex" item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                                            <Grid item xs={2}>
                                                <IoIosMan style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 10 }} />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500', pt: 1, pb: 1 }}>
                                                    Go to artist
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                                            <Grid item xs={2}> < FaMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 10 }} /></Grid>
                                            <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500', pt: 1, pb: 1 }}>Go to Track</Typography> </Grid>
                                        </Grid>
                                        <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                                            <Grid item xs={2}> < IoCopy style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 10 }} /></Grid>
                                            <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500', pt: 1 }}>Copy track link</Typography> </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Grid>

                <Grid display={'flex'} item xs={12} sx={{ mt: 3 }}>
                    <Grid container sx={{}}>
                        <Grid item xs={3}>

                            <Grid item xs={12}>
                                <Grid container alignItems="center">
                                    <Grid item xs={1}>
                                        <Box
                                            onMouseEnter={() => setHoveredIndex(2)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            sx={{ position: 'relative', height: '40px', width: '40px' }}
                                        >
                                            <Box
                                                component="img"
                                                src={coverarttrack1}
                                                alt=""
                                                sx={{
                                                    height: '40px',
                                                    width: '40px',
                                                    display: hoveredIndex === 2 ? 'none' : 'block'
                                                }}
                                            />
                                            {hoveredIndex === 2 && (
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
                                        <Typography sx={{ fontSize: '16px', fontWeight: 500, pl: 4 }}>Mellow Silhouette Rhapsody</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>


                        <Grid item xs={1} sx={{ pt: 1.5 }}>4:32</Grid>
                        <Grid item xs={2} sx={{ pt: 1.5 }}>Processing</Grid>
                        <Grid item xs={1} sx={{ pt: 1.5 }}>$9</Grid>
                        <Grid item xs={1} sx={{ pt: 1.5 }}>0</Grid>
                        <Grid item xs={1} sx={{ pt: 1.5 }}>0</Grid>
                        <Grid item xs={1} sx={{ pl: 2, pt: 1.5 }}>0</Grid>
                        <Grid item xs={2} sx={{ pl: 2, position: 'relative', pt: 1.5 }}>
                            <Typography
                                sx={{
                                    cursor: 'pointer'
                                }}
                                onClick={() => handleDropdownClick(2)}
                            >
                                May 20, 2024 &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; ...
                            </Typography>
                            {openDropdown === 2 && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: -100,
                                        width: '260px',
                                        background: 'rgb(255, 255, 255)',
                                        border: '1px solid rgba(10, 32, 46, 0.2)',
                                        boxShadow: '0px 8px 10px 0px rgba(10, 32, 46, 0.5)',
                                        height: '220px',
                                        color: 'black',
                                        p: 2,
                                        mt: 1,
                                        borderRadius: '4px',
                                        zIndex: 1
                                    }}
                                >
                                    <Grid display={'block'} item xs={12}>
                                        <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                                            <Grid item xs={2}> <FaPlus style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                            <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Add to queue</Typography> </Grid>
                                        </Grid>


                                        <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' }, height: 0, pt: 1, pb: 4 }}>
                                            <Grid item xs={10} sx={{}}>
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}><MdOutlineQueueMusic style={{ height: '20px', width: '20px', color: 'rgba(10, 32, 46, 0.3)', marginTop: 3, marginRight: 18 }} />Add to playlist</Typography>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <Select
                                                    value={openDropdown === 2 ? 'open' : ''}
                                                    onChange={(e) => handleDropdownClick(2)}
                                                    sx={{
                                                        width: '20px',
                                                        height: '20px',
                                                        backgroundColor: 'white',
                                                        padding: '0 12px',
                                                        color: 'rgba(10, 32, 46, 0.9)',
                                                        paddingLeft: '25px',
                                                        marginTop: 1.5

                                                    }}
                                                >

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}  >
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> <FaPlus style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>New playlist</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}>
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> <MdQueueMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Vintage Jazz Vibes</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}>
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> <MdQueueMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Blue Note Odyssey</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}>
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> <MdQueueMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Latin Jazz Fiesta</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}>
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> <MdQueueMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Groovy Fusion</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}>
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> <MdQueueMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Funky Fusion</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>

                                                    <MenuItem value="add_to_queue" sx={{ width: '250px' }}>
                                                        <Grid display={'block'} item xs={12}>
                                                            <Grid display={'flex'} item xs={12}>
                                                                <Grid item xs={2}> < MdQueueMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} /></Grid>
                                                                <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Cool Chronicles</Typography> </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </MenuItem>
                                                </Select>
                                            </Grid>
                                        </Grid>

                                        <Grid display="flex" item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                                            <Grid item xs={2}>
                                                <IoIosMan style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 10 }} />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500', pt: 1, pb: 1 }}>
                                                    Go to artist
                                                </Typography>
                                            </Grid>
                                        </Grid>

                                        <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                                            <Grid item xs={2}> < FaMusic style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 10 }} /></Grid>
                                            <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500', pt: 1, pb: 1 }}>Go to Track</Typography> </Grid>
                                        </Grid>
                                        <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                                            <Grid item xs={2}> < IoCopy style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 10 }} /></Grid>
                                            <Grid item xs={10}><Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500', pt: 1 }}>Copy track link</Typography> </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}
                        </Grid>
                    </Grid>
                </Grid>




            </MainWrapper >
        </Box >
    );
};

export default RoyalBigBen;

