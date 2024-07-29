import { Box, Grid, Typography, Button, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import playlist1 from '../../../assets/images/playlist1.png';
import coverarttrack1 from '../../../assets/images/coverart-track-1.jpg';
import coverarttrack2 from '../../../assets/images/coverart-track-2.jpg';
import coverarttrack3 from '../../../assets/images/coverart-track-3.jpg';
import coverarttrack5 from '../../../assets/images/coverart-track-5.jpg';
import ArtistHome from '../../../assets/images/ArtistHome.png';
import './styles.scss';


interface BritSchoolIconProps {
    src: string;
    alt: string;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
};

const BritSchoolIcon: React.FC<BritSchoolIconProps> = ({ src, alt }) => {
    return (
        <Box>
            <img src={src} alt={alt} style={{ width: 40, height: 40, borderRadius: 50 }} />
        </Box>
    );
};

const BritProfleSecond = () => {
    const [salesTabValue, setSalesTabValue] = useState(0);
    const [streamsTabValue, setStreamsTabValue] = useState(0);

    const handleSalesTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setSalesTabValue(newValue);
    };

    const handleStreamsTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setStreamsTabValue(newValue);
    };

    return (
        <Box className="bsArtistProfileSecond">
            <MainWrapper>
                <Box>
                    <Typography className='bsHeading1' sx={{ mt: 8, pl: 2, pb: 2 }}>Recent releases</Typography>
                    <Grid item xs={12} sx={{ ml: 2 }}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Box
                                    component="img"
                                    src={coverarttrack1}
                                    alt=""
                                    sx={{ height: '261px%', width: '261px' }}
                                />
                                <Typography className="track-title">Mellow Silhouette Rhapsody</Typography>

                            </Grid>
                            <Grid item xs={3}>
                                <Box
                                    component="img"
                                    src={coverarttrack2}
                                    alt=""
                                    sx={{ height: '261px%', width: '261px' }}
                                />
                                <Typography className="track-title">Smooth Moonlight Symphony</Typography>

                            </Grid>
                            <Grid item xs={3}>
                                <Box
                                    component="img"
                                    src={coverarttrack3}
                                    alt=""
                                    sx={{ height: '261px%', width: '261px' }}
                                />
                                <Typography className="track-title">Sultry City Nights</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Box
                                    component="img"
                                    src={coverarttrack5}
                                    alt=""
                                    sx={{ height: '261px%', width: '261px' }}
                                />
                                <Typography className="track-title">Silent Night's Serenade for the Lonely</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Box className="divider" sx={{ border: '1px solid rgba(10, 32, 46, 0.2)', mt: 4, ml: 2, mr: 2 }}></Box>
                    <Typography className="donations-title" sx={{ mt: 5, pl: 2, pb: 2 }}>Donations from sales</Typography>
                    <Grid item xs={12} sx={{ ml: 2 }}>
                        <Grid container>
                            <Grid item xs={6.1}>
                                <Typography className='donations-raised' sx={{ mt: 1 }}>$2,640</Typography>
                            </Grid>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={salesTabValue} onChange={handleSalesTabChange} aria-label="sales tabs">
                                    <Tab label="Last 30 days" {...a11yProps(0)} />
                                    <Tab label="Last 6 weeks" {...a11yProps(1)} />
                                    <Tab label="Last 2 months" {...a11yProps(2)} />
                                    <Tab label="All time" {...a11yProps(3)} />
                                </Tabs>
                            </Box>
                            <Grid item xs={2}>
                                <TabPanel value={salesTabValue} index={0}>
                                    
                                </TabPanel>
                            </Grid>
                            <Grid item xs={2}>
                                <TabPanel value={salesTabValue} index={1}>
                                   
                                </TabPanel>
                            </Grid>
                            <Grid item xs={2}>
                                <TabPanel value={salesTabValue} index={2}>
                                    
                                </TabPanel>
                            </Grid>
                            <Grid item xs={1}>
                                <TabPanel value={salesTabValue} index={3}>
                                   
                                </TabPanel>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Typography className='totals' sx={{ pt: 4, pl: 2 }}>Total  - April 2024 - May 2022</Typography>
                    <Box
                        component="img"
                        src={ArtistHome}
                        alt=""
                        sx={{ height: '100%', width: '100%' }}
                    />

                </Box>

            </MainWrapper>
        </Box>
    );
};

export default BritProfleSecond;