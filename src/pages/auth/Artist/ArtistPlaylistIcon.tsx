import { Box, Grid, Typography, Select, MenuItem, TextField, InputAdornment, Button } from '@mui/material';
import React, { useState } from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import CustomBreadcrumbs from '../../../components/common/Breadcrumbs';
import { MdQueueMusic } from "react-icons/md";
import { Link } from 'react-router-dom';

type Props = {}

const ArtistPlaylistIcon = (props: Props) => {

    return (
        <Box>
            <MainWrapper>
                <Box width="100%">
                    <Box>
                        <CustomBreadcrumbs />
                    </Box>
                    <Box sx = {{ml :62 , mt : 15}}>
                        <MdQueueMusic  style={{height : '128px' , width : '128px' , color : 'rgba(10, 32, 46, 0.3)'}}/>
                    </Box>
                    <Typography sx = {{ color : 'rgba(10, 32, 46, 0.5)' , fontSize : '16px' ,textAlign : 'center'}}>Start by creating a playlist</Typography>
                </Box>
                <Link to = ''>
                    <Button sx={{ ml: 56, mt : 5, background: ' linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)', color: 'white', fontWeight: 'bold' , height : '40px' , width : '227px' }}>CREATE NEW PLAYLIST</Button>
                </Link>

            </MainWrapper >
        </Box >
    );
};

export default ArtistPlaylistIcon;

