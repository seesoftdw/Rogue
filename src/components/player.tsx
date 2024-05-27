import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import musiccover from '../assets/images/coverart-track-1.jpg'
import { IconButton } from "@mui/material";
import { IoShuffle } from "react-icons/io5";
import { BsFillSkipBackwardFill, BsFillSkipForwardFill } from "react-icons/bs";
import { FaPause } from "react-icons/fa";
import { TfiLoop } from "react-icons/tfi";

import { FaExpandAlt } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";



const Widget = styled("div")(({ theme }) => ({
    color: 'black',
    borderRadius: 16,
    width: 343,
    maxWidth: "100%",
    marginLeft: "13%",
    marginBottom: "3%",
    position: "relative",
    zIndex: 1,
    backgroundColor: 'transparent',
}));

const TinyText = styled(Typography)({
    fontSize: "0.75rem",
    opacity: 0.38,
    fontWeight: 500,
    letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {
    const theme = useTheme();
    const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
    const duration = 200; // seconds
    const [position, setPosition] = React.useState(32);
    function formatDuration(value: number) {
        const minute = Math.floor(value / 60);
        const secondLeft = value - minute * 60;
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    const CoverImage = styled('div')({
        width: 100,
        height: 100,
        objectFit: 'cover',
        overflow: 'hidden',
        flexShrink: 0,
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.08)',
        '& > img': {
            width: '100%',
        },
    });


    return (


        <Box sx={{
            display: 'flex', alignItems: 'center', gap: { lg: 6, md: 3, sm: '13px', xs: '13px' }
        }} >
            <Box sx={{ display: "flex" }}>
                <IconButton aria-label="previous" sx={{ fontSize: { lg: '1.5rem;', md: '1.5rem', sm: '17px' }, p: { sm: '3' } }}>
                    <IoShuffle />
                </IconButton>
                <IconButton aria-label="previous" sx={{ fontSize: { lg: '1.5rem;', md: '1.5rem', sm: '17px' } }}>
                    <BsFillSkipBackwardFill />
                </IconButton>
                <IconButton aria-label="play/pause" sx={{ pl: { lg: '17px;', md: '17px', sm: '3px' }, fontSize: { lg: '1.5rem;', md: '1.5rem', sm: '17px' } }}>
                    <FaPause />
                </IconButton>
                <IconButton aria-label="next" sx={{ pl: { lg: '17px;', md: '17px', sm: '3px' }, fontSize: { lg: '1.5rem;', md: '1.5rem', sm: '17px' } }}>
                    <BsFillSkipForwardFill />
                </IconButton>
                <IconButton aria-label="next" sx={{ pl: { lg: '17px;', md: '17px', sm: '3px' }, fontSize: { lg: '1.5rem;', md: '1.5rem', sm: '17px' } }}>
                    <TfiLoop />
                </IconButton>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'black' }}>

                <CoverImage sx={{ width: '48px', height: '48px' }}>
                    <img
                        alt="Sunday"
                        src={musiccover}
                    />
                </CoverImage>
                <Box sx={{ ml: 1.5, minWidth: 0 }}>

                    {/* <Typography noWrap  sx={{  fontSize :{ lg : 12,md :11,   sm :10,xs : 8} }}>
                        <b>Mellow Silhouette Rhapsody -- Royal Big Ben Ochestra</b>
                    </Typography> */}

                    <Typography
                        noWrap
                        sx={{
                            fontSize: {
                                lg: 12,
                                md: 9,
                                sm: 8,
                                xs: 8,
                            },

                        }}
                    >
                        <b>Mellow Silhouette Rhapsody -- Royal Big Ben Orchestra</b>
                    </Typography>

                    <Slider
                        aria-label="time-indicator"
                        size="small"
                        value={position}
                        min={0}
                        step={1}
                        max={duration}
                        onChange={(_, value) => setPosition(value as number)}
                        sx={{
                            color: theme.palette.mode === 'dark' ? 'red' : 'rgba(0,0,0,0.87)',
                            height: 4,
                            width: 500,

                            '@media (max-width:1024px)': {
                                width: 250,
                                padding: 0
                            },
                            '@media (max-width:1440px)': {
                                paddingTop: 0,
                                paddingBottom: 3
                            },
                            '@media (max-width:768px)': {
                                width: 220,
                                paddingBottom: 3
                            },

                            '& .MuiSlider-thumb': {
                                width: 8,
                                height: 8,
                                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                                '&::before': {
                                    boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                                },
                                '&:hover, &.Mui-focusVisible': {
                                    boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                                        ? 'rgb(255 255 255 / 16%)'
                                        : 'rgb(0 0 0 / 16%)'
                                        }`,
                                },
                                '&.Mui-active': {
                                    width: 20,
                                    height: 20,
                                },
                            },
                            '& .MuiSlider-rail': {
                                opacity: 0.28,
                            },
                        }}
                    />

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            mt: -2,
                        }}
                    >
                        <TinyText>{formatDuration(position)}</TinyText>
                        <TinyText>-{formatDuration(duration - position)}</TinyText>
                    </Box>

                </Box>
                <Box sx={{ display: 'flex', pl: 4 }} >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        color: '#707070',
                        fontSize: '24px'

                    }}
                        gap={3}>
                    </Box>
                    <Box sx={{ fontSize: { lg: '24px', md: '24px', sm: '17px' }, color: '#707070'  , display : 'flex' }}>
                        <Box sx = {{ p :{lg: '8px', md: '8px', sm: '8px'}}}>
                            <FaVolumeUp />
                        </Box>
                        <Box sx = {{ p :{lg: '8px', md: '8px', sm: '8px'}}}>
                            <IoMenu />
                        </Box>
                        <Box sx = {{ p :{lg: '8px', md: '8px', sm: '8px'}}}>
                            <FaExpandAlt />
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
