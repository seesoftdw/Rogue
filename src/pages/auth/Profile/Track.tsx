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


import { Link, Outlet } from 'react-router-dom';


const tracks =
    { title: 'Mellow Silhouette Rhapsody', image: track1 };


type Props = {}
interface BritSchoolIconProps {
    src: string;
    alt: string;
}

const Track = (props: Props) => {



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
            <Grid item xs={12} sm={4}>
                <img src={artist} alt='' style={{ height: '40px', width: '40px', borderRadius: '30px' }} />Royal Big Ben Orchestra
            </Grid>
            <Grid item xs={12} sm={2}>
                $12 <Button sx={{ height: '28px', width: '113px', border: ' 1px solid rgba(10, 32, 46, 0.4)', background: 'rgb(255, 255, 255)', borderRadius: '4px', fontSize: '10px', fontWeight: 'bold', ml: 3 }}>ADD TO CART</Button>
            </Grid>
        </Grid>
    );

    console.log('track profile rendered');

    return (

        <Box>

        </Box>
    )
}

export default Track


