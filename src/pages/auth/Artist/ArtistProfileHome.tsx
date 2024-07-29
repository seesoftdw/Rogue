import { Box, Grid, Typography, Tabs, Tab } from '@mui/material';
import React, { useState } from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import coverarttrack1 from '../../../assets/images/coverart-track-1.jpg';
import coverarttrack2 from '../../../assets/images/coverart-track-2.jpg';
import coverarttrack3 from '../../../assets/images/coverart-track-3.jpg';
import coverarttrack5 from '../../../assets/images/coverart-track-5.jpg';
import ArtistHome from '../../../assets/images/ArtistHome.png';


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

const ArtistProfileHome = () => {
    const [salesTabValue, setSalesTabValue] = useState(0);
    const [streamsTabValue, setStreamsTabValue] = useState(0);

    const handleSalesTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setSalesTabValue(newValue);
    };

    const handleStreamsTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setStreamsTabValue(newValue);
    };

    return (
        <Box>
            <MainWrapper>
                <Box>
                    

                    <Typography sx={{ color: 'rgb(10, 32, 46)', fontSize: '18px', fontWeight: 900, mt: 8, pl: 2, pb: 2 }}>Recent releases</Typography>
                    <Grid item xs={12} sx={{ ml: 2 }}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Box
                                    component="img"
                                    src={coverarttrack1}
                                    alt=""
                                    sx={{ height: '261px%', width: '261px' }}
                                />
                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: 600 }}>Mellow Silhouette Rhapsody</Typography>
                                <Grid item xs={12} sx={{ pt: 1 }}>
                                    <Grid container>
                                        <Grid item xs={1}>
                                            <Box sx={{ height: '19.38px', width: '19.38px', background: 'rgb(45,193,45)', borderRadius: '20px' }}></Box>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '16px', pl: 1 }}>Listed in marketplace</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <Box
                                    component="img"
                                    src={coverarttrack2}
                                    alt=""
                                    sx={{ height: '261px%', width: '261px' }}
                                />
                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: 600 }}>Smooth Moonlight Symphony</Typography>
                                <Grid item xs={12} sx={{ pt: 1 }}>
                                    <Grid container>
                                        <Grid item xs={1}>
                                            <Box sx={{ height: '19.38px', width: '19.38px', background: 'rgb(45,193,45)', borderRadius: '20px' }}></Box>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '16px', pl: 1 }}>Listed in marketplace</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <Box
                                    component="img"
                                    src={coverarttrack3}
                                    alt=""
                                    sx={{ height: '261px%', width: '261px' }}
                                />
                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: 600 }}>Sultry City Nights</Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Box
                                    component="img"
                                    src={coverarttrack5}
                                    alt=""
                                    sx={{ height: '261px%', width: '261px' }}
                                />
                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '16px', fontWeight: 600 }}>Silent Night's Serenade for the Lonely</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Box sx={{ border: '1px solid rgba(10, 32, 46, 0.2)', mt: 4, ml: 2, mr: 2 }}></Box>
                    <Typography sx={{ color: 'rgb(10, 32, 46)', fontSize: '18px', fontWeight: 'bold', mt: 5, pl: 2, pb: 2 }}>Sales</Typography>
                    <Grid item xs={12} sx={{ ml: 2 }}>
                        <Grid container>
                            <Grid item xs={6.1}>
                                <Typography sx={{ color: 'rgb(10, 32, 46)', fontSize: '28px', fontWeight: 900, mt: 1 }}>$12,640</Typography>
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
                                    {/* Sales data for Last 30 days */}
                                </TabPanel>
                            </Grid>
                            <Grid item xs={2}>
                                <TabPanel value={salesTabValue} index={1}>
                                    {/* Sales data for Last 6 weeks */}
                                </TabPanel>
                            </Grid>
                            <Grid item xs={2}>
                                <TabPanel value={salesTabValue} index={2}>
                                    {/* Sales data for Last 2 months */}
                                </TabPanel>
                            </Grid>
                            <Grid item xs={1}>
                                <TabPanel value={salesTabValue} index={3}>
                                    {/* Sales data for All time */}
                                </TabPanel>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Typography sx={{ color: '  rgba(10, 32, 46, 0.9)', fontSize: '18px', fontWeight: 'bold', pt: 4, pl: 2 }}>Total  - April 2024 - May 2022</Typography>
                    <Box
                        component="img"
                        src={ArtistHome}
                        alt=""
                        sx={{ height: '100%', width: '100%' }}
                    />
                    <Box sx={{ border: '1px solid rgba(10, 32, 46, 0.2)', mt: 1, ml: 2, mr: 2 }}></Box>
                    <Typography sx={{ color: 'rgb(10, 32, 46)', fontSize: '18px', fontWeight: 'bold', mt: 5, pl: 2, pb: 2 }}>Streams</Typography>
                    <Grid item xs={12} sx={{ ml: 2 }}>
                        <Grid container>
                            <Grid item xs={6.1}>
                                <Typography sx={{ color: 'rgb(10, 32, 46)', fontSize: '28px', fontWeight: 900, mt: 1 }}>4,567</Typography>
                            </Grid>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={streamsTabValue} onChange={handleStreamsTabChange} aria-label="streams tabs">
                                    <Tab label="Last 30 days" {...a11yProps(0)} />
                                    <Tab label="Last 6 weeks" {...a11yProps(1)} />
                                    <Tab label="Last 2 months" {...a11yProps(2)} />
                                    <Tab label="All time" {...a11yProps(3)} />
                                </Tabs>
                            </Box>
                            <Grid item xs={2}>
                                <TabPanel value={streamsTabValue} index={0}>
                                    {/* Streams data for Last 30 days */}
                                </TabPanel>
                            </Grid>
                            <Grid item xs={2}>
                                <TabPanel value={streamsTabValue} index={1}>
                                    {/* Streams data for Last 6 weeks */}
                                </TabPanel>
                            </Grid>
                            <Grid item xs={2}>
                                <TabPanel value={streamsTabValue} index={2}>
                                    {/* Streams data for Last 2 months */}
                                </TabPanel>
                            </Grid>
                            <Grid item xs={1}>
                                <TabPanel value={streamsTabValue} index={3}>
                                    {/* Streams data for All time */}
                                </TabPanel>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Typography sx={{ color: '  rgba(10, 32, 46, 0.9)', fontSize: '18px', fontWeight: 'bold', pt: 4, pl: 2 }}>Total  - April 2024 - May 2022</Typography>
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

export default ArtistProfileHome;
