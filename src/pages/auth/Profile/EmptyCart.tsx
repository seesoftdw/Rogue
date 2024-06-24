import {
    Box,
    ListItemIcon,
    createTheme,
    SelectChangeEvent,
    Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import track1 from '../../../assets/images/coverart-track-1.jpg';

import { FaShoppingCart } from "react-icons/fa";


const tracks = { title: 'Mellow Silhouette Rhapsody', image: track1 };

type Props = {};

interface BritSchoolIconProps {
    src: string;
    alt: string;
}

const EmptyCart: React.FC<Props> = (props) => {
    const [tabValue, setTabValue] = useState(0);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        document.body.classList.add('remove-before');
        return () => {
            document.body.classList.remove('remove-before');
        };
    }, []);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleDropdownChange = (event: SelectChangeEvent<string>) => {
        setSelectedValue(event.target.value);
    };



 







    return (
        <Box>
            <MainWrapper>

                <Typography sx={{ fontSize: '36px', fontWeight: 'bold' }}>Cart</Typography>
                <Box sx={{ ml: 53, mt: 10 }}>
                    <FaShoppingCart style={{ height: '128px', width: '144px', color: 'rgba(10, 32, 46, 0.3)' }} />
                    <Typography sx={{ fontSize: '16px', fontWeight: 500, color :'rgba(10, 32, 46, 0.5)' ,   pt : 2}}>Your cart is empty.</Typography>
                </Box>
                <Typography sx={{ fontSize: '16px', fontWeight: 500, color :'rgba(10, 32, 46, 0.5)' ,pl : 35  }}>    Start shopping now to find the perfect tracks for your library!</Typography>

            </MainWrapper>
        </Box>
    );
};

export default EmptyCart;
