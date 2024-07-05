import React from 'react';
import { Box, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AdmissionForm from '../../components/global/AdmissionForm';

const Admission = () => {
  const navigate = useNavigate()
    return (
        <Box
        onClick={()=>{navigate('/admission/admission')}}
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
      <AdmissionForm/>
        </Box>
      );
    }
export default Admission;