import { Box, createTheme, ListItemIcon, Typography, Button } from '@mui/material';
import React from 'react';
import MainWrapper from '../../../../components/common/MainWrapper';
import { FaMusic } from "react-icons/fa6";
import { Link } from 'react-router-dom';

type Props = {};

interface BritSchoolIconProps {
    src: string;
    alt: string;
}



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



const UploadTrackIcon: React.FC<Props> = (props) => {




    return (
        <Box>
            <MainWrapper>
                <Box sx={{ ml: 60, mt: 20 }}>
                    <FaMusic style={{ height: '128px', width: '128px', color: 'rgba(10, 32, 46, 0.3)' }} />
                </Box>
                <Typography sx={{ color: 'rgba(10, 32, 46, 0.4)', fontSize: '14px', pt: 2, pb: 1, textAlign: 'center' }}>Start by uploading your track.</Typography>
                <Link to = ''>
                    <Button sx={{ height: '40px', width: '163px', background: ' linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)', fontSize: '16px', color: ' rgb(255, 255, 255)', fontWeight: 'bold', ml: 60, mt: 5, border: '1px solid rgba(10, 32, 46, 0.4)' }}>BROWSE FILE</Button>
                </Link>
            </MainWrapper>
        </Box>
    );
};

export default UploadTrackIcon;
