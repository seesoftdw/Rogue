import { Box, Button, TextField, Typography, Grid, SelectChangeEvent, TextareaAutosize } from '@mui/material';
import React from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import { FormControl, MenuItem, Select } from '@mui/material';
import { Link } from 'react-router-dom';
import picture2 from '../../../assets/images/avatar-artist.jpg'
import bgcover from '../../../assets/images/profile-header-artist.jpg'
import './styles.scss'

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
        <Box className="artistProfileTwo">
            <MainWrapper>
                <Box sx={{ mt: 10 }}>
                    <Typography className='main-heading'>
                        Create artist profile
                    </Typography>
                    <Typography className='artistname' sx={{ pl: 44, pt: 5 }}>Artist/Band name</Typography>
                    <TextField className='artistnameinput' placeholder="Royal Big Ben Orchestra" size='small' sx={{ ml: 44, mt: 1, }}>

                    </TextField>

                    <Box>
                        <Box>
                            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                                <FormControl size='small' fullWidth variant="outlined" sx={{ width: '212px', ml: 44 }}>
                                    <Typography className='genre'>Genre</Typography>
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
                                    <Typography className='country'>Country</Typography>

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
                    <Typography className='bio' sx={{ pl: 44, pt: 2 }}>Bio</Typography>

                    <Box sx={{ ml: 44 }}>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={12}
                            placeholder="Royal Big Ben Orchestra, hailing from the heart of London, United Kingdom, embodies the rich musical heritage and vibrant culture of its historic city. Formed under the shadow of the iconic Big Ben, this ensemble of seasoned jazz musicians brings together a unique blend of classic jazz melodies, innovative arrangements, and a distinctly British flair."
                            className='textarea'
                        />
                    </Box>

                    <Box className='BorderBottom' sx={{ ml: 44, mt: 2 }}></Box>

                    <Typography className='profile' sx={{ pl: 44, pb: 1, pt: 2 }}>Profile image</Typography>

                    <Box sx={{ ml: 44 }}>
                        <img src={picture2} alt="Image 2" style={{ width: '129px', height: '129px' }} />
                    </Box>


                    <Box display="flex" sx={{ mt: 1, ml: 44, }}>
                        <Button
                            color="primary"
                            className='browsefilebtn'
                        >
                            BROWSE FILE
                        </Button>
                    </Box>

                    <Typography className='Recommended' sx={{ pl: 44, pb: 1, pt: 2 }}>Recommended file resolution 1700x1700. Supported file  <br></br>formats PNG, JPG. Maximum file size 10MB.</Typography>

                    <Typography className='Coverimage' sx={{ pl: 44, pb: 1, pt: 2 }}>Cover image</Typography>
                    <Box sx={{ ml: 44 }}>
                        <img src={bgcover} alt="Image 2" style={{ width: '449px', height: '129px' }} />
                    </Box>

                    <Box display="flex" sx={{ mt: 1, ml: 44, }}>
                        <Button
                            color="primary"
                            className='browsefilebtn'
                        >
                            BROWSE FILE
                        </Button>
                    </Box>

                    <Typography className='Recommended-file'
                        sx={{
                            pl: 44,
                            pb: 1,
                            pt: 2
                        }}
                    >
                        Recommended file resolution 1700x1700. Supported file  <br></br>formats PNG, JPG. Maximum file size 10MB.
                    </Typography>
                    <Box sx={{ borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '448px', ml: 44, mt: 2 }}></Box>

                    <Typography className='homepage' sx={{ pl: 44, pt: 5 }}>
                        Homepage
                    </Typography>
                    <TextField className='textfield' size='small' placeholder="https://" sx={{ ml: 44, mt: 1, }} />

                    <Typography className='fbpage' sx={{ pl: 44, pt: 2 }}>
                        Facebook Page
                    </Typography>
                    <TextField className='textfield' size='small' placeholder="https://" sx={{ ml: 44, mt: 1 }} />

                    <Typography className='igpage' sx={{ pl: 44, pt: 2 }}>
                        Instagram
                    </Typography>
                    <TextField size='small' placeholder="https://" sx={{ width: '448px', ml: 44, mt: 1, background: 'rgba(10, 32, 46, 0.05)' }}></TextField>
                    <Typography sx={{ color: ' rgba(10, 32, 46, 0.7)', fontSize: '14px', pl: 44, pt: 2 }}>Tik Tok</Typography>
                    <TextField size='small' placeholder="https://" sx={{ width: '448px', ml: 44, mt: 1, background: 'rgba(10, 32, 46, 0.05)' }}></TextField>
                    <Box sx={{ borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '448px', ml: 44, mt: 3 }}></Box>
                    <Grid container spacing={2} sx={{ mt: 2, px: 20 }}>
                        <Grid item xs={12} sx={{ ml: 24, mb: 7 }}>
                            <Box sx={{ display: 'flex', gap: 2, ml: 30 }}>
                                <Button className='cancel' variant="contained" >
                                    CANCEL
                                </Button>
                                <Link to="/yourprofileone">
                                    <Button className='save' variant="contained">
                                        SAVE
                                    </Button>
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </MainWrapper>
        </Box>
    );
};


export default CreateArtistProfile;
