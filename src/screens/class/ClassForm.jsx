import React from 'react';
import { Box, } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AdmissionForm from '../../components/global/AdmissionForm';

const ClassForm = () => {
  const navigate = useNavigate()
    return (
        <Box
        onClick={()=>{navigate('/class/class-form')}}
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
export default ClassForm;