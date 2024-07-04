import React from 'react';
import { Box, Typography } from '@mui/material';
import img from '../../images/logosection/Seminar-pana.png'
import logo from '../../images/logosection/jplogo.jpg'
import theme from '../../theme';
const LogoSection = () => {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}

    >
      <Box component={'span'} sx={{ borderRadius: '50%', width: '80px', marginBottom: '20px', }}>
        <img class="rounded-circle" src={logo} alt="" width={'100%'} height={'auto'} />
      </Box>
      <Typography sx={theme.typography.h2} component={'h1'}>
        WELCOME TO LEARNING MANAGEMENT SYSTEM
      </Typography>
      <Box sx={{
        width: '100%', height: '400px', backgroundImage:
          `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'start',
      }}>
        {/* <img src={img} alt="" width={'100%'} height={'100%'} /> */}
      </Box>
    </Box >
  );
};

export default LogoSection;
