import { Box, Divider, ListItemIcon, Tab, Tabs, Typography, Grid, createTheme, CardMedia, ThemeProvider, Button, } from '@mui/material';
import React from 'react'
// import Header from './ArtistProfileHeader';
import MainWrapper from '../../../components/common/MainWrapper';
import CustomBreadcrumbs from '../../../components/common/Breadcrumbs';
import track1 from '../../../assets/images/coverart-track-1.jpg'
import { TbPlayerPlayFilled } from "react-icons/tb";
import { IoMdArrowDropup } from "react-icons/io";
import bars from '../../../assets/images/bars.png'
import coverart from '../../../assets/images/coverart-track-1.jpg'
import artist from '../../../assets/images/artist-1.jpg'



import { Link } from 'react-router-dom';




const tracks =
    { title: 'Mellow Silhouette Rhapsody', image: track1 };


type Props = {}
interface BritSchoolIconProps {
    src: string;
    alt: string;
}

const TrackProfile = (props: Props) => {



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



    const SideSection = () => {
        return (
            <Box>

            </Box>
        )
    }

    const theme = createTheme({
        components: {
            MuiTab: {
                styleOverrides: {
                    root: {
                        borderBottom: 'none',
                        textDecorationLine: 'none'
                    },
                },
            },
        },
    });




    const tabStyle = {
        'margin': '5% 0 0 1%',
    }

    const activeTabStyle = {
        'background': 'white',
        'border-bottom': 'none',
        'margin': '5% 0 0 1%',
        'border-top-left-radius': '7px',
        'border-top-right-radius': '7px',
        'color': 'black',
        'text-decoration-line': 'none'
    }

    const profileIconStyle = {
        'height': 27,
        'width': 27,
        'marginLeft': '5px',
        'marginRight': '5px',
    }

    const trackContent = (
        <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={4}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={2}>
                                <img src={coverart} alt='' style={{ height: '40px', width: '40px' }} />
                            </Grid>

                            <Grid item xs={10}>
                                <Typography sx={{ fontSize: '16px', fontWeight: 500 }}>Mellow Silhouette Rhapsody</Typography>
                                <Typography sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)' }}>Royal Big Ben Orchestra</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={2}>
                3 of 10
            </Grid>
            <Grid item xs={0.5}>
                <img
                    src={artist}
                    alt=''
                    style={{ height: '40px', width: '40px', borderRadius: '30px' }}
                />
            </Grid>
            <Grid item xs={2.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography>Royal Big Ben Orchestra</Typography>
            </Grid>
            <Grid item xs={12} sm={2} sx={{ ml: 11 }}>
                $12 <Button sx={{ height: '28px', width: '113px', border: ' 1px solid rgba(10, 32, 46, 0.4)', background: 'rgb(255, 255, 255)', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold', ml: 3, color: 'rgba(10, 32, 46, 0.6)' }}>ADD TO CART</Button>
            </Grid>
        </Grid>
    );

    return (
        <Box>
            <MainWrapper>
                <Box width="100%" className='bg-grad-gray' >
                    <Box>
                        <CustomBreadcrumbs />
                    </Box>
                    {/* <Header /> */}
                    <Box>

                        <Grid container spacing={2} sx={{ mt: 1 }} >
                            <Grid item xs={12}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={2.5}>
                                        <CardMedia
                                            component="img"
                                            height="200px"

                                            image={tracks.image}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="h6" component="div" sx={{ fontSize: '14px', pt: 2.5 }}  >
                                            Track
                                        </ Typography>
                                        <Typography variant="body1" component="div" sx={{ fontSize: '36px', fontWeight: 'bold' }}>
                                            Mellow Silhouette Rhapsody
                                        </Typography>
                                        <Typography variant="h6" component="div" sx={{ fontSize: '16px' }}  >
                                            Royal Big Ben Orchestra  2024 . 4:32
                                        </ Typography>

                                        <Grid container spacing={2} sx={{ mt: 0 }}>
                                            <Grid item xs={12} sm={1.5}>
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
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <Button sx={{ border: '1px solid rgba(10, 32, 46, 0.4)', color: 'rgba(10, 32, 46, 0.6)', mt: 1, fontWeight: 'bold', background: 'rgb(255, 255, 255)' }}>Buy from $14</Button>
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <Box sx={{ height: '40px', width: '40px', background: 'rgb(255, 255, 255)', borderRadius: '7px', border: '1px solid rgba(10, 32, 46, 0.4)', pl: 1.5, mt: 1 }}>...</Box>                                            </Grid>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Box>

                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box>
                            <ThemeProvider theme={theme}>
                                <Tabs value={tabValue} onChange={handleChange} sx={{
                                    '& .MuiTabs-indicator': {
                                        display: 'none',


                                    }
                                }} >
                                    <Tab className='artistsProfileTab' style={tabValue === 0 ? activeTabStyle : tabStyle} label="INFO" />
                                    <Tab className='artistsProfileTab' style={tabValue === 1 ? activeTabStyle : tabStyle} label="MARKETPLACE" />
                                    <Tab className='artistsProfileTab' style={tabValue === 2 ? activeTabStyle : tabStyle} label="ACTIVITY" />
                                </Tabs>
                            </ThemeProvider>
                        </Box>
                    </Box>

                    {tabValue === 0 && (
                        <Box display={'flex'} py={0}>
                            <Box >
                                <Divider sx={{ width: '92%', marginBottom: '1%' }} />
                                <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc', pb: 2 }} >
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={3}>
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600 }}> LAST SALE </Typography>
                                                <Grid container>
                                                    <Grid item xs={12} >
                                                        <Grid container >
                                                            <Grid item xs={12} sm={3}>
                                                                <Typography sx={{ fontSize: '28px', fontWeight: 'bold' }}>
                                                                    $12
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12} sm={1} sx={{ pt: 1 }}>
                                                                <Typography sx={{ height: '11px', width: '15px', color: 'rgb(45, 193, 45)' }}>
                                                                    <IoMdArrowDropup />
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item xs={12} sm={4} sx={{ pt: 1 }}>
                                                                <Typography sx={{ color: 'rgb(45, 193, 45)' }}>
                                                                    $2 (20%)
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={12} sm={2}>
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600 }}> FLOOR PRICE </Typography>
                                                <Typography sx={{ fontSize: '28px', fontWeight: 'bold' }}> $14
                                                    <Button sx={{ ml: 3, height: '28px', width: '49px', background: ' linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)', color: 'rgb(255, 255, 255)', border: '1px solid rgba(10, 32, 46, 0.25)', borderRadius: '4px', fontSize: '14px', fontWeight: 'bold' }}>
                                                        BUY</Button>
                                                </Typography>
                                            </Grid>

                                            <Grid item xs={12} sm={3}>
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600 }}>TOTAL STREAMS </Typography>
                                                <Typography sx={{ fontSize: '28px', fontWeight: 'bold' }}>230</Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={3} >
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600 }}> LAST 30 DAY STREAM </Typography>
                                                <img src={bars} alt='Stream Icon' style={{ height: '24px', width: '179px', marginTop: 10 }} /> <IoMdArrowDropup style={{ color: ' rgb(45, 193, 45)' }} />  +8%
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc', pb: 2 }} >
                                    <Grid item xs={12}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} sm={6}>
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600 }}> TITLE </Typography>
                                                <Typography sx={{ fontSize: '16px' }}> Mellow Silhouette Rhapsody</Typography>

                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600, pt: 3, pb: 1 }}> DESCRIPTION </Typography>
                                                <Typography sx={{ fontSize: '16px' }}> Dedicated to bringing the best of jazz to stages across the UK and beyond, the Royal Big Ben Orchestra has earned accolades for its commitment to musical excellence and its ability to connect with audiences on a deeply emotional level. Whether performing in intimate jazz clubs or grand concert halls, they remain true to their mission of celebrating the joy, diversity, and enduring appeal of jazz music.</Typography>

                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600, pt: 3, pb: 1 }}> AUTHORS </Typography>
                                                <Typography sx={{ fontSize: '16px' }}> Jacob Smith, George Wilson, Harry Smith</Typography>

                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600, pt: 3, pb: 1 }}> LYRICS </Typography>
                                                <Typography sx={{ fontSize: '16px' }}> Dedicated to bringing the best of jazz to stages across the UK and beyond, the Royal Big Ben Orchestra has earned accolades for its commitment to musical excellence and its ability to connect with audiences on a deeply emotional level. Whether performing in intimate jazz clubs or grand concert halls, they remain true to their mission of celebrating the joy, diversity, and enduring appeal of jazz music.</Typography>

                                                <Link to='#'><Typography sx={{ color: 'rgb(0, 154, 255)', fontSize: '14px', fontWeight: 600, pt: 3, pb: 1 }}> View all lyrics </Typography></Link>

                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600, pt: 3, pb: 1 }}> WRITERS </Typography>
                                                <Typography sx={{ fontSize: '16px' }}> Jacob Smith, George Wilson, Harry Smith</Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600 }}> NUMBER OF COPIES</Typography>
                                                <Typography sx={{ fontSize: '16px' }}> 10</Typography>
                                                <br></br>
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600 }}> MARKET PLACE</Typography>
                                                <Typography sx={{ color: 'rgb(0, 154, 255)', fontSize: '16px' }}> 8 copies for sale</Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600 }}>OWNERS </Typography>
                                                <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>3</Typography>
                                            </Grid>
                                            <Grid item xs={12} sm={2}>
                                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 600 }}> RELEASE DATE</Typography>
                                                <Typography sx={{ fontSize: '16px' }}>Apr 5, 2024 </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                            </Box>
                            <Box flex={1} py={5}>
                                <SideSection />
                            </Box>
                        </Box>
                    )}


                    {tabValue === 1 && (
                        <Box >
                            <Box sx={{ mt: 7 }}>
                                <Grid item xs={12}>
                                    <Grid container spacing={2} sx={{ borderTop: '1px solid #cccccc', borderBottom: '1px solid #cccccc' }}>
                                        <Grid item xs={12} sm={4} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3, textAlign: 'center' }}>
                                            NAME
                                        </Grid>
                                        <Grid item xs={12} sm={2} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3, textAlign: 'center' }}>
                                            COPY
                                        </Grid>
                                        <Grid item xs={12} sm={4} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3, textAlign: 'center' }}>
                                            SELLER
                                        </Grid>
                                        <Grid item xs={12} sm={2} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3, textAlign: 'center' }}>
                                            PRICE
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Box>


                            <Box>
                                {[...Array(8)].map((_, index) => (
                                    <Box key={index}>{trackContent}</Box>
                                ))}
                            </Box>

                            <Box flex={1}>
                                <SideSection />
                            </Box>
                        </Box>
                    )}

                    {tabValue === 2 && (
                        <Box>
                            <Grid item xs={12}>
                                <Grid container spacing={2} sx={{ borderTop: '1px solid #cccccc', borderBottom: '1px solid #cccccc', mt: 5 }}>
                                    <Grid item xs={12} sm={2} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3, textAlign: 'center' }}>
                                        EVENT
                                    </Grid>
                                    <Grid item xs={12} sm={3} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3, textAlign: 'center' }}>
                                        FROM SELLER
                                    </Grid>
                                    <Grid item xs={12} sm={2} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3, textAlign: 'center' }}>
                                        TO BUYER
                                    </Grid>
                                    <Grid item xs={12} sm={1} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3, textAlign: 'center' }}>
                                        COPY
                                    </Grid>
                                    <Grid item xs={12} sm={1} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3, textAlign: 'center' }}>
                                        PRICE
                                    </Grid>
                                    <Grid item xs={12} sm={3} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3, textAlign: 'center' }}>
                                        DATE
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', p: 3, textAlign: 'center' }}>
                                        Sale
                                    </Grid>


                                    <Grid item xs={0.5}>
                                        <img
                                            src={artist}
                                            alt=''
                                            style={{ height: '40px', width: '40px', borderRadius: '30px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography>Royal Big Ben Orchestra</Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={2} sx={{ fontSize: '14px', color: 'black', p: 3, textAlign: 'center' }}>
                                        8b06e2703a02
                                    </Grid>
                                    <Grid item xs={12} sm={1} sx={{ fontSize: '16px', color: 'black', p: 3, textAlign: 'center' }}>
                                        1 of 10
                                    </Grid>
                                    <Grid item xs={12} sm={1} sx={{ fontSize: '16px', color: 'black', p: 3, textAlign: 'center' }}>
                                        $12
                                    </Grid>
                                    <Grid item xs={12} sm={3} sx={{ ffontSize: '16px', color: 'black', p: 3, textAlign: 'center' }}>
                                        2024-04-04 19:00:10
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', p: 3, textAlign: 'center' }}>
                                        Sale
                                    </Grid>


                                    <Grid item xs={0.5}>
                                        <img
                                            src={artist}
                                            alt=''
                                            style={{ height: '40px', width: '40px', borderRadius: '30px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography>Royal Big Ben Orchestra</Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={2} sx={{ fontSize: '14px', color: 'black', p: 3, textAlign: 'center' }}>
                                        968d3af29501
                                    </Grid>
                                    <Grid item xs={12} sm={1} sx={{ fontSize: '16px', color: 'black', p: 3, textAlign: 'center' }}>
                                        2 of 10
                                    </Grid>
                                    <Grid item xs={12} sm={1} sx={{ fontSize: '16px', color: 'black', p: 3, textAlign: 'center' }}>
                                        $12
                                    </Grid>
                                    <Grid item xs={12} sm={3} sx={{ ffontSize: '16px', color: 'black', p: 3, textAlign: 'center' }}>
                                        2024-04-04 19:00:10
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', p: 3, textAlign: 'center' }}>
                                        Sale
                                    </Grid>


                                    <Grid item xs={0.5}>
                                        <img
                                            src={artist}
                                            alt=''
                                            style={{ height: '40px', width: '40px', borderRadius: '30px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={2.5} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography>Royal Big Ben Orchestra</Typography>
                                    </Grid>

                                    {/* <Grid item xs={12} sm={2} sx={{ fontSize: '14px', color: 'black', p: 3, textAlign: 'center' }}>
                                        Fred Smith
                                    </Grid> */}

                                    <Grid item xs={0.1} >
                                        <img
                                            src={artist}
                                            alt=''
                                            style={{ height: '40px', width: '40px', borderRadius: '30px' }}
                                        />
                                    </Grid>
                                    <Grid item xs={1.8} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography>Fred Smith</Typography>
                                    </Grid>

                                    <Grid item xs={12} sm={1} sx={{ fontSize: '16px', color: 'black', p: 3, textAlign: 'center' }}>
                                        3 of 10
                                    </Grid>
                                    <Grid item xs={12} sm={1} sx={{ fontSize: '16px', color: 'black', p: 3, textAlign: 'center' }}>
                                        $12
                                    </Grid>
                                    <Grid item xs={12} sm={3} sx={{ ffontSize: '16px', color: 'black', p: 3, textAlign: 'center' }}>
                                        2024-04-04 19:00:10
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Box flex={1}>
                                <SideSection />
                            </Box>
                        </Box>
                    )}

                </Box>
            </MainWrapper>
        </Box>
    )
}

export default TrackProfile


