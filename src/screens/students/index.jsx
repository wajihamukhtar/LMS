import React from 'react';
import { Box } from '@mui/material';
import RegistrationForm from '../../components/global/RegistrationForm';

const Registration = () => {
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
      }}
    >
      <RegistrationForm />
    </Box>
  );
}
export default Registration;