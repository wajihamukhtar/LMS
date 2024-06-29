import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const FormSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        gap: 4,
        backgroundColor: '	#F5F5F5',
        paddingTop:'40px'
      }}
    >
      <Outlet />
    </Box>
  );
};

export default FormSection;
