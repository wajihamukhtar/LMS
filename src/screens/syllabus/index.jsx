import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SyllabusForm from '../../components/global/SyllabusForm';

const Page = () => {
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
      <SyllabusForm />
    </Box>
  );
}
export default Page;