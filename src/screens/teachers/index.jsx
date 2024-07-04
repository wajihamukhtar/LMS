import React, { useState } from 'react';
import { Box, } from '@mui/material';
import TeacherRegistration from '../../components/global/TeacherRegistration';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate()
    return (
        <Box
        onClick={()=>{navigate('/teachers/teacher-add')}}
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
         <TeacherRegistration/>
        </Box>
      );
    }
export default Registration;