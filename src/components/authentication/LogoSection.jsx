import React from 'react';
import { Box, Typography } from '@mui/material';
import img from '../../images/logosection/Seminar-pana.png'
import logo from '../../images/logosection/jplogo.jpg'
import theme from '../../theme';
const LogoSection = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        height: '100%',
        marginTop:'60px',
       
      }}
      >
      <Box component={'span'} sx={{ borderRadius: '50%' ,width:'80px' ,marginBottom:'20px',}}>
      <img class="rounded-circle" src={logo} alt="" width={'100%'} height={'100%'} />
        </Box>  
      <Typography sx={theme.typography.h2} component={'h1'}>
        WELCOME TO LEARNING MANAGEMENT SYSTEM
      </Typography>
      <Box>
      <img src={img} alt="" width={'100%'} height={'100%'} />
      </Box>
    </Box>
  );
};

export default LogoSection;
