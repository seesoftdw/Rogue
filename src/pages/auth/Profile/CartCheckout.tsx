import {
    Box,
    Divider,
    TextField,
    ListItemIcon,
    Tab,
    Tabs,
    Typography,
    Grid,
    createTheme,
    CardMedia,
    ThemeProvider,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import track1 from '../../../assets/images/coverart-track-1.jpg';
import coverart from '../../../assets/images/coverart-track-1.jpg';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const tracks = { title: 'Mellow Silhouette Rhapsody', image: track1 };

type Props = {};

interface BritSchoolIconProps {
    src: string;
    alt: string;
}

const CartProfile: React.FC<Props> = (props) => {
    const [tabValue, setTabValue] = useState(0);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        document.body.classList.add('remove-before');
        return () => {
            document.body.classList.remove('remove-before');
        };
    }, []);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleDropdownChange = (event: SelectChangeEvent<string>) => {
        setSelectedValue(event.target.value);
    };

    const BritSchoolIcon: React.FC<BritSchoolIconProps> = ({ src, alt }) => {
        return (
            <ListItemIcon>
                <img src={src} alt={alt} style={{ width: 40, height: 40, borderRadius: 50 }} />
            </ListItemIcon>
        );
    };

    const SideSection = () => {
        return <Box></Box>;
    };

    const theme = createTheme({
        components: {
            MuiTab: {
                styleOverrides: {
                    root: {
                        borderBottom: 'none',
                        textDecorationLine: 'none',
                    },
                },
            },
        },
    });

    const tabStyle = {
        margin: '5% 0 0 1%',
    };

    const activeTabStyle = {
        background: 'white',
        borderBottom: 'none',
        margin: '5% 0 0 1%',
        borderTopLeftRadius: '7px',
        borderTopRightRadius: '7px',
        color: 'black',
        textDecorationLine: 'none',
    };

    const profileIconStyle = {
        height: 27,
        width: 27,
        marginLeft: '5px',
        marginRight: '5px',
    };

    return (
        <Box>
            <MainWrapper>
                <Box width="100%" className="bg-grad-gray">
                    <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc' }}>
                        <Grid item xs={12} display={'flex'}>
                            <Grid item xs={12} >
                                <Typography sx={{ fontSize: '36px', fontWeight: 'bold' }}>Cart</Typography>
                                <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc' }}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2} sx={{ borderTop: '1px solid #cccccc', borderBottom: '1px solid #cccccc' }}>
                                            <Grid item xs={12} sm={8} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3 }}>
                                                NAME
                                            </Grid>
                                            <Grid item xs={12} sm={2} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3 }}>
                                                COPY
                                            </Grid>

                                            <Grid item xs={12} sm={2} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3 }}>
                                                PRICE
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc' }}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2} sx={{ borderBottom: '1px solid #cccccc' }}>
                                            <Grid item xs={8}>
                                                <Grid container>
                                                    <Grid item xs={1.5} sx={{ pb: 2 }}>
                                                        <img src={coverart} alt="" style={{ height: '40px', width: '40px' }} />
                                                    </Grid>

                                                    <Grid item xs={5}>
                                                        <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Mellow Silhouette Rhapsody</Typography>
                                                        <Typography sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)' }}>
                                                            Royal Big Ben Orchestra
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', p: 3 }}>
                                                4 of 10
                                            </Grid>
                                            <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', fontWeight: 600, p: 1 }}>
                                                $12{' '}
                                                <Button>
                                                    <RiDeleteBin5Fill style={{ height: '20px', width: '17.5px', color: 'rgba(10, 32, 46, 0.4)' }} />
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc' }}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2} sx={{ borderBottom: '1px solid #cccccc' }}>
                                            <Grid item xs={8}></Grid>
                                            <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', p: 3 }}>
                                                Subtotal
                                            </Grid>
                                            <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', fontWeight: 600, p: 3 }}>
                                                $12
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc' }}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2} sx={{ borderBottom: '1px solid #cccccc' }}>
                                            <Grid item xs={8}></Grid>
                                            <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', p: 3 }}>
                                                Taxes
                                            </Grid>
                                            <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', fontWeight: 600, p: 3 }}>
                                                0
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc' }}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2} sx={{ borderBottom: '1px solid #cccccc' }}>
                                            <Grid item xs={8}></Grid>
                                            <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', p: 3 }}>
                                                Total due
                                            </Grid>
                                            <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', fontWeight: 600, p: 3 }}>
                                                $12
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Link to='/emptycart'>
                                    <Button sx={{
                                        mt: 3,
                                        background: 'linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)',
                                        border: '1px solid rgba(10, 32, 46, 0.25)',
                                        height: '35px',
                                        width: '300px',
                                        color: 'rgb(255, 255, 255)',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        mb: 10,
                                        ml: 95
                                    }}
                                    >CHECKOUT</Button>
                                </Link>

                            </Grid>





                        </Grid>
                    </Grid>
                </Box>
            </MainWrapper>
        </Box>
    );
};

export default CartProfile;
