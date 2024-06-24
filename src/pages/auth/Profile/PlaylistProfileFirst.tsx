import { Box, Grid, Typography, Select, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import CustomBreadcrumbs from '../../../components/common/Breadcrumbs';
import playlist1 from '../../../assets/images/playlist1.png';
import { TbPlayerPlayFilled } from "react-icons/tb";
import coverart from '../../../assets/images/coverart-track-1.jpg';
import coverarttrack5 from '../../../assets/images/coverart-track-5.jpg';
import coverarttrack2 from '../../../assets/images/coverart-track-2.jpg';
import coverarttrack3 from '../../../assets/images/coverart-track-3.jpg';
import coverarttrack4 from '../../../assets/images/coverart-track-4.jpg';
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

const PlaylistProfileFirst = (props: Props) => {
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
                <Box width="100%" className='bg-grad-gray'>
                    <Box>
                        <CustomBreadcrumbs />
                    </Box>
                    <Box>
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={2.5}>
                                        <img src={playlist1} style={{ height: '200px' }}></img>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h6" component="div" sx={{ fontSize: '14px', pt: 2.5 }} >
                                            PLAYLIST
                                        </Typography>
                                        <Typography variant="body1" component="div" sx={{ fontSize: '36px', fontWeight: 'bold' }}>
                                            Dreamy Future Sounds
                                        </Typography>
                                        <Typography variant="h6" component="div" sx={{ fontSize: '16px' }} >
                                            Royal Big Ben Orchestra 10 tracks - 24:32
                                        </Typography>

                                        <Grid container spacing={2} sx={{ mt: 0 }}>
                                            <Grid display={'flex'} item xs={12}>


                                                <Box
                                                    sx={{
                                                        height: '50px',
                                                        width: '50px',
                                                        background: 'linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)',
                                                        borderRadius: '25px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}
                                                >
                                                    <TbPlayerPlayFilled style={{ height: '24px', width: '24px', color: 'white' }} />

                                                </Box>
                                                <Grid container spacing={2} sx={{ mt: -2 }}>
                                                    <Grid item xs={5}>
                                                        <Grid container>
                                                            <Grid item xs={2} sx={{ pl: 5, position: 'relative' }}>
                                                                <Typography
                                                                    sx={{
                                                                        cursor: 'pointer',
                                                                        height: '40px',
                                                                        width: '40px',
                                                                        background: 'rgb(255, 255, 255)',
                                                                        borderRadius: '7px',
                                                                        border: '1px solid rgba(10, 32, 46, 0.4)',
                                                                        mt: 1,
                                                                        textAlign: 'center'
                                                                    }}
                                                                    onClick={handleDropdownClick1}
                                                                >
                                                                    ...
                                                                </Typography>


                                                                {openDropdown1 && (
                                                                    <Box
                                                                        sx={{
                                                                            position: 'absolute',
                                                                            top: '100%',
                                                                            left: 15,
                                                                            width: '260px',
                                                                            background: 'rgb(255, 255, 255)',
                                                                            border: '1px solid rgba(10, 32, 46, 0.2)',
                                                                            boxShadow: '0px 8px 10px 0px rgba(10, 32, 46, 0.5)',
                                                                            height: '88px',
                                                                            color: 'black',
                                                                            p: 2,
                                                                            mt: 1,
                                                                            borderRadius: '4px',
                                                                            zIndex: 1
                                                                        }}
                                                                    >
                                                                        <Grid display={'block'} item xs={12}>
                                                                            <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                                                                                <Grid item xs={2}>
                                                                                    <FaPlus style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 2 }} />
                                                                                </Grid>
                                                                                <Grid item xs={10}>
                                                                                    <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500' }}>Add to queue</Typography>
                                                                                </Grid>
                                                                            </Grid>
                                                                            <Grid display={'flex'} item xs={12} sx={{ '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                                                                                <Grid item xs={2}>
                                                                                    <IoCopy style={{ color: 'rgba(10, 32, 46, 0.3)', height: '17.5px', width: '17.5px', marginTop: 10 }} />
                                                                                </Grid>
                                                                                <Grid item xs={10}>
                                                                                    <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: '500', pt: 1 }}>Copy track link</Typography>
                                                                                </Grid>
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
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box sx={{ mt: 13 }}>
                    <Grid container spacing={2} sx={{ borderTop: '1px solid #cccccc', borderBottom: '1px solid #cccccc' }}>
                        <Grid item xs={12} sm={1} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, pb: 3 }}>
                            <Typography sx={{ pl: 6 }}>#</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600 }}>
                            TITLE
                        </Grid>
                        <Grid item xs={12} sm={2} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600 }}>
                            TIME
                        </Grid>
                    </Grid>
                </Box>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} sm={1} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, pt: 1, textAlign: 'center' }}>
                                        1
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Grid display={'flex'} item xs={12}>
                                            <Grid item xs={1}>
                                                <img src={coverart} alt='' style={{ height: '40px', width: '40px' }} />
                                            </Grid>
                                            <Grid item xs={11}>
                                                <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Mellow Silhouette Rhapsody</Typography>
                                                <Typography sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)' }}>Royal Big Ben Orchestra</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={2} sx={{ pl: 2 }}>
                                        4:34
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 0, '&:hover': { backgroundColor: 'rgba(10, 32, 46, 0.05)' } }}>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} sm={1} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, pt: 1, textAlign: 'center' }}>
                                        2
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Grid container alignItems="center">
                                            <Grid item xs={1}>
                                                <Box
                                                    onMouseEnter={() => setHoveredIndex(2)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                    sx={{ position: 'relative', height: '40px', width: '40px' }}
                                                >
                                                    <Box
                                                        component="img"
                                                        src={coverarttrack5}
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
                                                <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Smooth Moonlight Symphony</Typography>
                                                <Typography sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)' }}>Royal Big Ben Orchestra</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>


                                    <Grid item xs={2} sx={{ pl: 2, position: 'relative' }}>
                                        <Typography
                                            sx={{
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => handleDropdownClick(2)}
                                        >
                                            2:34  &nbsp;  &nbsp;  &nbsp; &nbsp; &nbsp; ...
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
                                                                    // '&:focus': {
                                                                    //     backgroundColor: 'white'
                                                                    // }
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
                        </Grid>
                    </Grid>
                </Grid>

                <Box>
                    <Grid container spacing={2} sx={{ mt: 0, '&:hover': { backgroundColor: ' rgba(10, 32, 46, 0.05)' } }}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12} sm={1} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, pt: 1, textAlign: 'center' }}>
                                            3
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Grid container alignItems="center">
                                                <Grid item xs={1}>
                                                    <Box
                                                        onMouseEnter={() => setHoveredIndex(3)}
                                                        onMouseLeave={() => setHoveredIndex(null)}
                                                        sx={{ position: 'relative', height: '40px', width: '40px' }}
                                                    >
                                                        <Box
                                                            component="img"
                                                            src={coverarttrack2}
                                                            alt=""
                                                            sx={{
                                                                height: '40px',
                                                                width: '40px',
                                                                display: hoveredIndex === 3 ? 'none' : 'block'
                                                            }}
                                                        />
                                                        {hoveredIndex === 3 && (
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
                                                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Swinging Velvet Rhapsody</Typography>
                                                    <Typography sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)' }}>Royal Big Ben Orchestra</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={2} sx={{ pl: 2 }}>
                                            3:20
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Box>
                    <Grid container spacing={2} sx={{ mt: 0, '&:hover': { backgroundColor: ' rgba(10, 32, 46, 0.05)' } }}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12} sm={1} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, pt: 1, textAlign: 'center' }}>
                                            4
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Grid container alignItems="center">
                                                <Grid item xs={1}>
                                                    <Box
                                                        onMouseEnter={() => setHoveredIndex(4)}
                                                        onMouseLeave={() => setHoveredIndex(null)}
                                                        sx={{ position: 'relative', height: '40px', width: '40px' }}
                                                    >
                                                        <Box
                                                            component="img"
                                                            src={coverarttrack3}
                                                            alt=""
                                                            sx={{
                                                                height: '40px',
                                                                width: '40px',
                                                                display: hoveredIndex === 4 ? 'none' : 'block'
                                                            }}
                                                        />
                                                        {hoveredIndex === 4 && (
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
                                                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Lazy Shadow Affair</Typography>
                                                    <Typography sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)' }}>Royal Big Ben Orchestra</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={2} sx={{ pl: 2 }}>
                                            4:02
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Box>
                    <Grid container spacing={2} sx={{ mt: 0 }}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12} sm={1} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, pt: 1, textAlign: 'center' }}>
                                            5
                                        </Grid>
                                        <Grid item xs={9}>
                                            <Grid container alignItems="center">
                                                <Grid item xs={1}>
                                                    <Box
                                                        onMouseEnter={() => setHoveredIndex(5)}
                                                        onMouseLeave={() => setHoveredIndex(null)}
                                                        sx={{ position: 'relative', height: '40px', width: '40px' }}
                                                    >
                                                        <Box
                                                            component="img"
                                                            src={coverarttrack4}
                                                            alt=""
                                                            sx={{
                                                                height: '40px',
                                                                width: '40px',
                                                                display: hoveredIndex === 5 ? 'none' : 'block'
                                                            }}
                                                        />
                                                        {hoveredIndex === 5 && (
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
                                                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Sultry City Nights</Typography>
                                                    <Typography sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)' }}>Royal Big Ben Orchestra</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={2} sx={{ pl: 2 }}>
                                            3:50
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Box>
                    <Grid container spacing={2} sx={{ mt: 0 }}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={12} sm={1} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, pt: 1, textAlign: 'center' }}>
                                            6
                                        </Grid>
                                        <Grid item xs={9} sx={{ mb: 5 }}>
                                            <Grid container alignItems="center">
                                                <Grid item xs={1}>
                                                    <Box
                                                        onMouseEnter={() => setHoveredIndex(6)}
                                                        onMouseLeave={() => setHoveredIndex(null)}
                                                        sx={{ position: 'relative', height: '40px', width: '40px' }}
                                                    >
                                                        <Box
                                                            component="img"
                                                            src={coverarttrack5}
                                                            alt=""
                                                            sx={{
                                                                height: '40px',
                                                                width: '40px',
                                                                display: hoveredIndex === 6 ? 'none' : 'block'
                                                            }}
                                                        />
                                                        {hoveredIndex === 6 && (
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
                                                    <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Silent Shadow Interlude</Typography>
                                                    <Typography sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)' }}>Royal Big Ben Orchestra</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={2} sx={{ pl: 2 }}>
                                            3:50
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>



            </MainWrapper >
        </Box >
    );
};

export default PlaylistProfileFirst;

