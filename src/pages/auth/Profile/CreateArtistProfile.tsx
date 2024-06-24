import { Avatar, Box, Button, TextField, Typography, Grid, SelectChangeEvent, TextareaAutosize } from '@mui/material';
import React from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom';



const CreateArtistProfile: React.FC<{}> = () => {
    const [firstDropdown, setFirstDropdown] = React.useState('');
    const [secondDropdown, setSecondDropdown] = React.useState('');

    const handleFirstDropdownChange = (event: SelectChangeEvent<string>) => {
        setFirstDropdown(event.target.value as string);
    };

    const handleSecondDropdownChange = (event: SelectChangeEvent<string>) => {
        setSecondDropdown(event.target.value as string);
    };
    return (
        <MainWrapper>
            <Box sx={{ mt: 10 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '36px', textAlign: 'center' }}>
                    Create artist profile
                </Typography>
                <Typography sx={{ color: ' rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 44, pt: 5 }}>Artist/Band name</Typography>
                <TextField size='small' sx={{ width: '448px', ml: 44, mt: 1, background: 'rgba(10, 32, 46, 0.05)' }}></TextField>

                <Box sx={{}}>
                    <Box sx={{}}>
                        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                            <FormControl size='small' fullWidth variant="outlined" sx={{ width: '212px', ml: 44 }}>
                                <Typography sx={{ color: ' rgba(10, 32, 46, 0.7)', fontSize: '14px' }}>Genre</Typography>
                                <Select
                                    labelId="first-dropdown-label"
                                    value={firstDropdown}
                                    onChange={handleFirstDropdownChange}
                                    label="First Dropdown"
                                    style={{ background: "rgba(10, 32, 46, 0.05)" }}
                                >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl size='small' fullWidth variant="outlined" sx={{ width: '220px' }}>
                                <Typography sx={{ color: ' rgba(10, 32, 46, 0.7)', fontSize: '14px' }}>Country</Typography>

                                <Select

                                    labelId="second-dropdown-label"
                                    value={secondDropdown}
                                    onChange={handleSecondDropdownChange}
                                    label="Second Dropdown"
                                    style={{ background: "rgba(10, 32, 46, 0.05)" }}
                                >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    <MenuItem value={10}>Option 1</MenuItem>
                                    <MenuItem value={20}>Option 2</MenuItem>
                                    <MenuItem value={30}>Option 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
                <Typography sx={{ color: ' rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 44, pt: 2 }}>Bio</Typography>

                <Box sx={{ ml: 44 }}>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={12}
                        style={{ width: '448px', padding: '8px', borderRadius: '4px', borderColor: 'gray', background: "rgba(10, 32, 46, 0.05)" }}
                    />
                </Box>

                <Box sx={{ borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '448px', ml: 44, mt: 2 }}></Box>

                <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '18px', fontWeight: 'bold', pl: 44, pb: 1, pt: 2 }}>Profile image</Typography>

                <Box display="flex" sx={{ mt: 1, ml: 44, }}>
                    <Button
                        // variant="contained"
                        color="primary"
                        sx={{
                            background: 'rgb(255, 255, 255)',
                            height: '28px',
                            width: '112px',
                            borderRadius: '6px',
                            fontSize: '10px',
                            fontWeight: 'bold',
                            color: ' rgba(10, 32, 46, 0.6)',
                            border: '1px solid rgba(10, 32, 46, 0.4)'
                        }}
                    >
                        BROWSE FILE
                    </Button>
                </Box>

                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 44, pb: 1, pt: 2 }}>Recommended file resolution 1700x1700. Supported file  <br></br>formats PNG, JPG. Maximum file size 10MB.</Typography>

                <Typography sx={{ color: 'rgba(10, 32, 46, 0.9)', fontSize: '18px', fontWeight: 'bold', pl: 44, pb: 1, pt: 2 }}>Cover image</Typography>

                <Box display="flex" sx={{ mt: 1, ml: 44, }}>
                    <Button
                        // variant="contained"
                        color="primary"
                        sx={{
                            background: 'rgb(255, 255, 255)',
                            height: '28px',
                            width: '112px',
                            borderRadius: '6px',
                            fontSize: '10px',
                            fontWeight: 'bold',
                            color: ' rgba(10, 32, 46, 0.6)',
                            border: '1px solid rgba(10, 32, 46, 0.4)'
                        }}
                    >
                        BROWSE FILE
                    </Button>
                </Box>

                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 44, pb: 1, pt: 2 }}>Recommended file resolution 1700x1700. Supported file  <br></br>formats PNG, JPG. Maximum file size 10MB.</Typography>
                <Box sx={{ borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '448px', ml: 44, mt: 2 }}></Box>
                <Typography sx={{ color: ' rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 44, pt: 5 }}>Homepage</Typography>
                <TextField size='small' placeholder="https://" sx={{ width: '448px', ml: 44, mt: 1, background: 'rgba(10, 32, 46, 0.05)' }}></TextField>
                <Typography sx={{ color: ' rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 44, pt: 2 }}>Facebook Page</Typography>
                <TextField size='small' placeholder="https://" sx={{ width: '448px', ml: 44, mt: 1, background: 'rgba(10, 32, 46, 0.05)' }}></TextField>
                <Typography sx={{ color: ' rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 44, pt: 2 }}>Instagram</Typography>
                <TextField size='small' placeholder="https://" sx={{ width: '448px', ml: 44, mt: 1, background: 'rgba(10, 32, 46, 0.05)' }}></TextField>
                <Typography sx={{ color: ' rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 44, pt: 2 }}>Tik Tok</Typography>
                <TextField size='small' placeholder="https://" sx={{ width: '448px', ml: 44, mt: 1, background: 'rgba(10, 32, 46, 0.05)' }}></TextField>
                <Box sx={{ borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '448px', ml: 44, mt: 3 }}></Box>
                <Grid container spacing={2} sx={{ mt: 2, px: 20 }}>
                    <Grid item xs={12} sx={{ ml: 24, mb: 7 }}>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant="contained" color="primary" sx={{ width: '213px', background: 'white', color: 'black', fontSize: '16px', fontWeight: 'bold' }}>
                                CANCEL
                            </Button>
                            <Link to="/yourprofileone">
                                <Button variant="contained" sx={{ width: '213px', background: ' linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)', color: 'white', fontSize: '16px', fontWeight: 'bold' }}>
                                    CREATE PROFILE
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </MainWrapper>
    );
};


export default CreateArtistProfile;
