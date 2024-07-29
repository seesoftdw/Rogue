import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import { Link } from 'react-router-dom';

const ManageProfile: React.FC = () => {
    return (
        <Box className= 'EditProfile'>
            <MainWrapper>
                <Box sx={{ mt: 1 }}>
                    <Typography className='editprofile' >
                        Edit Profile
                    </Typography>

                    <Box sx={{ mt: 5 }}>
                        <Typography className='fname' sx={{ pl: 43, pb: 1 }}>First name</Typography>
                        <TextField  className='textfield1' size='small' sx={{  ml: 43}}></TextField>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Typography  className='lname' sx={{ pl: 43, pb: 1 }}>Last name</Typography>
                        <TextField   className='textfield2' size='small' sx={{  ml: 43 }}></TextField>
                    </Box>

                    <Box className = 'box1' sx={{ ml: 43, mt: 4 }}></Box>
                    <Typography className= 'pimage' sx={{  pl: 43, pb: 1, pt: 2 }}>Profile image</Typography>
 
                    <Box display="flex" sx={{ mt: 1, ml: 43, }}>
                        <Button className= 'bfilebutton'
                            color="primary"
                        >
                            BROWSE FILE
                        </Button>
                    </Box>

                    <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pl: 43, pb: 1, pt: 2 }}>Recommended file resolution 1700x1700. Supported file  <br></br>formats PNG, JPG. Maximum file size 10MB.</Typography>
                    <Box sx={{ borderBottom: '1px solid rgba(10, 32, 46, 0.2)', width: '448px', ml: 43, mt: 3 }}></Box>

                    <Box display="flex" justifyContent="center" sx={{ mt: 3, gap: 2, ml: 30 }}>
                        <Button className='cancelbutton'
                            color="primary"
                        >
                            CANCEL
                        </Button>
                        <Link to='/yourprofiles'>
                            <Button className='savebutton'
                            >
                                SAVE
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </MainWrapper>
        </Box>
    );
};

export default ManageProfile;
