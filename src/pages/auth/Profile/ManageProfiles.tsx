import { Avatar, Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import { Link } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store';
import { getUser, getUserById } from '../../../services/userService';

interface User {
    userId: string;
    email: string;
    password: string;
    isArtist: boolean;
    username: string;
}

const ManageProfile: React.FC = () => {
    const [users, setUsers] = useState<User>({
        userId: '',
        email: '',
        password: '',
        isArtist: false,
        username: ''
    });
    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     const userId = 'da162b5c-44bd-443f-b2ad-9e977a717b60'
    //     dispatch(getUserById(userId))
    //         .then((action) => {
    //             if (getUserById.fulfilled.match(action)) {
    //                 setUsers((prevState) => ({
    //                     ...prevState,
    //                     ...action.payload,
    //                     isArtist: action.payload.isArtist === 'true' 
    //                 }));
    //             } else {
    //                 console.error('Failed to fetch user data');
    //             }
    //         })
    //         .catch((error) => {
    //             console.error('Error fetching user data:', error);
    //         });
    // }, [dispatch]);


    return (
        <Box className= 'ManageProfile'>
            <MainWrapper>
                <Box sx={{ mt: 10 }}>
                    <Typography  className='yprofiles' >
                        Your Profiles
                    </Typography>
                    <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                        <Link to='/editprofile'><Avatar src="/broken-image.jpg" style={{ height: '128px', width: '128px' }} /></Link>
                    </Box>
                    <Typography className='examplegmail'  variant="body1" sx={{  p: 3 }}>
                        {/* {users.email} */}
                        example@emil.com
                    </Typography>
                    <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                        <Link to='/createartistprofile'>
                            <Button className='artistprofiles'
                                variant="contained"
                                color="primary"
                            >
                                + ARTIST PROFILE
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </MainWrapper>
        </Box>
    );
};

export default ManageProfile;
