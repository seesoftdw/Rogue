import { Box, Tabs, Grid, Tab, Typography, createTheme, ThemeProvider, ListItemIcon, Button } from '@mui/material';
import React from 'react';
import MainWrapper from '../../../components/common/MainWrapper';

type Props = {};

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
    margin: '5% 0 0 1%',
};

const activeTabStyle = {
    background: 'white',
    borderBottom: 'none',
    margin: '5% 0 0 1%',
    borderTopLeftRadius: '7px',
    borderTopRightRadius: '7px',
    color: 'black',
    textDecorationLine: 'none'
};

const BritSchoolEarningProfile: React.FC<Props> = (props) => {
    const [tabValue, setTabValue] = React.useState(0);
    const [checked, setChecked] = React.useState(false);
    const [checked1, setChecked1] = React.useState(false);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const handleCheckboxChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked1(event.target.checked);
    };

    return (
        <Box className="bsEarningProfile">
            <MainWrapper>
                <Box width="100%" className="bg-grad-gray2">
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box sx={{ mt: 0.3 }}>
                            <ThemeProvider theme={theme}>
                                <Tabs value={tabValue} onChange={handleTabChange} sx={{ '& .MuiTabs-indicator': { display: 'none' } }}>
                                    <Tab className="artistsProfileTab" style={tabValue === 0 ? activeTabStyle : tabStyle} label="YOUR EARNINGS" />
                                    <Tab className="artistsProfileTab" style={tabValue === 1 ? activeTabStyle : tabStyle} label="PAYOUTS" />
                                </Tabs>
                            </ThemeProvider>
                        </Box>
                    </Box>
                </Box>
                {tabValue === 0 && (
                    <Box sx={{ pt: 3 }}>
                        <Grid container display={'flex'}>
                            <Grid item xs={5}>
                                <Typography className="earnings-title" sx={{ mt: 2, pl: 2 }}>TOTAL EARNINGS</Typography>
                                <Typography className='earnings-data' sx={{ pl: 2 }}>$5.0185</Typography>
                            </Grid>
                            <Box sx={{ border: '1px solid rgba(10, 32, 46, 0.1)', mt: 3 }}></Box>
                            <Grid item xs={6}>
                                <Grid container display={'flex'} sx={{ justifyContent: "space-between" }}>
                                    <Grid item xs={6}>
                                        <Typography className="earnings-title" sx={{ mt: 2, pl: 2 }}>BALANCE</Typography>
                                        <Typography className='earnings-data' sx={{ pl: 2 }}>$2</Typography>
                                    </Grid>
                                    <Grid item xs={6} sx={{textAlign:'right'}}>
                                        <Button className='withdraw' sx={{ mt: 5 }}>WITHDRAW</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Box sx={{ border: '1px solid rgba(10, 32, 46, 0.1)', mt: 3 }}></Box>

                        <Typography className='earnings-title' sx={{ mt: 2, pl: 2 }}>PERIOD</Typography>
                        <Typography className='earnings-data' sx={{ pl: 2 }}>March 2024</Typography>

                        <Typography className='donations-title' sx={{ pl: 2, pt: 2, pb: 2 }}>Donations from sales</Typography>

                        <Typography className='earnings-smallText' sx={{ pl: 2, pt: 2, }}>Tracks</Typography>
                        <Typography className='donations-raised' sx={{ color: 'black', fontSize: '28px', pl: 2, fontWeight: 'bold' }}>$0.18</Typography>
                        <Typography className='earnings-smallText' sx={{ pl: 2, }}>From 3 sold</Typography>

                    </Box>
                )}
                {tabValue === 1 && (
                    <Box sx={{ pt: 3 }}>
                        {/* Payouts content */}
                    </Box>
                )}
            </MainWrapper>
        </Box>
    );
};

export default BritSchoolEarningProfile;
