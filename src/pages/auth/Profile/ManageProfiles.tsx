import { Avatar, Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
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

    useEffect(() => {
        const userId = 'da162b5c-44bd-443f-b2ad-9e977a717b60'
        dispatch(getUserById(userId))
            .then((action) => {
                if (getUserById.fulfilled.match(action)) {
                    setUsers((prevState) => ({
                        ...prevState,
                        ...action.payload,
                        isArtist: action.payload.isArtist === 'true' 
                    }));
                } else {
                    console.error('Failed to fetch user data');
                }
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, [dispatch]);


    return (
        <MainWrapper>
            <Box sx={{ mt: 10 }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: '36px', textAlign: 'center' }}>
                    Your Profiles
                </Typography>
                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                    <Link to='/editprofile'><Avatar src="/broken-image.jpg" style={{ height: '128px', width: '128px' }} /></Link>
                </Box>
                <Typography variant="body1" sx={{ textAlign: 'center', p: 3, fontSize: '16px', color: 'rgb(0, 154, 255)' }}>
                    {users.email}
                </Typography>
                <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
                    <Link to='/createartistprofile'>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                background: 'linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)',
                                height: '40px',
                                width: '183px',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                color: 'rgb(255, 255, 255)',
                            }}
                        >
                            + ARTIST PROFILE
                        </Button>
                    </Link>
                </Box>
            </Box>
        </MainWrapper>
    );
};

export default ManageProfile;
