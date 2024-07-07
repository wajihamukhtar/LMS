import React from 'react';
import { Box, } from '@mui/material';
import AdmissionForm from '../../components/global/AdmissionForm';

const ClassForm = () => {
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
      <AdmissionForm />
    </Box>
  );
}
export default ClassForm;