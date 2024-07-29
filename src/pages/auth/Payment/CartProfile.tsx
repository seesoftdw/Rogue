import {
    Box,
    TextField,
    Typography,
    Grid,
    Button,
    FormControl,
    Select,
    MenuItem,
    SelectChangeEvent,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import MainWrapper from '../../../components/common/MainWrapper';
import track1 from '../../../assets/images/coverart-track-1.jpg';
import coverart from '../../../assets/images/coverart-track-1.jpg';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

type Props = {};

const CartProfile: React.FC<Props> = (props) => {
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
        document.body.classList.add('remove-before');
        return () => {
            document.body.classList.remove('remove-before');
        };
    }, []);

    const handleDropdownChange = (event: SelectChangeEvent<string>) => {
        setSelectedValue(event.target.value);
    };

    return (
        <Box>
            <MainWrapper>
                <Box width="100%" className="bg-grad-gray">
                    <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc' }}>
                        <Grid item xs={12} display={'flex'}>
                            <Grid item xs={8} >
                                <Typography sx={{ fontSize: '36px', fontWeight: 'bold' }}>Cart</Typography>
                                <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc' }}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2} sx={{ borderTop: '1px solid #cccccc', borderBottom: '1px solid #cccccc' }}>
                                            <Grid item xs={12} sm={8} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3 }}>
                                                NAME
                                            </Grid>
                                            <Grid item xs={12} sm={2} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3 }}>
                                                COPY
                                            </Grid>

                                            <Grid item xs={12} sm={2} sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)', fontWeight: 600, p: 3 }}>
                                                PRICE
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc' }}>
                                    <Grid item xs={12}>
                                        <Grid container spacing={2} sx={{ borderBottom: '1px solid #cccccc' }}>
                                            <Grid item xs={8}>
                                                <Grid container>
                                                    <Grid item xs={1.5} sx={{ pb: 2 }}>
                                                        <img src={coverart} alt="" style={{ height: '40px', width: '40px' }} />
                                                    </Grid>

                                                    <Grid item xs={5}>
                                                        <Typography sx={{ fontSize: '14px', fontWeight: 500 }}>Mellow Silhouette Rhapsody</Typography>
                                                        <Typography sx={{ fontSize: '14px', color: 'rgba(10, 32, 46, 0.4)' }}>
                                                            Royal Big Ben Orchestra
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', p: 3 }}>
                                                4 of 10
                                            </Grid>
                                            <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', fontWeight: 600, p: 1 }}>
                                                $12{' '}
                                                <Button>
                                                    <RiDeleteBin5Fill style={{ height: '20px', width: '17.5px', color: 'rgba(10, 32, 46, 0.4)' }} />
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Box sx = {{ml : 65}}>
                                    <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc' }}>
                                        <Grid item xs={12}>
                                            <Grid container spacing={2} sx={{ borderBottom: '1px solid #cccccc' }}>
                                                <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', p: 3  , ml : -1.5}}>
                                                    Subtotal
                                                </Grid>
                                                <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', fontWeight: 600, p: 3 , ml : 11 }}>
                                                    $12
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} sx={{ mt: 1, borderBottom: '1px solid #cccccc' }}>
                                        <Grid item xs={12}>
                                            <Grid container spacing={2} sx={{ borderBottom: '1px solid #cccccc' }}>
                                                <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', p: 3, ml : -1.5 }}>
                                                    Taxes
                                                </Grid>
                                                <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', fontWeight: 600, p: 3  , ml : 11}}>
                                                    0
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={2} sx={{ mt: 1 }}>
                                        <Grid item xs={12}>
                                            <Grid container spacing={2} >
                                                <Grid item xs={12} sm={6} sx={{ fontSize: '16px', color: 'black', fontWeight : 'bold', p: 3 , ml : -1.5 }}>
                                                    Total due
                                                </Grid>
                                                <Grid item xs={12} sm={2} sx={{ fontSize: '16px', color: 'black', fontWeight: 600, p: 3 , ml : 1 }}>
                                                    $12
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>


                            <Grid item xs={4} sx={{ pl: 5, pr: 5, borderLeft: '1px solid #cccccc', backgroundColor: 'rgba(10, 32, 46, 0.02)' }}>
                                <Typography sx={{ fontSize: '20px', fontWeight: 'bold', pt: 1 }}>Pay with card</Typography>

                                <Box sx={{ mt: 3 }}>
                                    <Typography sx={{ fontSize: '14px', pb: 1, color: 'rgba(10, 32, 46, 0.7)' }}>Email address</Typography>
                                    <TextField size="small" type="email" variant="outlined" fullWidth required style={{ background: 'rgba(10, 32, 46, 0.05)' }} />
                                </Box>

                                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', pt: 2, color: 'rgba(10, 32, 46, 0.9)' }}>Billing address</Typography>
                                <Box sx={{ mt: 3 }}>
                                    <Typography sx={{ fontSize: '14px', pb: 1, color: 'rgba(10, 32, 46, 0.7)' }}>Name</Typography>
                                    <TextField size="small" type="text" variant="outlined" fullWidth required style={{ background: 'rgba(10, 32, 46, 0.05)' }} />
                                </Box>

                                <Box sx={{ mt: 3 }}>
                                    <FormControl fullWidth variant="outlined">
                                        {/* <InputLabel id="demo-simple-select-outlined-label">United States</InputLabel> */}
                                        <Typography sx={{ fontSize: '14px', pb: 1, color: 'rgba(10, 32, 46, 0.7)' }}>Country</Typography>

                                        <Select size="small"
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                            value={selectedValue}
                                            onChange={handleDropdownChange}
                                            label="Option"
                                            style={{ background: 'rgba(10, 32, 46, 0.05)' }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Option 1</MenuItem>
                                            <MenuItem value={20}>Option 2</MenuItem>
                                            <MenuItem value={30}>Option 3</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>

                                <Box sx={{ mt: 3 }}>
                                    <Typography sx={{ fontSize: '14px', pb: 1, color: 'rgba(10, 32, 46, 0.7)' }}>Address</Typography>
                                    <TextField size="small" type="text" variant="outlined" fullWidth required style={{ background: 'rgba(10, 32, 46, 0.05)' }} />
                                </Box>

                                <Typography sx={{ fontSize: '18px', fontWeight: 'bold', pt: 2, color: 'rgba(10, 32, 46, 0.9)' }}>Payment details</Typography>

                                <Box sx={{ mt: 3 }}>
                                    <Typography sx={{ fontSize: '14px', pb: 1, color: 'rgba(10, 32, 46, 0.7)' }}>Card information</Typography>
                                    <TextField size="small" type="text" variant="outlined" fullWidth required style={{ background: 'rgba(10, 32, 46, 0.05)' }} />
                                </Box>


                                <Grid item xs={12} display={'flex'}>
                                    <Grid item xs={6} sx={{ mr: 3, mt: 3 }}>
                                        <Typography sx={{ fontSize: '14px', pb: 1, color: 'rgba(10, 32, 46, 0.7)' }}>MM/YY</Typography>
                                        <TextField size="small" type="text" variant="outlined" fullWidth required style={{ background: 'rgba(10, 32, 46, 0.05)' }} />
                                    </Grid>
                                    <Grid item xs={4} sx={{ mt: 3 }}>
                                        <Typography sx={{ fontSize: '14px', pb: 1, color: 'rgba(10, 32, 46, 0.7)' }}>CVC</Typography>
                                        <TextField size="small" type="text" variant="outlined" fullWidth required style={{ background: 'rgba(10, 32, 46, 0.05)' }} />
                                    </Grid>
                                </Grid>

                                <Link to='/cartcheckout'>
                                    <Button sx={{
                                        mt: 3,
                                        background: 'linear-gradient(-180deg, rgb(0, 202, 255) 0%, rgb(0, 154, 255) 100%)',
                                        border: '1px solid rgba(10, 32, 46, 0.25)',
                                        height: '35px',
                                        width: '300px',
                                        color: 'rgb(255, 255, 255)',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        mb: 10
                                    }}
                                    >PAY$12</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </MainWrapper>
        </Box>
    );
};

export default CartProfile;
