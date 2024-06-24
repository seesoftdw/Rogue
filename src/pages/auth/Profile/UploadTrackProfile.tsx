import { Box, Tabs, Grid, Tab, Typography, TextField, createTheme, ThemeProvider, ListItemIcon, TextareaAutosize, Button, FormControl, Select, InputLabel, Checkbox } from '@mui/material';
import React from 'react';
import Header from './ArtistProfileHeader';
import MainWrapper from '../../../components/common/MainWrapper';
import CustomBreadcrumbs from '../../../components/common/Breadcrumbs';
import { FaMusic } from "react-icons/fa6";
import { Link } from 'react-router-dom';

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

const UploadTrackProfile: React.FC<Props> = (props) => {
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
                <Box width="100%" className="bg-grad-gray1">
                    <Typography sx={{ fontSize: '36px', fontWeight: 'bold' }}>Upload track</Typography>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Box sx={{ mt: 0.3 }}>
                            <ThemeProvider theme={theme} >
                                <Tabs value={tabValue} onChange={handleTabChange} sx={{ '& .MuiTabs-indicator': { display: 'none' } }}>
                                    <Tab className="artistsProfileTab" style={tabValue === 0 ? activeTabStyle : tabStyle} label="TRACK" />
                                    <Tab className="artistsProfileTab" style={tabValue === 1 ? activeTabStyle : tabStyle} label="LISTING" />
                                </Tabs>
                            </ThemeProvider>
                        </Box>
                    </Box>
                </Box>
                {tabValue === 0 && (
                    <Box display={'flex'} py={0}>
                        <Box flex={4}>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 23, pt: 4, pb: 1 }}>Track title</Typography>
                            <TextField size="small" sx={{ width: '736px', ml: 23, background: 'rgba(10, 32, 46, 0.05)' }} />
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 23, pt: 1.5, pb: 1 }}>Description</Typography>
                            <Box sx={{ ml: 23 }}>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={7}
                                    style={{ width: '736px', padding: '8px', borderRadius: '4px', borderColor: 'gray', background: "rgba(10, 32, 46, 0.05)" }}
                                />
                            </Box>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 23, pt: 1.5, pb: 1 }}>Genre</Typography>
                            <FormControl size='small' sx={{ m: 1, minWidth: 120, ml: 23, width: '224px' }}>
                                <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
                                <Select native defaultValue="" id="grouped-native-select" label="Grouping">
                                    <option aria-label="None" value="" />
                                    <optgroup label="Category 1">
                                        <option value={1}>Option 1</option>
                                        <option value={2}>Option 2</option>
                                    </optgroup>
                                </Select>
                            </FormControl>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 23, pt: 1.5, pb: 1 }}>Authors</Typography>
                            <TextField size="small" sx={{ width: '736px', ml: 23, background: 'rgba(10, 32, 46, 0.05)' }} />
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 23, pt: 1.5, pb: 1 }}>Lyrics</Typography>
                            <Box sx={{ ml: 23 }}>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={7}
                                    style={{ width: '736px', padding: '8px', borderRadius: '4px', borderColor: 'gray', background: "rgba(10, 32, 46, 0.05)" }}
                                />
                            </Box>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 23, pt: 1.5, pb: 1 }}>Writers</Typography>
                            <TextField size="small" sx={{ width: '736px', ml: 23, background: 'rgba(10, 32, 46, 0.05)' }} />
                            <Box sx={{ height: '30px', borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '736px', ml: 23 }}></Box>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 23, pt: 1.5, pb: 1, fontWeight: 'bold' }}>Audio </Typography>
                            <Button sx={{ height: '28px', width: '112px', background: 'linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)', fontSize: '12px', color: 'rgb(255, 255, 255)', fontWeight: 'bold', ml: 23, mt: 2 }}>BROWSE FILE</Button>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 23, pt: 2, pb: 1 }}>A 600MB maximum file size. Lossless WAV, AIF or FLAC file format.</Typography>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 23, pt: 1.5, pb: 1, fontWeight: 'bold' }}>Audio Preview </Typography>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 23, pt: 1, pb: 1 }}>Users will be able to listen to a 30 second preview of the track before purchasing.</Typography>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 23, pt: 1, pb: 1 }}>We’ll generate the 30 second preview from the beginning of the track or <br />you can upload your own 30 seconds:</Typography>
                            <Button sx={{ height: '28px', width: '178px', background: 'white', fontSize: '12px', color: 'rgba(10, 32, 46, 0.6)', fontWeight: 'bold', ml: 23, mt: 2, border: '1px solid rgba(10, 32, 46, 0.4)' }}>BROWSE PREVIEW FILE</Button>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 23, pt: 2, pb: 1 }}>Maximum length 30 seconds. WAV, AIF, FLAC or MP3 file format.</Typography>
                            <Box sx={{ height: '10px', borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '736px', ml: 23 }}></Box>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 23, pt: 1.5, pb: 1, fontWeight: 'bold' }}>Quantity</Typography>
                            <TextField size="small" placeholder='100' sx={{ width: '166px', ml: 23, background: 'rgba(10, 32, 46, 0.05)' }} /> copies
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 23, pt: 2, pb: 1 }}>Specify the number of copies you want to make available for sale <br />Once set, the quantity cannot be changed later.</Typography>
                            <Box sx={{ height: '10px', borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '736px', ml: 23 }}></Box>

                            <Grid item xs={11}>
                                <Grid container>
                                    <Grid item xs={8}>
                                        <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 23, pt: 2, fontWeight: 'bold' }}>Artwork</Typography>
                                        <Button sx={{ height: '28px', width: '112px', background: 'white', fontSize: '12px', color: 'rgba(10, 32, 46, 0.6)', fontWeight: 'bold', ml: 23, mt: 2, border: '1px solid rgba(10, 32, 46, 0.4)' }}>BROWSE FILE</Button>
                                        <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 23, pt: 2, pb: 1 }}>Minimum resolution 1400x1400 pixels. <br />Supported file formats PNG, JPG. Maximum file size 10MB.</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{ height: '140px', width: '140px', background: 'rgba(10, 32, 46, 0.05)', border: '1px solid rgba(10, 32, 46, 0.2)', mt: 1, ml: 5, pt: 3, pl: 3 }}>
                                            <FaMusic style={{ height: '80.5px', width: '80.5px', color: 'gray' }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Box sx={{ height: '10px', borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '736px', ml: 23 }}></Box>

                            <Grid item xs={12} sx={{ ml: 50, mb: 10, mt: 2 }}>
                                <Grid container>
                                    <Grid item xs={3}>
                                        <Button sx={{ height: '40px', width: '101px', background: 'rgb(255, 255, 255)', fontSize: '16px', color: ' rgba(10, 32, 46, 0.6)', fontWeight: 'bold', ml: 23, mt: 2, border: '1px solid rgba(10, 32, 46, 0.4)' , borderRadius : '7px', marginLeft: 30 }}>CANCEL</Button>
                                    </Grid>

                                    <Link to='/uploadtrackicon'>
                                        <Grid item xs={2}>
                                            <Button sx={{ height: '40px', width: '163px', background: ' linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)', fontSize: '16px', color: 'white', fontWeight: 'bold', ml: 23, mt: 2, border: '1px solid rgba(10, 32, 46, 0.4)', borderRadius : '7px' }}>UPLOAD TRACK</Button>
                                        </Grid>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                )}
                {tabValue === 1 && (
                    <Box >
                        <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '18px', pl: 23, pt: 2, fontWeight: 'bold' }}>Marketplace</Typography>
                        <Checkbox sx={{ ml: 22, mt: 1 }}
                            checked={checked}
                            onChange={handleCheckboxChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        /> Make available for purchase

                        <Grid item xs={12} sx={{ ml: 1 }}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 23, pt: 4, pb: 1 }}>Price</Typography>
                                    <TextField size="small" sx={{ width: '95px', ml: 23, background: 'rgba(10, 32, 46, 0.05)' }} />
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 2, pt: 4, pb: 1 }}>Currency</Typography>
                                    <TextField size="small" sx={{ width: '95px', ml: 2, background: 'rgba(10, 32, 46, 0.05)' }} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Box sx={{ height: '10px', borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '736px', ml: 23, mt: 2 }}></Box>
                        <Checkbox sx={{ ml: 22, mt: 1 }}
                            checked={checked1}
                            onChange={handleCheckboxChange1}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />Enable donations

                        <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 23, pt: 2, pb: 1 }}>Set a percentage of all of your profits from this track to be donated to an organization.</Typography>

                        <Grid item xs={12} sx={{ ml: 1 }}>
                            <Grid container>
                                <Grid item xs={3}>
                                    <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 23, pt: 4, pb: 1 }}>Percentage</Typography>
                                    <TextField size="small" sx={{ width: '95px', ml: 23, background: 'rgba(10, 32, 46, 0.05)' }} />
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography sx={{ pt: 10, pl: 7 }}>% of all sale profits got to</Typography>
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 2, pt: 4, pb: 1 }}>Receiver</Typography>
                                    <TextField size="small" sx={{ width: '95px', ml: 2, background: 'rgba(10, 32, 46, 0.05)' }} />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Box sx={{ height: '10px', borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '736px', ml: 23, mt: 2 }}></Box>
                        <Box sx={{ ml: 21 }}>
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 2, pt: 4, pb: 1 }}>Release date</Typography>
                            <TextField placeholder='MM/DD/YYYY' size="small" sx={{ width: '166px', ml: 2, background: 'rgba(10, 32, 46, 0.05)' }} />
                            <Typography sx={{ color: 'rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 2, pt: 4, pb: 1 }}>Optional</Typography>
                            <Box sx={{ height: '10px', borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '736px', ml: 2, mt: 2 }}></Box>
                        </Box>
                        <Grid item xs={12} sx={{ ml: 58, pb: 10 }}>
                            <Grid container >
                                <Grid item xs={3}>
                                    <Link to = '/artisttrack'>
                                        <Button sx={{ height: '40px', width: '101px', background: 'rgb(255, 255, 255)', fontSize: '14px', color: ' rgba(10, 32, 46, 0.6)', fontWeight: 'bold', ml: 30, mt: 2, border: '1px solid rgba(10, 32, 46, 0.4)' }}>CANCEL</Button>
                                    </Link>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button sx={{ height: '40px', width: '101px', background: ' linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)', fontSize: '14px', color: 'white', fontWeight: 'bold', ml: 23, mt: 2, border: '1px solid rgba(10, 32, 46, 0.4)' }}>SUBMIT</Button>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Box>
                )}
            </MainWrapper>
        </Box>
    );
};

export default UploadTrackProfile;
