// import Header from '../components/Header'
import React, { useState } from 'react';
import { Typography, createTheme, ThemeProvider } from '@mui/material';
import MainWrapper from '../../components/common/MainWrapper';
const theme = createTheme();

const SignIn = () => {

    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <MainWrapper>
            <ThemeProvider theme={theme}>
                {/* <Header open={open} toggleDrawer={toggleDrawer} /> */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Typography align="center" sx={{ fontSize: '36px', fontWeight: 'bold' }}>Terms of Service</Typography>

                <Typography align="center" sx={{ fontSize: '16px', fontWeight: 'normal', pl: 20, pr: 20, pt: 5 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar dignissim lectus, at ultricies massa lacinia eget. Cras<br></br> condimentum faucibus felis, sit amet iaculis libero condimentum non. Morbi scelerisque volutpat pharetra. Ut venenatis diam  <br></br>eu  ex tincidunt varius. Duis fringilla varius est, sed tempus est congue et. Aliquam turpis tortor, ornare sed auctormalesuada,  <br></br>  scelerisque eu augue. Nunc condimentum id arcu vel auctor. Vestibulum faucibus purus vel ornare rutrum. Maecenas  nec   met <br></br> us a orci    lobortis rhoncus ac ut arcu. Vivamus molestie est ut dui sodales finibus. Ut pharetra magna leo, nec egestas turpis  vo <br></br>lut  pat  eget. Duis malesuada arcu eget tortor scelerisque pulvinar. Morbi luctus faucibus est, in porta quam eleifend malesuada. <br></br> Duis pretium  suscipit nulla blandit semper. Curabitur a est nunc. Aliquam laoreet pretium ex ut scelerisque.<br></br> <br></br>
                    Vivamus ultrices magna quis leo aliquam, at aliquet justo finibus. Aliquam nec libero ultricies, eleifend nibh vel,  feugiat  magna. <br></br>  Nulla vel  iaculis nunc . Ut hendrerit molestie tristique. Fusce libero purus, scelerisque quis blandit a, posuere   consequat quam. <br></br> Nam et lacus bibendum, gravida sem a, blandit nisl. Donec non arcu quis ligula eleifend viverra.  Pellentesque augue neque,  eleme <br></br>nt um ac ornare at, convallis vel mauris. Pellentesque ornare interdum ultrices. Proin gravida nunc quis imperdiet mattis. Donec quis tincidunt risus, quis placerat purus.<br></br> <br></br>
                    Vivamus ultrices magna quis leo aliquam, at aliquet justo finibus. Aliquam nec libero ultricies, eleifend nibh vel, feugiat magna. Nulla vel iaculis nunc. Ut hendrerit molestie tristique. Fusce libero purus, scelerisque quis blandit a, posuere consequat quam. Nam et lacus bibendum, gravida sem a, blandit nisl. Donec non arcu quis ligula eleifend viverra. Pellentesque augue neque, elementum ac ornare at, convallis vel mauris. Pellentesque ornare interdum ultrices. Proin gravida nunc quis imperdiet mattis. Donec quis tincidunt risus, quis placerat purus.
                </Typography>


            </ThemeProvider>
        </MainWrapper>


    )
};
export default SignIn;