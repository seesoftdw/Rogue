import {
    Box,
    Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import { FaShoppingCart } from "react-icons/fa";

type Props = {};

const EmptyCart: React.FC<Props> = (props) => {


    useEffect(() => {
        document.body.classList.add('remove-before');
        return () => {
            document.body.classList.remove('remove-before');
        };
    }, []);

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
