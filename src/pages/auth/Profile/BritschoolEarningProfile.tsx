import { Box, Tabs, Grid, Tab, Typography, createTheme, ThemeProvider, ListItemIcon, Button } from '@mui/material';
import React from 'react';
import MainWrapper from '../../../components/common/MainWrapper';

type Props = {};

interface BritSchoolIconProps {
    src: string;
    alt: string;
}

const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
    <textarea {...props} style={{ width: '100%', height: '100%', padding: '8px', borderRadius: '4px', border: '1px solid rgba(10, 32, 46, 0.2)' }} />
);

const BritSchoolIcon: React.FC<BritSchoolIconProps> = ({ src, alt }) => (
    <ListItemIcon>
        <img src={src} alt={alt} style={{ width: 40, height: 40, borderRadius: '50%' }} />
    </ListItemIcon>
);

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

const profileIconStyle = {
    height: 27,
    width: 27,
    marginLeft: '5px',
    marginRight: '5px',
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
        <Box>
            <MainWrapper>
                <Box width="100%" className="bg-grad-gray2">
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box sx={{ mt: 0.3 }}>
                            <ThemeProvider theme={theme} >
                                <Tabs value={tabValue} onChange={handleTabChange} sx={{ '& .MuiTabs-indicator': { display: 'none' } }}>
                                    <Tab  sx = {{ }}className="artistsProfileTab" style={tabValue === 0 ? activeTabStyle : tabStyle} label="YOUR EARNINGS" />
                                    <Tab className="artistsProfileTab" style={tabValue === 1 ? activeTabStyle : tabStyle} label="PAYOUTS" />
                                </Tabs>
                            </ThemeProvider>
                        </Box>
                    </Box>
                </Box>
                {tabValue === 0 && (
                    <Box sx={{ pt: 3 }}>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 'bold', mt: 2, pl: 2 }}>PERIOD</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 'bold', mt: 2, pl: 2 }}>TOTAL EARNED</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', fontWeight: 'bold', mt: 2, pl: 2 }}>BALANCE</Typography>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ pt: 0 }}>
                            <Grid item xs={4}>
                                <Typography sx={{ color: 'black', fontSize: '36px', fontWeight: 'bold', pl: 2 }}>March 2024</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography sx={{ color: 'black', fontSize: '36px', fontWeight: 'bold', pl: 2 }}>$2.0185</Typography>
                            </Grid>


                            <Grid item xs={4}>
                                <Grid container>
                                    <Grid item xs={7}>
                                        <Typography sx={{ color: 'black', fontSize: '36px', fontWeight: 'bold', pl: 2 }}>$2.0185</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Button  sx = {{height : '40px' , width : '129px' , border : ' 1px solid rgba(10, 32, 46, 0.4)' , color : 'rgba(10, 32, 46, 0.6)' , fontSize : '16px' , fontWeight : 'bold' , mt : 1}}>WIDTHRAW</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Box sx = {{border : '1px solid rgba(10, 32, 46, 0.1)' ,mt : 3}}></Box>
                        <Typography sx={{ color: 'black', fontSize: '18px', fontWeight: 'bold', pl: 2 ,pt: 2 , pb : 2 }}>Donations from sales</Typography>

                        <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 2 ,pt: 2 , }}>Tracks</Typography>
                        <Typography sx={{ color: 'black', fontSize: '28px', pl: 2  ,  fontWeight: 'bold'}}>$0.18</Typography>
                        <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 2  , }}>From 3 sold</Typography>

                        <Box sx = {{border : '1px solid rgba(10, 32, 46, 0.1)' ,mt : 3}}></Box>




                    </Box>
                )}
                {tabValue === 1 && (
                    <Box sx={{ pt: 3 }}>

                    </Box>
                )}
            </MainWrapper>
        </Box>
    );
};

export default BritSchoolEarningProfile;
